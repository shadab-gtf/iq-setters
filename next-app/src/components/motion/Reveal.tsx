"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  REVEAL_IMAGE_VIEWPORT,
  REVEAL_VIEWPORT,
  revealImageTransition,
  revealImageVariants,
  revealTransition,
  revealVariants,
  settledImageVariants,
  settledVariants,
} from "./motion-presets";

export type RevealTag = "div" | "article" | "figure" | "section" | "a" | "p" | "span";

type RevealProps<T extends RevealTag> = ComponentPropsWithoutRef<T> & {
  as?: T;
  /** Extra delay on top of the scroll trigger, in seconds. */
  delay?: number;
};

/**
 * Scroll reveal — the Framer Motion replacement for the GSAP
 * `[data-reveal]` batch (fade + 20px rise, once per element).
 *
 * Reduced motion keeps the same variant names but resolves both to the settled
 * state, so content is never left stranded at opacity 0.
 */
export function Reveal<T extends RevealTag = "div">({
  as,
  delay = 0,
  children,
  ...rest
}: RevealProps<T>) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const tag = (as ?? "div") as RevealTag;
  const Component = motion[tag] as ElementType;

  return (
    <Component
      {...rest}
      data-reveal=""
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={prefersReducedMotion ? settledVariants : revealVariants}
      transition={prefersReducedMotion ? { duration: 0 } : { ...revealTransition, delay }}
    >
      {children}
    </Component>
  );
}

/**
 * Heavier reveal for images and diagrams: the clip-path wipe the static build
 * ran through `[data-reveal-image]`.
 */
export function RevealImage<T extends RevealTag = "div">({
  as,
  delay = 0,
  children,
  ...rest
}: RevealProps<T>) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const tag = (as ?? "div") as RevealTag;
  const Component = motion[tag] as ElementType;

  return (
    <Component
      {...rest}
      data-reveal-image=""
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_IMAGE_VIEWPORT}
      variants={prefersReducedMotion ? settledImageVariants : revealImageVariants}
      transition={prefersReducedMotion ? { duration: 0 } : { ...revealImageTransition, delay }}
    >
      {children}
    </Component>
  );
}
