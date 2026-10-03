"use client";

import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 bg-brand-500 text-white relative overflow-hidden">
      {/* Background radial glow spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-white border border-white/25">
            Let&apos;s Build Together
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Have a software idea?
          </h2>

          <p className="text-xl sm:text-2xl font-medium text-white/90">
            Let&apos;s turn it into something real.
          </p>

          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re at the concept stage or ready to architect and build, we&apos;d love
            to explore your software project. No obligations &mdash; just a straightforward technical
            conversation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white text-brand-600 hover:bg-slate-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`mailto:${companyConfig.supportEmail}`}
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors underline underline-offset-4 py-2 px-3"
            >
              <Mail className="w-4 h-4" />
              <span>{companyConfig.supportEmail}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
