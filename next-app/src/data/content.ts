import type { IconName } from "@/components/ui/icons";

export const aboutStats = [
  { title: "4 focused products", caption: "Pre-Sales · Post-Sales · HRM · WhatsApp" },
  { title: "One connected journey", caption: "From lead to post-sale care" },
] as const;

export type ProcessStep = {
  icon: IconName;
  title: string;
  description: string;
  visual: "meeting" | "orbit" | "checklist";
};

export const processSteps: ProcessStep[] = [
  {
    icon: "search",
    title: "Discover",
    description: "Walk through your sales process and find the products your team needs.",
    visual: "meeting",
  },
  {
    icon: "grid",
    title: "Configure",
    description: "Shape your setup around your lead sources, teams and daily workflows.",
    visual: "orbit",
  },
  {
    icon: "arrow-up",
    title: "Launch",
    description: "Bring your people and processes together, with support for the next step.",
    visual: "checklist",
  },
];

export const launchChecklist = [
  "Lead sources",
  "Team access",
  "Follow-up workflow",
  "Ready for your team",
] as const;

export const decisionRows = [
  { icon: "grid", label: "Lead visibility", value: "Track" },
  { icon: "calendar", label: "Next follow-up", value: "Plan" },
  { icon: "check", label: "Team activity", value: "Act" },
] as const satisfies ReadonlyArray<{ icon: IconName; label: string; value: string }>;

export const workflowSteps = [
  { icon: "grid", stage: "Capture", label: "New enquiry" },
  { icon: "people", stage: "Assign", label: "Connect to your team" },
  { icon: "chat", stage: "Engage", label: "Plan follow-up" },
] as const satisfies ReadonlyArray<{ icon: IconName; stage: string; label: string }>;

export const calendarAgenda = [
  { icon: "calendar", label: "Site visit follow-up" },
  { icon: "briefcase", label: "Booking review" },
  { icon: "chat", label: "Customer conversation" },
] as const satisfies ReadonlyArray<{ icon: IconName; label: string }>;

export const networkNodes = [
  { modifier: "one", icon: "search" },
  { modifier: "two", icon: "briefcase" },
  { modifier: "three", icon: "grid" },
  { modifier: "four", icon: "people" },
  { modifier: "five", icon: "chat" },
] as const satisfies ReadonlyArray<{ modifier: string; icon: IconName }>;

export type Testimonial = {
  kind: "review";
  company: string;
  quote: string;
  author: string;
  authorCompany: string;
  avatar: string;
};

export type TestimonialPhoto = {
  kind: "photo";
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type TestimonialItem = Testimonial | TestimonialPhoto;

export const testimonials: TestimonialItem[] = [
  {
    kind: "review",
    company: "Hari Ashray",
    quote:
      "“We would like to express our gratitude to the IQSetters team for assisting us in improving our sales team performance and enabling us to manage leads more efficiently.”",
    author: "Mr. Sunil Madan",
    authorCompany: "Hari Ashray",
    avatar: "/assets/review-sunil-madan.webp",
  },
  {
    kind: "photo",
    src: "/assets/about-advisor.webp",
    width: 960,
    height: 1200,
    alt: "Illustrative photo of a real estate professional reviewing a tablet",
  },
  {
    kind: "review",
    company: "Chaahat Homes",
    quote:
      "“Professionalism and support are the hallmarks of the IQSetters team. They developed custom real estate software for us. Whenever we needed assistance with the functionality or processing of the software, they were there for us.”",
    author: "Mr. Ruchit Pruti",
    authorCompany: "Chaahat Homes Infratech Pvt.Ltd",
    avatar: "/assets/review-ruchit-pruti.webp",
  },
  {
    kind: "review",
    company: "Sehgal Estate",
    quote:
      "“IQSetters enhanced our real estate operations with their innovative solutions. Their expertise and dedication have been instrumental in driving our business forward. We highly recommend IQSetters for anyone seeking cutting-edge technology in the real estate industry.”",
    author: "Mr. Vinay Sahgal",
    authorCompany: "Sehgal Estate",
    avatar: "/assets/review-vinay-sahgal.webp",
  },
  {
    kind: "review",
    company: "CapitalBoon",
    quote:
      "“Our partnership with IQSetters has helped us to provide our customers with a robust and easy-to-use application portfolio.”",
    author: "Mr. Tumul Rana",
    authorCompany: "Capitalboon Consulting",
    avatar: "/assets/review-tumul-rana.webp",
  },
  {
    kind: "photo",
    src: "/assets/real-estate-team.webp",
    width: 1254,
    height: 1254,
    alt: "Illustrative photo of real estate colleagues reviewing customer information",
  },
];
