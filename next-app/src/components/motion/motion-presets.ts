import type { Transition, Variants } from "framer-motion";

/**
 * Cubic-bezier equivalents of the GSAP easings the static build used, so the
 * ported motion keeps the same feel rather than Framer's defaults.
 */
export const EASE_OUT_CUBIC = [0.215, 0.61, 0.355, 1] as const; // gsap power2.out
export const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const; // gsap power3.out

/** ScrollTrigger `start: "top 86%"` — fire once the element's top passes 86vh. */
export const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -14% 0px" } as const;

/** ScrollTrigger `start: "top 84%"` for the heavier image/diagram reveals. */
export const REVEAL_IMAGE_VIEWPORT = { once: true, margin: "0px 0px -16% 0px" } as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const revealTransition: Transition = {
  duration: 0.72,
  ease: EASE_OUT_CUBIC,
};

export const revealImageVariants: Variants = {
  hidden: { opacity: 0, y: 18, clipPath: "inset(12% 0 0 round 13px)" },
  visible: { opacity: 1, y: 0, clipPath: "inset(0% 0 0 round 13px)" },
};

/** Reduced-motion equivalents: both states resolve to the finished look. */
export const settledVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const settledImageVariants: Variants = {
  hidden: { opacity: 1, y: 0, clipPath: "none" },
  visible: { opacity: 1, y: 0, clipPath: "none" },
};

export const revealImageTransition: Transition = {
  duration: 0.8,
  ease: EASE_OUT_CUBIC,
};

/**
 * Hero intro timeline. The static build chained GSAP tweens with relative
 * offsets; these delays are the resolved start times of that same timeline.
 */
export const HERO_SEQUENCE = {
  title: { duration: 0.72, delay: 0, ease: EASE_OUT_QUART },
  description: { duration: 0.55, delay: 0.3, ease: EASE_OUT_QUART },
  actions: { duration: 0.46, delay: 0.54, ease: EASE_OUT_QUART },
  showcase: { duration: 0.85, delay: 0.92, ease: EASE_OUT_CUBIC },
} satisfies Record<string, Transition>;
