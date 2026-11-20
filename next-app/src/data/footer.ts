export type FooterColumn = {
  ariaLabel: string;
  heading: string;
  links: { href: string; label: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    ariaLabel: "Company",
    heading: "Company",
    links: [
      { href: "#about-us", label: "About Us" },
      { href: "https://iqsetters.com/our-team", label: "Our team" },
      { href: "https://iqsetters.com/blog", label: "Blog" },
      { href: "https://iqsetters.com/contact-us", label: "Contact Us" },
    ],
  },
  {
    ariaLabel: "Footer products",
    heading: "Products",
    links: [
      { href: "https://iqsetters.com/lms-showcase", label: "Pre-Sales CRM / LMS" },
      { href: "https://iqsetters.com/post-sales-crm-real-estate", label: "Post-Sales CRM" },
      { href: "https://iqsetters.com/hrm", label: "HRM" },
      { href: "https://iqsetters.com/whatsapp-business-api", label: "WhatsApp Business API" },
    ],
  },
  {
    ariaLabel: "Quick links",
    heading: "Quick links",
    links: [
      { href: "https://iqsetters.com/product-pricing", label: "Pricing" },
      { href: "https://iqsetters.com/privacy-policy.html", label: "Privacy Policy" },
      { href: "https://iqsetters.com/terms-of-use.html", label: "Terms of Use" },
      { href: "https://iqsetters.com/return-policy.html", label: "Return Policy" },
    ],
  },
];

export const officeAddress = ["Plot No. D-84, First Floor, Sector-2,", "Noida-201301, Uttar Pradesh"];

export const contactChannels = [
  { href: "mailto:sales@iqsetters.com", label: "sales@iqsetters.com" },
  { href: "tel:+918929406040", label: "+91 89294 06040" },
];

export const socialLinks = [
  {
    href: "https://facebook.com/IQSetters",
    label: "iQSetters on Facebook",
    path: "M14 21v-8h3l.5-4H14V7c0-1 .4-1.5 1.6-1.5H18V2.1A28 28 0 0 0 14.5 2C11 2 9 4.1 9 7v2H6v4h3v8z",
  },
  {
    href: "https://linkedin.com/company/iq-setters12/about/",
    label: "iQSetters on LinkedIn",
    path: "M4 8h4v13H4zm2-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5 6h4v2c1-1.5 2-2.3 4-2 3 .3 3 3 3 6v7h-4v-7c0-2-3-2-3 0v7h-4z",
  },
];
