import { Reveal, RevealImage } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/icons";
import { suiteCards, suiteFeatures } from "@/data/products";
import { LmsDiagram } from "./diagrams/LmsDiagram";
import { PostSalesDiagram } from "./diagrams/PostSalesDiagram";

const diagrams = {
  lms: LmsDiagram,
  "post-sales": PostSalesDiagram,
} as const;

export function ProductsSuite() {
  return (
    <section className="products-suite" id="products" aria-labelledby="products-title">
      <div className="suite-container">
        <Reveal className="suite-heading">
          <h2 id="products-title">
            Four products for
            <br className="suite-desktop-break" /> every next step.
          </h2>
          <p>
            From the first enquiry to post-sale care, manage leads, operations, people and customer
            conversations with iQSetters.
          </p>
        </Reveal>

        <div className="suite-feature-list">
          {suiteFeatures.map((feature) => {
            const Diagram = diagrams[feature.diagram];
            return (
              <article
                key={feature.id}
                id={feature.id}
                className="suite-feature"
                aria-labelledby={feature.titleId}
              >
                <Reveal className="suite-feature-copy">
                  <span className="suite-icon" aria-hidden="true">
                    <Icon name={feature.icon} />
                  </span>
                  <div className="suite-copy">
                    <h3 id={feature.titleId}>
                      <a href={feature.href} target="_blank" rel="noreferrer">
                        {feature.title}
                      </a>
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                </Reveal>

                <RevealImage
                  as="a"
                  className="suite-preview"
                  href={feature.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={feature.previewLabel}
                >
                  <Diagram />
                </RevealImage>
              </article>
            );
          })}
        </div>

        <div className="suite-card-grid">
          {suiteCards.map((card) => (
            <Reveal
              as="a"
              key={card.titleId}
              className="suite-card"
              id={card.id}
              href={card.href}
              aria-labelledby={card.titleId}
              {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="suite-icon" aria-hidden="true">
                <Icon name={card.icon} />
              </span>
              <div className="suite-copy">
                <h3 id={card.titleId}>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
