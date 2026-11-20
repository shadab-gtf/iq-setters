import { RevealImage } from "@/components/motion/Reveal";
import { suiteBenefits } from "@/data/products";

export function SuiteBenefits() {
  return (
    <section className="suite-benefits" aria-labelledby="suite-benefits-title">
      <div className="suite-container">
        <RevealImage className="suite-benefit-scene">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/real-estate-team.webp"
            width={1254}
            height={1254}
            loading="lazy"
            alt="Real estate colleagues reviewing customer and sales information"
            className="suite-benefit-photo"
          />
          <div className="suite-benefit-panel">
            <div className="suite-benefit-heading">
              <h2 id="suite-benefits-title">What a connected workflow gives you</h2>
              <p>
                Keep sales, operations and customer conversations moving together with the iQSetters
                product suite.
              </p>
            </div>
            <div className="suite-benefit-list">
              {suiteBenefits.map((benefit) => (
                <article key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </RevealImage>
      </div>
    </section>
  );
}
