import { HeroSection } from "@/components/hero/HeroSection";
import { TrustSection } from "@/components/trust/TrustSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust / Why Cloudzyne Section */}
      <TrustSection />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Selected Projects Section */}
      <ProjectsSection />

      {/* 5. Closing CTA Section */}
      <CtaSection />
    </main>
  );
}
