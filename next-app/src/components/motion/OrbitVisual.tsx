"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon, type IconName } from "@/components/ui/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type OrbitNode = { position: "top" | "bottom" | "left" | "right"; icon: IconName };

type OrbitRing = {
  modifier: "outer" | "middle" | "inner";
  /** Starting angle, kept from the stylesheet so the still frame is unchanged. */
  from: number;
  to: number;
  nodes: OrbitNode[];
};

const RINGS: OrbitRing[] = [
  {
    modifier: "outer",
    from: -18,
    to: 360,
    nodes: [
      { position: "top", icon: "briefcase" },
      { position: "bottom", icon: "briefcase" },
      { position: "left", icon: "calendar" },
      { position: "right", icon: "calendar" },
    ],
  },
  {
    modifier: "middle",
    from: 16,
    to: -360,
    nodes: [
      { position: "top", icon: "people" },
      { position: "bottom", icon: "people" },
      { position: "left", icon: "chat" },
      { position: "right", icon: "chat" },
    ],
  },
  {
    modifier: "inner",
    from: -40,
    to: 360,
    nodes: [
      { position: "top", icon: "grid" },
      { position: "bottom", icon: "grid" },
      { position: "left", icon: "check" },
      { position: "right", icon: "check" },
    ],
  },
];

const ROTATION_DURATION = 10;

/**
 * Three counter-rotating rings. Rotation only runs while the illustration is
 * on screen, so it costs nothing for the rest of the page.
 */
export function OrbitVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isAnimating = isInView && !prefersReducedMotion;

  return (
    <div className="process-orbit" aria-hidden="true" ref={ref}>
      {RINGS.map((ring) => (
        <motion.div
          key={ring.modifier}
          className={`orbit-ring orbit-ring--${ring.modifier}`}
          initial={{ rotate: ring.from }}
          animate={isAnimating ? { rotate: [ring.from, ring.to] } : { rotate: ring.from }}
          transition={
            isAnimating
              ? { duration: ROTATION_DURATION, ease: "linear", repeat: Infinity }
              : { duration: 0 }
          }
        >
          {ring.nodes.map((node) => (
            <span key={node.position} className={`orbit-node orbit-node--${node.position}`}>
              <Icon name={node.icon} />
            </span>
          ))}
        </motion.div>
      ))}
      <span className="orbit-hub">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/iq-mark.svg" width={30} height={26} alt="" />
      </span>
    </div>
  );
}
