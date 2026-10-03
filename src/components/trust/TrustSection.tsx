"use client";

import React from "react";
import { valuePropositions } from "@/data/company";
import { Badge } from "@/ui/Badge";
import { Layers, Cpu, TrendingUp, Users, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export function TrustSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="brand" className="mb-4">
            Engineering Values
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Why forward-thinking businesses{" "}
            <span className="text-brand-500">partner with Cloudzyne</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            We focus on software fundamentals: clarity of scope, maintainable architecture, and
            delivering solutions that address genuine operational needs without unnecessary bloat.
          </p>
        </div>

        {/* 2-Column Grid inspired by Creative Software */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Anchor Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Built with precision. Engineered for resilience.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rather than treating software development as generic ticket-clearing, we function
                as dedicated technical partners who take full architectural ownership from initial
                discovery to post-launch optimization.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-800/80 space-y-3 relative z-10">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                <span>Strict code reviews & type-safe development</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                <span>Zero vendor lock-in & full codebase ownership</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                <span>Pragmatic milestones with active progress demos</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Value Tiles with interactive hover transitions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {valuePropositions.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-500 hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-white group-hover:text-brand-500 flex items-center justify-center transition-colors duration-300 mb-5 shadow-xs">
                    {iconMap[item.icon] || <Cpu className="w-6 h-6" />}
                  </div>
                  <h4 className="text-lg font-bold text-slate-950 group-hover:text-white transition-colors duration-300 mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
