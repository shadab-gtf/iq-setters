import { aboutStats } from "@/data/content";

export function AboutSection() {
  return (
    <section className="about-section" id="about-us" aria-labelledby="about-title">
      <div className="about-heading-block">
        <h2 id="about-title">An operating partner for every real estate team.</h2>
        <p className="about-intro">
          We connect lead management, post-sales operations, people workflows and customer
          conversations in one focused product suite&mdash;helping teams move from the first enquiry
          to long-term customer care.
        </p>
      </div>

      <div className="about-showcase">
        <article className="about-image-tile about-image-tile--portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/about-advisor.webp"
            width={960}
            height={1200}
            loading="lazy"
            alt="Real estate advisor reviewing property information on a tablet"
          />
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div className="about-stat" key={stat.title}>
                <strong>{stat.title}</strong>
                <span>{stat.caption}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="about-brand-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-brand-logo"
            src="/assets/brand-logo.webp"
            width={520}
            height={97}
            loading="lazy"
            alt="iQSetters"
          />
          <blockquote>
            Track. Engage.
            <br />
            Convert. Control.
          </blockquote>
          <p>One clearer journey for real estate teams.</p>
        </article>

        <figure className="about-image-tile about-image-tile--team">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/about-team.webp"
            width={1200}
            height={800}
            loading="lazy"
            alt="Real estate colleagues collaborating around a laptop in a bright office"
          />
        </figure>
      </div>
    </section>
  );
}
