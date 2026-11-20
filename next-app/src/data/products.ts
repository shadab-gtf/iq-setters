import type { IconName } from "@/components/ui/icons";

export type SuiteFeature = {
  id: string;
  icon: IconName;
  title: string;
  titleId: string;
  href: string;
  description: string;
  previewLabel: string;
  diagram: "lms" | "post-sales";
};

export const suiteFeatures: SuiteFeature[] = [
  {
    id: "pre-sales",
    icon: "grid",
    title: "Pre-Sales CRM / LMS",
    titleId: "lms-title",
    href: "https://iqsetters.com/lms-showcase",
    description:
      "Bring lead, call and team operations into one system. Capture enquiries, assign leads and keep every follow-up in view.",
    previewLabel: "Explore Pre-Sales CRM and LMS",
    diagram: "lms",
  },
  {
    id: "post-sales",
    icon: "briefcase",
    title: "Post-Sales CRM",
    titleId: "post-title",
    href: "https://iqsetters.com/post-sales-crm-real-estate",
    description:
      "Coordinate bookings, applications, financial details and customer progress through one clear post-sales workflow.",
    previewLabel: "Explore Post-Sales CRM",
    diagram: "post-sales",
  },
];

export type SuiteCard = {
  id?: string;
  icon: IconName;
  title: string;
  titleId: string;
  href: string;
  description: string;
  external?: boolean;
};

export const suiteCards: SuiteCard[] = [
  {
    id: "hrm",
    icon: "people",
    title: "HRM",
    titleId: "hrm-title",
    href: "https://iqsetters.com/hrm",
    description:
      "Manage employee information, attendance, leave and everyday HR workflows in one place.",
    external: true,
  },
  {
    id: "whatsapp",
    icon: "chat",
    title: "WhatsApp Business API",
    titleId: "whatsapp-title",
    href: "https://iqsetters.com/whatsapp-business-api",
    description:
      "Plan targeted campaigns, create tailored messages and review customer engagement.",
    external: true,
  },
  {
    icon: "grid",
    title: "One connected journey",
    titleId: "suite-journey-title",
    href: "#contact",
    description:
      "Find the right products for your team, from the first enquiry to long-term customer care.",
  },
];

export const suiteBenefits = [
  { title: "Lead visibility", description: "Bring enquiries from every source into one clear view." },
  { title: "Organised follow-ups", description: "Keep calls, tasks and the next follow-up in sight." },
  { title: "Coordinated operations", description: "Keep bookings and people workflows organised." },
  {
    title: "Connected conversations",
    description: "Plan customer messages with WhatsApp Business API.",
  },
] as const;
