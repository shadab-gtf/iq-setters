import type { ReactNode } from "react";

export type PartnerLogo = {
  modifier: string;
  name: string;
  glyph: ReactNode;
};

/** Placeholder brand marks, drawn inline so they inherit the logo-row colour. */
export const partnerLogos: PartnerLogo[] = [
  {
    modifier: "circle",
    name: "circle",
    glyph: <path d="M26.9 21.2A12.7 12.7 0 1 1 28.4 14" />,
  },
  {
    modifier: "hooks",
    name: "HOOKS",
    glyph: (
      <>
        <path d="M16 2.7 18.2 11 26 6.7l-4.3 7.8 8.3 2.1-8.3 2.2 4.3 7.8-7.8-4.3-2.2 8.3-2.1-8.3-7.8 4.3 4.3-7.8L2.1 16.6l8.3-2.1-4.3-7.8 7.8 4.3z" />
        <circle cx="16" cy="16" r="2.2" />
      </>
    ),
  },
  {
    modifier: "light",
    name: "Light AI",
    glyph: (
      <>
        <circle cx="16" cy="16" r="12.3" />
        <path d="m18.1 4.9-9 12.2h6.2L13.8 27l9.1-12.3h-6.1z" />
      </>
    ),
  },
  {
    modifier: "radiyal",
    name: "Radiyal",
    glyph: (
      <path d="M2.8 2.8h10.4c0 6.1-4.3 10.4-10.4 10.4zm26.4 0v10.4c-6.1 0-10.4-4.3-10.4-10.4zM2.8 29.2V18.8c6.1 0 10.4 4.3 10.4 10.4zm26.4 0H18.8c0-6.1 4.3-10.4 10.4-10.4z" />
    ),
  },
  {
    modifier: "kanba",
    name: "kanba",
    glyph: (
      <>
        <ellipse cx="11" cy="11" rx="5.7" ry="9.1" transform="rotate(-35 11 11)" />
        <ellipse cx="21" cy="11" rx="5.7" ry="9.1" transform="rotate(35 21 11)" />
        <ellipse cx="16" cy="21" rx="5.7" ry="9.1" />
      </>
    ),
  },
  {
    modifier: "goldline",
    name: "goldline",
    glyph: (
      <>
        <circle cx="16" cy="16" r="12.1" />
        <path d="M11 23V13m5 10V8m5 15V12" />
      </>
    ),
  },
  {
    modifier: "stari",
    name: "stari",
    glyph: (
      <path d="M16 1.5c2 8.4 6.1 12.5 14.5 14.5C22.1 18 18 22.1 16 30.5 14 22.1 9.9 18 1.5 16 9.9 14 14 9.9 16 1.5z" />
    ),
  },
];
