import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustSection } from "@/components/trust/TrustSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Cloudzyne — Purpose-Built Software Solutions & Engineering",
  description:
    "Cloudzyne is an engineer-led software solutions company in Sri Lanka. We build custom software, scalable web platforms, mobile applications, and AI integrations for startups and businesses worldwide.",
  alternates: {
    canonical: "https://www.cloudzyne.com",
  },
  openGraph: {
    title: "Cloudzyne — Purpose-Built Software Solutions & Engineering",
    description:
      "Engineering purposeful software solutions for forward-thinking businesses. Based in Sri Lanka, collaborating worldwide.",
    url: "https://www.cloudzyne.com",
    siteName: "Cloudzyne",
    type: "website",
  },
};

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
