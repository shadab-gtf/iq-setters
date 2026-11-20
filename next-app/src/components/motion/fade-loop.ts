import type { TargetAndTransition, Transition } from "framer-motion";

/** Full cycle length: 2s fading in, 2s fading back out (GSAP yoyo equivalent). */
const CYCLE = 4;

type FadeLoopOptions = {
  /** Only animate while the illustration is on screen. */
  active: boolean;
  prefersReducedMotion: boolean;
  /** Offset into the cycle, in seconds — how the rows stagger. */
  delay: number;
  /** "soft" matches GSAP's power1.out on the way in. */
  easing?: "linear" | "soft";
};

/**
 * Props for one item in a looping fade sequence. Reduced-motion visitors get
 * the settled state (everything legible, nothing pulsing).
 */
export function fadeLoop({
  active,
  prefersReducedMotion,
  delay,
  easing = "linear",
}: FadeLoopOptions): { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition } {
  if (prefersReducedMotion) {
    return { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } };
  }

  if (!active) {
    return { initial: { opacity: 0 }, animate: { opacity: 0 }, transition: { duration: 0 } };
  }

  return {
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0] },
    transition: {
      duration: CYCLE,
      times: [0, 0.5, 1],
      ease: easing === "linear" ? ["linear", "linear"] : ["easeOut", "easeIn"],
      repeat: Infinity,
      delay,
    },
  };
}
