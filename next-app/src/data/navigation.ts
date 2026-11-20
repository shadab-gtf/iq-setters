import type { IconName } from "@/components/ui/icons";

export type MegaMenuLink = {
  href: string;
  icon: IconName;
  title: string;
  description: string;
};

export type MegaMenuVisual = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type MegaMenu = {
  id: string;
  trigger: string;
  triggerId: string;
  menuId: string;
  label: string;
  /** The solutions menu uses a wider grid. */
  wide?: boolean;
  links: MegaMenuLink[];
  visual: MegaMenuVisual;
  cta: { href: string; label: string };
};

export const primaryNavLinks = [
  { href: "#products", label: "Work" },
  { href: "#about-us", label: "About Us" },
] as const;

export const megaMenus: MegaMenu[] = [
  {
    id: "products",
    trigger: "Products",
    triggerId: "product-menu-trigger",
    menuId: "product-menu",
    label: "iQSetters products",
    links: [
      {
        href: "#pre-sales",
        icon: "grid",
        title: "Pre-Sales CRM / LMS",
        description: "Track leads, calls and follow-ups.",
      },
      {
        href: "#post-sales",
        icon: "briefcase",
        title: "Post-Sales CRM",
        description: "Coordinate booking operations.",
      },
      {
        href: "#hrm",
        icon: "people",
        title: "HRM",
        description: "Manage employee workflows.",
      },
      {
        href: "#whatsapp",
        icon: "chat",
        title: "WhatsApp Business API",
        description: "Plan and manage campaigns.",
      },
    ],
    visual: {
      src: "/assets/real-estate-team.webp",
      width: 1254,
      height: 1254,
      alt: "Real estate professionals reviewing lead data together",
    },
    cta: { href: "#contact", label: "Book a demo" },
  },
  {
    id: "solutions",
    trigger: "Solutions",
    triggerId: "solution-menu-trigger",
    menuId: "solution-menu",
    label: "Solutions & expertise",
    wide: true,
    links: [
      {
        href: "#products",
        icon: "briefcase",
        title: "CRM Solutions",
        description: "Sales and post-sales operations.",
      },
      {
        href: "#pre-sales",
        icon: "grid",
        title: "Lead Management System (LMS)",
        description: "Capture, assign and follow up leads.",
      },
      {
        href: "#whatsapp",
        icon: "chat",
        title: "WhatsApp Business API",
        description: "Plan customer messaging campaigns.",
      },
      {
        href: "#contact",
        icon: "grid",
        title: "ERP & Enterprise Apps",
        description: "Systems shaped around your workflows.",
      },
      {
        href: "#contact",
        icon: "check",
        title: "Workflow Automation",
        description: "Connect routine business processes.",
      },
      {
        href: "#contact",
        icon: "arrow",
        title: "System Integrations",
        description: "Bring your business tools together.",
      },
    ],
    visual: {
      src: "/assets/about-team.webp",
      width: 1200,
      height: 800,
      alt: "Real estate professionals reviewing lead data together",
    },
    cta: { href: "#contact", label: "Talk to our team" },
  },
];

export type MobileNavGroup = {
  label?: string;
  links: { href: string; label: string }[];
};

export const mobileNavGroups: MobileNavGroup[] = [
  {
    links: [
      { href: "#products", label: "Work" },
      { href: "#about-us", label: "About Us" },
    ],
  },
  {
    label: "Products",
    links: [
      { href: "#pre-sales", label: "Pre-Sales CRM / LMS" },
      { href: "#post-sales", label: "Post-Sales CRM" },
      { href: "#hrm", label: "HRM" },
      { href: "#whatsapp", label: "WhatsApp Business API" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { href: "#products", label: "CRM Solutions" },
      { href: "#contact", label: "ERP & Enterprise Apps" },
      { href: "#contact", label: "Workflow Automation" },
      { href: "#contact", label: "System Integrations" },
    ],
  },
];
