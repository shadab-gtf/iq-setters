"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeLoop } from "@/components/motion/fade-loop";
import { Icon } from "@/components/ui/icons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { workflowSteps } from "@/data/content";

/** Cycle offsets (seconds) for step, stem, step, stem, step. */
const STEP_DELAYS = [0, 0.5, 1];
const STEM_DELAYS = [0.3, 0.8];

function WorkflowStem() {
  return (
    <path d="M10 0V28M7 25L10 28 13 25" fill="none" stroke="currentColor" />
  );
}

export function WorkflowVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="workflow-visual" aria-hidden="true" ref={ref}>
      {workflowSteps.map((step, index) => (
        <Fragment key={step.stage}>
          {index > 0 ? (
            <motion.svg
              className="workflow-stem"
              viewBox="0 0 20 30"
              aria-hidden="true"
              {...fadeLoop({
                active: isInView,
                prefersReducedMotion,
                delay: STEM_DELAYS[index - 1],
                easing: "soft",
              })}
            >
              <WorkflowStem />
            </motion.svg>
          ) : null}
          <motion.div
            {...fadeLoop({
              active: isInView,
              prefersReducedMotion,
              delay: STEP_DELAYS[index],
            })}
          >
            <Icon name={step.icon} />
            <span>
              <small>{step.stage}</small>
              {step.label}
            </span>
          </motion.div>
        </Fragment>
      ))}
    </div>
  );
}
