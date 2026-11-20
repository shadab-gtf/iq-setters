"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeLoop } from "@/components/motion/fade-loop";
import { Icon } from "@/components/ui/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { decisionRows } from "@/data/content";

/** Three stacked rows that take it in turns to come forward. */
export function DecisionVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="decision-visual" aria-hidden="true" ref={ref}>
      {decisionRows.map((row, index) => (
        <motion.div
          key={row.label}
          {...fadeLoop({
            active: isInView,
            prefersReducedMotion,
            delay: decisionRows.length - 1 - index,
          })}
        >
          <Icon name={row.icon} />
          <span>{row.label}</span>
          <strong>{row.value}</strong>
        </motion.div>
      ))}
    </div>
  );
}
