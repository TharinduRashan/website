"use client";

import React, { useState } from "react";
import { Badge } from "@/ui/Badge";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const faqItems = [
  {
    question: "What software engineering services does Cloudzyne specialize in?",
    answer:
      "Cloudzyne specializes in purpose-built software engineering, including custom web application development, cross-platform mobile apps (iOS & Android), scalable SaaS product architectures, API & system integrations, AI/LLM features, and end-to-end technical maintenance.",
  },
  {
    question: "Where is Cloudzyne based, and do you work with international clients?",
    answer:
      "Cloudzyne is headquartered in Colombo, Sri Lanka. We operate as a dedicated remote technical partner collaborating with founders, startups, and established enterprises across Sri Lanka, the Asia-Pacific region, Europe, the UK, and North America.",
  },
  {
    question: "How do you estimate software development costs and project timelines?",
    answer:
      "We begin with a structured discovery discussion to understand your business objectives and feature scope. From there, we provide a transparent, milestone-driven breakdown detailing engineering deliverables, sprint schedules, and predictable fixed or sprint-based investment tiers.",
  },
  {
    question: "What technology stacks does Cloudzyne engineer with?",
    answer:
      "We build with production-proven, modern technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Tailwind CSS, Docker, and major cloud providers (AWS, Google Cloud, Vercel). We prioritize type safety, modular component systems, and scalable database architectures.",
  },
  {
    question: "Who owns the code and intellectual property (IP) after launch?",
    answer:
      "You retain 100% full ownership of all source code, database architectures, and digital assets engineered for your project. Upon project handover, complete repository access and deployment documentation are transferred to your organization with zero vendor lock-in.",
  },
  {
    question: "How do we get started or request an initial consultation?",
    answer:
      "You can reach out through our website contact form or message us directly on WhatsApp at +94 78 725 5755. Our engineering leads will review your inquiry and schedule an introductory technical discovery call within 24–48 business hours.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/60 relative overflow-hidden">
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="brand" className="mb-4 gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Everything you need to know about{" "}
            <span className="text-brand-500">partnering with us</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Straightforward answers about our engineering process, pricing approach, team collaboration,
            and codebase ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen
                    ? "border-brand-500/80 shadow-md ring-1 ring-brand-500/10"
                    : "border-slate-200/80 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-50 text-brand-600 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
