"use client";

import { motion } from "framer-motion";
import { HERO_SEQUENCE } from "@/components/motion/motion-presets";
import { AppSidebar } from "./showcase/AppSidebar";
import { CrmDashboard } from "./showcase/CrmDashboard";
import { Icon } from "@/components/ui/icons";

/**
 * Hero product preview. Enters on load as the last beat of the hero timeline:
 * a clip-path wipe plus a small rise, matching the original GSAP tween.
 */
export function HeroShowcase() {
  return (
    <motion.div
      className="browser-window hero-showcase"
      initial={{ opacity: 0, y: 22, scale: 0.99, clipPath: "inset(9% 0 0 round 15px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0 0 round 15px)" }}
      transition={HERO_SEQUENCE.showcase}
    >
      <span className="showcase-backplate showcase-backplate--far" aria-hidden="true" />
      <span className="showcase-backplate showcase-backplate--near" aria-hidden="true" />
      <div className="showcase-stage">
        <AppSidebar />
        <div className="app-content">
          <div className="app-topline">
            <span className="app-breadcrumb">Dashboard</span>
            <div className="dashboard-tools" aria-hidden="true">
              <span className="app-search">
                <Icon name="search" />
                Search anything...
              </span>
              <span className="tool-notice">?</span>
              <span className="team-pill">
                <span className="team-avatar">iQ</span>
                <b>iQ Team</b>
                <Icon name="chevron-down" className="icon dropdown-chevron" />
              </span>
            </div>
          </div>

          <div className="app-heading">
            <div>
              <h2>Performance Overview</h2>
              <span className="app-date">12 August &ndash; 18 August 2025</span>
            </div>
            <div className="app-heading-actions">
              <span className="app-period">
                Weekly
                <Icon name="chevron-down" className="icon dropdown-chevron" />
              </span>
              <span className="app-create">
                Create lead <b>+</b>
              </span>
            </div>
          </div>

          <div className="product-panels">
            <section className="product-panel is-active" aria-label="Pre-Sales CRM dashboard">
              <CrmDashboard />
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
