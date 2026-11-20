import { Reveal } from "@/components/motion/Reveal";
import { OrbitVisual } from "@/components/motion/OrbitVisual";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { cx } from "@/lib/cx";
import { launchChecklist, processSteps } from "@/data/content";

function MeetingCard() {
  return (
    <div className="process-meeting">
      <div className="meeting-top">
        <div>
          <h4>Your product walkthrough</h4>
          <p>Built around your team</p>
        </div>
        <span className="meeting-mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/iq-mark.svg" width={32} height={28} alt="" />
        </span>
      </div>
      <div>
        <h4>Your agenda</h4>
        <p>Lead capture, customer journeys and the way your business works.</p>
      </div>
      <Button href="https://iqsetters.com/contact-us" label="Book a demo" variant="outline" />
    </div>
  );
}

function LaunchChecklist() {
  return (
    <div className="launch-checklist">
      <h4>
        <Icon name="grid" /> Your setup checklist
      </h4>
      <ul>
        {launchChecklist.map((item) => (
          <li key={item}>
            <Icon name="check" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const visuals = {
  meeting: MeetingCard,
  orbit: OrbitVisual,
  checklist: LaunchChecklist,
} as const;

export function ProcessSection() {
  return (
    <section className="home-process" id="process" aria-labelledby="process-title">
      <div className="suite-container">
        <Reveal className="home-section-heading">
          <p className="home-eyebrow">
            <span aria-hidden="true">//</span> Process
          </p>
          <h2 id="process-title">
            3 simple steps to
            <br />
            your next chapter
          </h2>
        </Reveal>

        <div className="process-grid">
          {processSteps.map((step) => {
            const Visual = visuals[step.visual];
            return (
              <Reveal
                as="article"
                key={step.title}
                className={cx("process-card", step.visual === "orbit" && "process-card--orbit")}
              >
                <div className="process-copy">
                  <Icon name={step.icon} />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <Visual />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
