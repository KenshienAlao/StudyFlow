"use client";

import { BenefitsSection } from "@/components/landing/benefits-landing";
import { CtaSection } from "@/components/landing/cta-landing";
import { FeatureSection } from "@/components/landing/feature-landing";
import { FooterSection } from "@/components/landing/footer-landing";
import { HeroSection } from "@/components/landing/hero-landing";
import { HowItWorksSection } from "@/components/landing/howitworks-landing";
import { Navbar } from "@/components/landing/navbar-landing";
import { TestimonialsSection } from "@/components/landing/testimonials-landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
