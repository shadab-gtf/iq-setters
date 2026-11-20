import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "arrow-up"
  | "search"
  | "chevron-down"
  | "grid"
  | "people"
  | "calendar"
  | "chat"
  | "briefcase"
  | "check";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
};

/**
 * Renders one symbol from the sprite below. Keeping the `.icon` class on the
 * <svg> means every existing stylesheet rule (sizing, stroke, colour) applies
 * exactly as it did in the static build.
 */
export function Icon({ name, className = "icon", ...rest }: IconProps) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" {...rest}>
      <use href={`#icon-${name}`} />
    </svg>
  );
}

/** Single sprite, mounted once per document. */
export function IconSprite() {
  return (
    <svg className="icon-defs" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></symbol>
      <symbol id="icon-arrow-up" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10" /></symbol>
      <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.6" /><path d="m16 16 4 4" /></symbol>
      <symbol id="icon-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></symbol>
      <symbol id="icon-grid" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></symbol>
      <symbol id="icon-people" viewBox="0 0 24 24"><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM16 4.2a3.5 3.5 0 0 1 0 6.7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" /></symbol>
      <symbol id="icon-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7.5 3v4M16.5 3v4M4 9.5h16M8 13h2M14 13h2M8 17h2" /></symbol>
      <symbol id="icon-chat" viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9.6 9.6 0 0 1-3.7-.75L4 20l1.4-3.8A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" /></symbol>
      <symbol id="icon-briefcase" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></symbol>
      <symbol id="icon-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></symbol>
    </svg>
  );
}
