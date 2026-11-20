import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cx } from "@/lib/cx";

type BenefitCardProps = {
  /** Visual, rendered above the copy. */
  children: ReactNode;
  title: ReactNode;
  description: string;
  /** `wide` spans half the grid; `calendar` swaps in the photographic card. */
  modifier?: "wide" | "calendar";
  /** Two-column copy, used by the lead-sources card. */
  split?: boolean;
};

export function BenefitCard({ children, title, description, modifier, split }: BenefitCardProps) {
  return (
    <Reveal as="article" className={cx("benefit-card", modifier && `benefit-card--${modifier}`)}>
      {children}
      <div className={cx("benefit-copy", split && "benefit-copy--split")}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Reveal>
  );
}
