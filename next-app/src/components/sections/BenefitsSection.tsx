import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { BenefitCard } from "./benefits/BenefitCard";
import { CalendarVisual } from "./benefits/CalendarVisual";
import { DecisionVisual } from "./benefits/DecisionVisual";
import { SourceNetwork } from "./benefits/SourceNetwork";
import { TaskIllustration } from "./benefits/TaskIllustration";
import { WorkflowVisual } from "./benefits/WorkflowVisual";

export function BenefitsSection() {
  return (
    <section className="home-benefits" id="benefits" aria-labelledby="benefits-title">
      <div className="suite-container">
        <div className="benefits-heading-row">
          <Reveal className="home-section-heading">
            <p className="home-eyebrow">
              <span aria-hidden="true">//</span> Benefits
            </p>
            <h2 id="benefits-title">
              A clearer way to
              <br />
              move business forward
            </h2>
          </Reveal>
          <Button href="#products" label="Explore products" variant="outline" />
        </div>

        <div className="benefits-grid">
          <BenefitCard
            modifier="wide"
            split
            title={
              <>
                One view of <br />
                every lead
              </>
            }
            description="Bring enquiries from your lead sources into one organised workspace."
          >
            <SourceNetwork />
          </BenefitCard>

          <BenefitCard
            modifier="wide"
            title="Keep follow-ups moving"
            description="Keep calls, tasks and the next conversation in sight."
          >
            <TaskIllustration />
          </BenefitCard>

          <BenefitCard
            title="Make informed decisions"
            description="See lead activity and team progress in one clearer view."
          >
            <DecisionVisual />
          </BenefitCard>

          <BenefitCard
            title="Keep teams connected"
            description="Give every enquiry an owner and every team a clear next step."
          >
            <WorkflowVisual />
          </BenefitCard>

          <BenefitCard
            modifier="calendar"
            title="Plan your next step"
            description="Keep everyday tasks organised, from the first enquiry to post-sale care."
          >
            <CalendarVisual />
          </BenefitCard>
        </div>
      </div>
    </section>
  );
}
