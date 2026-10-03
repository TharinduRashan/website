"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  GraduationCap,
  CalendarClock,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

function getProjectIcon(iconName?: string) {
  switch (iconName) {
    case "Globe":
      return <Globe className="w-3.5 h-3.5 text-brand-600 shrink-0" />;
    case "GraduationCap":
      return <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
    case "CalendarClock":
      return <CalendarClock className="w-3.5 h-3.5 text-purple-600 shrink-0" />;
    default:
      return <Sparkles className="w-3.5 h-3.5 text-brand-600 shrink-0" />;
  }
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isPlaceholder = project.status === "concept";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index % 3}
      className="h-full"
    >
      <Link
        href={isPlaceholder ? "/contact" : `/projects/${project.slug}`}
        className="group flex flex-col h-full bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:border-brand-500/80 hover:shadow-card-hover transition-all duration-300"
      >
        {/* Card Header — Image Preview with Gradient Overlay */}
        <div
          className={`h-52 sm:h-56 relative p-5 sm:p-6 flex flex-col justify-between overflow-hidden border-b border-slate-100 bg-slate-900`}
        >
          {project.imageUrl ? (
            <>
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* High contrast gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/50" />
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.coverColor}`} />
          )}

          {/* Top Tag Bar */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border border-white/80">
              {getProjectIcon(project.iconName)}
              <span>{project.category}</span>
            </span>

            {project.label && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-200 border border-white/10 shadow-sm">
                {project.label}
              </span>
            )}
          </div>

          {/* Bottom Status & Link Arrow Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-xs text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 shadow-2xs">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.status === "live"
                    ? "bg-emerald-400 animate-pulse"
                    : "bg-amber-400"
                }`}
              />
              <span>
                {project.status === "live" ? "Live & Deployed" : "In Progress Prototype"}
              </span>
            </span>

            <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-200 shadow-md">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-950 mb-2.5 group-hover:text-brand-500 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech Stack Pills */}
            {project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Placeholder CTA */}
            {isPlaceholder && (
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                <span>Start a conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
