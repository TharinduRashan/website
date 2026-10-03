import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  Code2,
  Globe,
  Smartphone,
  Layers,
  Brain,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Cloudzyne Software Solutions",
  description:
    "Explore Cloudzyne's full range of software engineering services: custom software development, web applications, mobile apps, SaaS products, AI solutions, and software maintenance.",
  alternates: {
    canonical: "https://cloudzyne.com/services",
  },
};

const serviceIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

const processSteps = [
  {
    step: "01",
    title: "Understand",
    description: "We learn about your operational challenges, workflows, and desired outcomes.",
  },
  {
    step: "02",
    title: "Plan",
    description: "We define the technical architecture, project scope, and release milestones.",
  },
  {
    step: "03",
    title: "Design",
    description: "We design clean user journeys, wireframes, and dependable system interfaces.",
  },
  {
    step: "04",
    title: "Build",
    description: "We engineer the software with clean code, frequent testing, and regular updates.",
  },
  {
    step: "05",
    title: "Deploy",
    description: "We handle cloud setup, data migration, and secure launch into production.",
  },
  {
    step: "06",
    title: "Improve",
    description: "We monitor performance, provide maintenance, and build new capabilities as you grow.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-28 md:pt-36 bg-white min-h-screen">
      {/* 1. Services Hero */}
      <section className="pb-16 sm:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
              Software built around <br />
              <span className="text-brand-500">your business.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              We build custom software, web applications, mobile platforms, and AI integrations
              tailored to your operational realities &mdash; solving real business problems without unnecessary complexity.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="md">
                Start a Project
              </Button>
              <Button href="#services-grid" variant="outline" size="md">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview Grid (7 Service Cards) */}
      <section id="services-grid" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge variant="brand" className="mb-4">
              What We Offer
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
              Our Software Services
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Explore our core capabilities, from bespoke business systems to scalable product engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, idx) => (
              <Link
                key={service.id}
                href="/contact"
                className={`p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between border ${
                  idx === 0
                    ? "bg-white border-brand-300 shadow-sm ring-1 ring-brand-100 hover:border-brand-500"
                    : "bg-white border-slate-200/80 shadow-2xs hover:border-brand-300 hover:shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      {serviceIconMap[service.icon] || <Code2 className="w-6 h-6" />}
                    </div>
                    {idx === 0 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-50 text-brand-600 border border-brand-200/60">
                        <Sparkles className="w-3 h-3" /> Core Focus
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How We Work Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge variant="brand" className="mb-4">
              Lifecycle
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
              How We Work
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              A transparent, milestone-driven development process from requirement discovery to ongoing enhancement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((ws, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/70 shadow-2xs flex flex-col justify-between space-y-5 hover:border-brand-300 transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-2xl font-black font-mono text-brand-500">
                    {ws.step}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950">{ws.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{ws.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <CtaSection />
    </main>
  );
}
