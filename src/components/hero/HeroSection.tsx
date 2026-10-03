"use client";

import React from "react";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-18 min-h-[88vh] lg:min-h-[calc(100vh-3rem)] flex items-center justify-center overflow-hidden mesh-grid">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-5 sm:space-y-6 md:space-y-7 max-w-4xl mx-auto"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={fadeUp} className="inline-flex justify-center">
            <Badge variant="brand" className="gap-2 px-3.5 py-1 text-[11px] sm:text-xs shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>SOFTWARE SOLUTIONS &middot; SRI LANKA</span>
            </Badge>
          </motion.div>

          {/* Dominant H1 Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]"
          >
            We build software that{" "}
            <span className="text-brand-500 relative inline-block">
              moves businesses
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2 text-brand-200/70 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>{" "}
            forward.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Cloudzyne helps businesses turn ideas and operational challenges into modern,
            reliable, and scalable software solutions built with engineering precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1"
          >
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
              className="w-full sm:w-auto"
            >
              Start a Project
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="md"
              icon={<Code2 className="w-4 h-4 ml-1 text-slate-500" />}
              className="w-full sm:w-auto"
            >
              Explore Our Work
            </Button>
          </motion.div>

          {/* Key Capabilities Ticker */}
          <motion.div
            variants={fadeUp}
            className="pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm text-slate-500 font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              Custom Software
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              Web Platforms
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              Mobile Applications
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              AI Integration
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
