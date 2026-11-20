"use client";

import { useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { cx } from "@/lib/cx";
import type { MegaMenu } from "@/data/navigation";

const HOVER_CLOSE_DELAY = 140;

type ProductDropdownProps = {
  menu: MegaMenu;
  isOpen: boolean;
  /** Parent keeps a single open menu, so opening one closes the others. */
  onOpenChange: (open: boolean) => void;
};

/**
 * One desktop mega menu. Pointer, keyboard, focus and outside-click handling
 * all live here; the parent only tracks which menu is currently open.
 */
export function ProductDropdown({ menu, isOpen, onOpenChange }: ProductDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>(0);
  const openedByHover = useRef(false);
  const focusFirstOnOpen = useRef(false);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = 0;
    }
  }, []);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  // Keyboard-opened menus hand focus to the first link.
  useEffect(() => {
    if (isOpen && focusFirstOnOpen.current) {
      focusFirstOnOpen.current = false;
      menuRef.current?.querySelector("a")?.focus();
    }
  }, [isOpen]);

  // Escape closes and returns focus; a pointer press outside just closes.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      onOpenChange(false);
      triggerRef.current?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && rootRef.current?.contains(target)) return;
      onOpenChange(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen, onOpenChange]);

  const handleTriggerClick = () => {
    clearCloseTimer();
    // A hover-opened menu shouldn't immediately close on the click that follows.
    if (openedByHover.current && isOpen) {
      openedByHover.current = false;
      return;
    }
    onOpenChange(!isOpen);
  };

  return (
    <div
      className="product-dropdown"
      ref={rootRef}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        clearCloseTimer();
        openedByHover.current = true;
        onOpenChange(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        openedByHover.current = false;
        clearCloseTimer();
        closeTimer.current = window.setTimeout(() => onOpenChange(false), HOVER_CLOSE_DELAY);
      }}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && rootRef.current?.contains(next)) return;
        onOpenChange(false);
      }}
    >
      <button
        className="product-dropdown-trigger"
        id={menu.triggerId}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menu.menuId}
        ref={triggerRef}
        onClick={handleTriggerClick}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown") return;
          event.preventDefault();
          focusFirstOnOpen.current = true;
          clearCloseTimer();
          onOpenChange(true);
        }}
      >
        {menu.trigger}{" "}
        <svg className="icon chevron-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m7 10 5 5 5-5" />
        </svg>
      </button>

      <div
        className={cx("product-mega-menu", menu.wide && "solution-mega-menu", isOpen && "is-open")}
        id={menu.menuId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        ref={menuRef}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) onOpenChange(false);
        }}
      >
        <div className="mega-links">
          <p className="mega-label">{menu.label}</p>
          {menu.links.map((link) => (
            <a key={`${link.href}-${link.title}`} href={link.href}>
              <span className="mega-icon">
                <Icon name={link.icon} />
              </span>
              <span>
                <b>{link.title}</b>
                <small>{link.description}</small>
              </span>
              <Icon name="arrow-up" className="icon mega-arrow" />
            </a>
          ))}
        </div>
        <div className="mega-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={menu.visual.src}
            width={menu.visual.width}
            height={menu.visual.height}
            loading="lazy"
            alt={menu.visual.alt}
          />
          <Button
            href={menu.cta.href}
            label={menu.cta.label}
            variant="white"
            className="mega-cta"
          />
        </div>
      </div>
    </div>
  );
}
