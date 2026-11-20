"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/icons";
import { cx } from "@/lib/cx";
import { faqs } from "@/data/faqs";

/**
 * Accordion. Only one answer is open at a time; the open/close easing stays in
 * CSS (a grid-rows transition) because it animates intrinsic height for free.
 */
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="home-faq" id="faq" aria-labelledby="faq-title">
      <div className="faq-container">
        <Reveal className="home-section-heading home-section-heading--center">
          <p className="home-eyebrow">
            <span aria-hidden="true">//</span> Frequently asked
          </p>
          <h2 id="faq-title">Have questions?</h2>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div className={cx("faq-item", isOpen && "is-open")} key={faq.question}>
                <h3>
                  <button
                    className="faq-question"
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <Icon name="chevron-down" />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
