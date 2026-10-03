"use client";

import React from "react";
import { processSteps } from "@/data/process";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <Badge variant="brand" className="mb-4 bg-brand-500/20 text-brand-300 border-brand-400/30">
              How We Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Structured, Transparent{" "}
              <span className="text-brand-400">Engineering Lifecycle</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              From requirement discovery to iterative deployment, we maintain structured milestones
              and transparent communication at every stage.
            </p>
          </div>
          <div>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Start Sprint Discovery
            </Button>
          </div>
        </div>

        {/* 6-Step Process Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-brand-500/60 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-brand-400 group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
                    Phase {step.step}
                  </span>
                </div>

                {/* Step Title & Summary */}
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 font-medium mb-3">{step.summary}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{step.details}</p>
              </div>

              {/* Deliverables List */}
              <div className="border-t border-slate-800 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Key Deliverables
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {step.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
