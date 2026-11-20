import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section className="home-testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="suite-container">
        <Reveal className="home-section-heading home-section-heading--center">
          <p className="home-eyebrow">
            <span aria-hidden="true">//</span> Client reviews
          </p>
          <h2 id="testimonials-title">Trusted by real estate teams</h2>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((item) =>
            item.kind === "review" ? (
              <Reveal as="article" className="testimonial-card" key={item.author}>
                <p className="review-company">{item.company}</p>
                <blockquote cite="https://iqsetters.com/">{item.quote}</blockquote>
                <div className="review-author">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.avatar} width={50} height={50} loading="lazy" alt={item.author} />
                  <div>
                    <p>{item.author}</p>
                    <span>{item.authorCompany}</span>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal as="figure" className="testimonial-photo" key={item.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  alt={item.alt}
                />
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
