"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Lenis smooth scrolling, matching the static build's tuning. Lenis drives its
 * own rAF loop here, and Framer Motion's scroll/in-view detection reads real
 * scroll positions, so the two stay in sync without manual ticker wiring.
 *
 * Reduced-motion visitors keep the same provider (so nothing below remounts)
 * but get native, un-eased scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ReactLenis
      root
      options={
        prefersReducedMotion
          ? { duration: 0, smoothWheel: false, syncTouch: false, anchors: true }
          : { duration: 1.05, smoothWheel: true, syncTouch: false, anchors: true }
      }
    >
      {children}
    </ReactLenis>
  );
}
