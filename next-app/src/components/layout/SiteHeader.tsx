"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import { megaMenus, primaryNavLinks } from "@/data/navigation";
import { MobileNav } from "./MobileNav";
import { ProductDropdown } from "./ProductDropdown";

/** Scroll past this and the header switches to its compact, cut-out state. */
const COMPACT_AFTER = 24;
/** How long an explicit wheel/key gesture overrides measured scroll direction. */
const INPUT_DIRECTION_TTL = 800;

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const mobileOpenRef = useRef(false);
  const lastScrollY = useRef(0);
  const inputDirection = useRef(0);
  const inputDirectionExpiry = useRef(0);

  useEffect(() => {
    mobileOpenRef.current = isMobileOpen;
  }, [isMobileOpen]);

  /**
   * Hide on the way down, reveal (compact) on the way up — the same rules the
   * static build used, including the open-menu and gesture overrides.
   */
  const updateHeaderVisibility = useCallback((currentY: number, direction: number) => {
    if (mobileOpenRef.current) {
      setIsHidden(false);
      lastScrollY.current = currentY;
      return;
    }

    let resolvedDirection = direction;
    if (performance.now() < inputDirectionExpiry.current) {
      resolvedDirection = inputDirection.current;
    }

    if (currentY <= COMPACT_AFTER) {
      setIsScrolled(false);
      setIsHidden(false);
    } else if (resolvedDirection > 0) {
      setIsScrolled(false);
      setIsHidden(true);
      setOpenMenuId(null);
    } else if (resolvedDirection < 0) {
      setIsHidden(false);
      setIsScrolled(true);
    }

    lastScrollY.current = currentY;
  }, []);

  useLenis(
    (lenis) => updateHeaderVisibility(lenis.scroll, lenis.direction),
    [updateHeaderVisibility],
  );

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    if (window.scrollY > COMPACT_AFTER) setIsScrolled(true);

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        updateHeaderVisibility(currentY, Math.sign(currentY - lastScrollY.current));
        frame = 0;
      });
    };

    const onWheel = (event: WheelEvent) => {
      inputDirection.current = Math.sign(event.deltaY);
      inputDirectionExpiry.current = performance.now() + INPUT_DIRECTION_TTL;
      updateHeaderVisibility(window.scrollY, inputDirection.current);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest("button, a, input, textarea, select, [contenteditable]")
      ) {
        return;
      }
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        updateHeaderVisibility(window.scrollY, 1);
      }
      if (["ArrowUp", "PageUp"].includes(event.key)) {
        updateHeaderVisibility(window.scrollY, -1);
      }
      if (event.key === "Home") updateHeaderVisibility(0, -1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [updateHeaderVisibility]);

  // Pressing outside the header, or leaving the breakpoint, closes the panel.
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && headerRef.current?.contains(target)) return;
      setIsMobileOpen(false);
    };

    const media = window.matchMedia("(max-width: 820px)");
    const onMediaChange = () => setIsMobileOpen(false);

    document.addEventListener("pointerdown", onPointerDown);
    media.addEventListener("change", onMediaChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMobileOpen(false);
      headerRef.current?.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileOpen]);

  return (
    <header
      className={cx("site-header", isScrolled && "is-scrolled", isHidden && "is-hidden")}
      ref={headerRef}
      data-header
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && headerRef.current?.contains(next)) return;
        setIsMobileOpen(false);
      }}
    >
      <a className="brand" href="#top" aria-label="iQSetters home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/brand-logo.webp" width={520} height={97} alt="iQSetters" fetchPriority="high" />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {primaryNavLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        {megaMenus.map((menu) => (
          <ProductDropdown
            key={menu.id}
            menu={menu}
            isOpen={openMenuId === menu.id}
            onOpenChange={(open) =>
              setOpenMenuId((current) => {
                if (open) return menu.id;
                // A late close (e.g. the hover-out timer) must not shut a
                // sibling menu that has since taken over.
                return current === menu.id ? null : current;
              })
            }
          />
        ))}
      </nav>

      <div className="header-actions">
        <Button href="#contact" label="Book a demo" variant="dark" className="header-cta" />
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsMobileOpen((open) => !open)}
      >
        <span className="menu-bars" aria-hidden="true" />
      </button>

      <MobileNav isOpen={isMobileOpen} onNavigate={() => setIsMobileOpen(false)} />
    </header>
  );
}
