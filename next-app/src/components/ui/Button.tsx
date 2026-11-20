import type { AnchorHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "./icons";

export type ButtonVariant = "dark" | "red" | "outline" | "white";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  label: string;
  variant?: ButtonVariant;
  /** The trailing arrow glyph. On by default, as in most of the design. */
  withArrow?: boolean;
};

/**
 * The site's one button treatment. The doubled label is what drives the
 * roll-up hover effect in CSS, so both spans must stay.
 */
export function Button({
  href,
  label,
  variant = "dark",
  withArrow = true,
  className,
  ...rest
}: ButtonProps) {
  return (
    <a className={cx("button", `button-${variant}`, className)} href={href} {...rest}>
      <span className="button-label-roll">
        <span>{label}</span>
        <span aria-hidden="true">{label}</span>
      </span>
      {withArrow ? <Icon name="arrow" /> : null}
    </a>
  );
}
