"use client";

import React from "react";
import Link from "next/link";
import { TechLogo } from "@/ui/TechLogos";
import { Button } from "@/ui/Button";
import {
  Code2,
  Brain,
  Headphones,
  Smartphone,
  Cloud,
  Palette,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface ServiceCardItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  techs: string[];
  description: string;
  href: string;
}

const servicesGridData: ServiceCardItem[] = [
  {
    id: "product-engineering",
    title: "Product & Software Engineering",
    icon: <Code2 className="w-10 h-10 text-slate-900 group-hover:text-brand-500 transition-colors" />,
    techs: ["angular", "vue", "dotnet", "nodejs", "java", "react", "js", "ts"],
    description: "Purpose-built architectures, backend APIs, and performant web systems engineered for your business.",
    href: "/services#custom-software",
  },
  {
    id: "ai-data-analytics",
    title: "AI, Data & Analytics",
    icon: <Brain className="w-10 h-10 text-slate-900 group-hover:text-brand-500 transition-colors" />,
    techs: ["openai", "huggingface", "claude", "langchain", "uipath", "python"],
    description: "Integrating LLMs, computer vision, data extraction, and pragmatic workflow automations.",
    href: "/services#ai-solutions",
  },
  {
    id: "support-services",
    title: "24/7 Support Services",
    icon: <Headphones className="w-10 h-10 text-slate-900 group-hover:text-brand-500 transition-colors" />,
    techs: ["grafana", "zendesk", "datadog", "docker"],
    description: "Proactive uptime monitoring, security updates, bug fixes, and continuous post-launch maintenance.",
    href: "/services#maintenance",
  },
  {
    id: "mobile-solutions",
    title: "Mobile Solutions",
    icon: <Smartphone className="w-10 h-10 text-slate-900 group-hover:text-brand-500 transition-colors" />,
    techs: ["kotlin", "flutter", "swift", "react"],
    description: "Fluid cross-platform and native iOS & Android applications designed around real users.",
    href: "/services#mobile-apps",
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & DataOps",
    icon: <Cloud className="w-10 h-10 text-slate-900 group-hover:text-brand-500 transition-colors" />,
    techs: ["aws", "gcp", "azure", "kubernetes", "docker"],
    description: "Resilient cloud infrastructure, automated CI/CD pipelines, containerization, and data platforms.",
    href: "/services#maintenance",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Prototyping",
    icon: <Palette className="w-10 h-10 text-slate-900 group-hover:text-brand-500 transition-colors" />,
    techs: ["figma", "react", "ts"],
    description: "Design systems, user journey mapping, accessible interfaces, and interactive clickable prototypes.",
    href: "/services#ui-ux",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="pt-24 sm:pt-32 pb-14 sm:pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dominant Centered Title (Exact structure from reference image) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            End-to-End Engineering Expertise
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-500 leading-tight">
            Built Around Your Needs
          </p>
        </div>

        {/* 3x2 Grid of Cards (Exact visual match from reference) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          {servicesGridData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              custom={index % 3}
              className="h-full"
            >
              <Link
                href={item.href}
                className="group flex flex-col justify-between items-center text-center p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-brand-500/80 hover:shadow-card-hover transition-all duration-300 h-full min-h-[290px]"
              >
                {/* Top Centered Icon */}
                <div className="flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                {/* Centered Heading */}
                <div className="mb-6 flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-brand-500 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle Divider Line */}
                <div className="w-12 h-0.5 bg-slate-200 group-hover:bg-brand-500 group-hover:w-20 transition-all duration-300 mb-6" />

                {/* Bottom Row of Technology Badges / Logos */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
                  {item.techs.map((tech) => (
                    <div
                      key={tech}
                      className="p-1 rounded-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                    >
                      <TechLogo name={tech} className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Narrative Description & Services Overview Button */}
        <div className="pt-10 border-t border-slate-100 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We help our customers build reliable, scalable, and future-proof solutions. From custom
            software engineering and cloud platforms to data pipelines, AI models, and 24/7 technical
            support, our engineering teams bring deep technical rigor to every project.
          </p>
          <div className="flex justify-center">
            <Button
              href="/services"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Services Overview
            </Button>
          </div>
        </div>

        {/* Little Horizontal Divider Line */}
        <div className="pt-14 sm:pt-16 flex justify-center" aria-hidden="true">
          <div className="w-20 sm:w-28 h-0.5 bg-slate-200 rounded-full" />
        </div>
      </div>
    </section>
  );
}
