"use client";

import { Fragment, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { cx } from "@/lib/cx";
import { mobileNavGroups } from "@/data/navigation";

type MobileNavProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

/**
 * Narrow-viewport navigation panel. `data-lenis-prevent` keeps the panel's own
 * overflow scrolling native while Lenis drives the page behind it.
 */
export function MobileNav({ isOpen, onNavigate }: MobileNavProps) {
  const navRef = useRef<HTMLElement>(null);

  // Always reopen at the top of the list.
  useEffect(() => {
    if (isOpen && navRef.current) navRef.current.scrollTop = 0;
  }, [isOpen]);

  return (
    <nav
      className={cx("mobile-nav", isOpen && "is-open")}
      id="mobile-nav"
      aria-label="Main navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      data-lenis-prevent
      ref={navRef}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) onNavigate();
      }}
    >
      {mobileNavGroups.map((group, index) => (
        <Fragment key={group.label ?? `group-${index}`}>
          {group.label ? <p className="mobile-nav-label">{group.label}</p> : null}
          {group.links.map((link) => (
            <a key={`${group.label ?? "top"}-${link.label}`} href={link.href}>
              {link.label} <Icon name="arrow-up" />
            </a>
          ))}
        </Fragment>
      ))}
      <Button href="#contact" label="Book a demo" variant="dark" className="mobile-cta" />
    </nav>
  );
}
