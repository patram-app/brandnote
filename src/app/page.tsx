"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ComparisonSection } from "@/components/comparison-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ContactSection } from "@/components/contact-section";
import { WhatIsBrandNoteSection } from "@/components/about-section";
import { CombinedReachImpactSection } from "@/components/reach-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Light background */}
        <HeroSection />

        <WhatIsBrandNoteSection />

        {/* Dark background */}
        <div className="bg-gray-90">
          <ComparisonSection />
        </div>

        {/* Light background */}
        <HowItWorksSection />

        {/* Dark background */}
        <div className="bg-gray-900">
          <CombinedReachImpactSection />
        </div>

        {/* Light background */}
        <BenefitsSection />

        {/* Dark background */}
        <div className="bg-black rounded-t-4xl">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
