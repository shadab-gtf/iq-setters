import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { PartnerProof } from "@/components/sections/PartnerProof";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsSuite } from "@/components/sections/ProductsSuite";
import { SuiteBenefits } from "@/components/sections/SuiteBenefits";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <PartnerProof />
      <AboutSection />
      <ProductsSuite />
      <SuiteBenefits />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
