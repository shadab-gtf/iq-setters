import type { ReactNode } from "react";

export type Faq = {
  question: string;
  answer: ReactNode;
};

export const faqs: Faq[] = [
  {
    question: "Which product should I start with?",
    answer: (
      <p>
        Start with the part of your business you want to organise. Pre-Sales CRM / LMS supports lead
        management; Post-Sales CRM supports booking and customer operations.{" "}
        <a href="https://iqsetters.com/contact-us">Talk to our team</a> to explore the right fit.
      </p>
    ),
  },
  {
    question: "How do Pre-Sales and Post-Sales CRM differ?",
    answer: (
      <p>
        Pre-Sales CRM / LMS helps capture enquiries, assign leads and manage follow-ups. Post-Sales
        CRM supports the journey after a booking, including applicant details, financial information
        and customer progress.
      </p>
    ),
  },
  {
    question: "Can I see a product demo?",
    answer: (
      <p>
        Yes. <a href="https://iqsetters.com/contact-us">Book a demo</a> with iQSetters to see the
        products and discuss your team&rsquo;s requirements.
      </p>
    ),
  },
  {
    question: "Do you offer HRM and WhatsApp Business API?",
    answer: (
      <p>
        Yes. <a href="https://iqsetters.com/hrm">HRM</a> supports employee and HR workflows.{" "}
        <a href="https://iqsetters.com/whatsapp-business-api">WhatsApp Business API</a> helps teams
        plan campaigns, tailor messages and review engagement.
      </p>
    ),
  },
  {
    question: "How can I discuss setup or get support?",
    answer: (
      <p>
        For product and setup enquiries, email{" "}
        <a href="mailto:sales@iqsetters.com">sales@iqsetters.com</a>. For assistance with an existing
        product, contact <a href="mailto:support@iqsetters.com">support@iqsetters.com</a>.
      </p>
    ),
  },
];
