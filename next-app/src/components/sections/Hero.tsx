"use client";

import { motion } from "framer-motion";
import { HERO_SEQUENCE } from "@/components/motion/motion-presets";
import { Button } from "@/components/ui/Button";
import { HeroPreviewChip } from "./HeroPreviewChip";
import { HeroShowcase } from "./HeroShowcase";

const SETTLED = { opacity: 1, y: 0 };

export function Hero() {

  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-orbit" aria-hidden="true">
          <span className="hero-orbit-ring hero-orbit-ring-outer" />
          <span className="hero-orbit-ring hero-orbit-ring-middle" />
          <span className="hero-orbit-ring hero-orbit-ring-inner" />
        </div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={SETTLED}
          transition={HERO_SEQUENCE.title}
        >
          Every <span className="ink-accent">Lead</span>
          <HeroPreviewChip /> deserves
          <br className="desktop-break" /> a next step.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 14 }}
          animate={SETTLED}
          transition={HERO_SEQUENCE.description}
        >
          Four focused products to help real estate teams manage leads, post-sales operations,
          people and customer conversations.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={SETTLED}
          transition={HERO_SEQUENCE.actions}
        >
          <Button href="#contact" label="Book a demo" variant="red" className="hero-primary" />
          <Button href="#products" label="Explore products" variant="outline" withArrow={false} />
        </motion.div>
      </div>

      <HeroShowcase />
    </section>
  );
}
