"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import { partnerLogos } from "@/data/partners";

function LogoList({ isClone = false }: { isClone?: boolean }) {
  return (
    <ul
      className={cx("partner-logo-list", isClone && "partner-logo-list--clone")}
      aria-label={isClone ? undefined : "Partner brands"}
      aria-hidden={isClone || undefined}
    >
      {partnerLogos.map((logo) => (
        <li key={logo.name} className={`partner-logo partner-logo--${logo.modifier}`}>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            {logo.glyph}
          </svg>
          <span>{logo.name}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Logo row. Below 820px it becomes a CSS marquee — paused when scrolled out of
 * view, and manually pausable, so motion is never forced on the reader.
 */
export function PartnerProof() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isOffscreen, setIsOffscreen] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setIsOffscreen(!entry.isIntersecting);
      },
      { rootMargin: "150px 0px" },
    );
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="partner-proof" aria-labelledby="partner-proof-title">
      <div className="partner-proof-inner">
        <div className="partner-proof-head">
          <h2 id="partner-proof-title">Trusted by leading brands</h2>
          <button
            type="button"
            className="marquee-toggle"
            data-marquee-toggle
            data-playing={isPlaying}
            aria-label={
              isPlaying ? "Pause the scrolling brand logos" : "Play the scrolling brand logos"
            }
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            <svg
              className="marquee-toggle-glyph"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <rect className="glyph-pause" x="5" y="3.6" width="2" height="8.8" rx="1" />
              <rect className="glyph-pause" x="9" y="3.6" width="2" height="8.8" rx="1" />
              <path className="glyph-play" d="M5.7 3.3 12.2 8l-6.5 4.7z" />
            </svg>
          </button>
        </div>

        <div className="partner-marquee" ref={viewportRef}>
          <div
            className={cx(
              "partner-marquee-track",
              isOffscreen && "is-paused",
              !isPlaying && "is-user-paused",
            )}
          >
            <LogoList />
            <LogoList isClone />
          </div>
        </div>
      </div>
    </section>
  );
}
