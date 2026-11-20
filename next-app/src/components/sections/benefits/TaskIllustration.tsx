"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Travel range of the cursors across the card, in pixels. */
const RANGE_X = 64;
const RANGE_Y = 48;
/** The second cursor trails the first, slightly slower and in reverse. */
const SECOND_CURSOR_FACTOR = -0.7;
/** Critically damped, so the cursors glide instead of snapping. */
const SPRING = { stiffness: 90, damping: 20, mass: 0.8 } as const;

function TaskPointer() {
  return (
    <svg className="task-pointer" viewBox="0 0 16 18" aria-hidden="true">
      <path d="M2 1 14 7 8 9 5 16Z" fill="currentColor" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Two collaborator cursors that drift with the pointer across the card.
 * Pointer-coarse devices and reduced-motion visitors keep them parked.
 */
export function TaskIllustration() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const prefersReducedMotion = usePrefersReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);
  // The trailing cursor mirrors the lead one, slightly dampened.
  const trailingX = useTransform(x, (value) => value * SECOND_CURSOR_FACTOR);
  const trailingY = useTransform(y, (value) => value * SECOND_CURSOR_FACTOR);

  useEffect(() => {
    if (!canHover || prefersReducedMotion) return;
    const card = rootRef.current?.closest(".benefit-card");
    if (!(card instanceof HTMLElement)) return;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = card.getBoundingClientRect();
      rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * RANGE_X);
      rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * RANGE_Y);
    };

    const onPointerLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    card.addEventListener("pointermove", onPointerMove);
    card.addEventListener("pointerleave", onPointerLeave);
    return () => {
      card.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [canHover, prefersReducedMotion, rawX, rawY]);

  return (
    <div className="task-illustration" aria-hidden="true" ref={rootRef}>
      <div className="task-sheet task-sheet--back">
        <span>Follow-up</span>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="task-sheet">
        <span>
          Task <small>Next step</small>
        </span>
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <motion.span className="task-cursor task-cursor--one" style={{ x, y }}>
        <TaskPointer />
        Sales
      </motion.span>
      <motion.span className="task-cursor task-cursor--two" style={{ x: trailingX, y: trailingY }}>
        <TaskPointer />
        Support
      </motion.span>
    </div>
  );
}

