"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "@/ui/Badge";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="brand" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Selected Software Projects &amp;{" "}
            <span className="text-brand-500">Case Studies</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Explore authentic projects engineered by Cloudzyne. Every project is transparently
            classified with genuine technical details and no fabricated outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-slate-200 hover:border-brand-500 hover:text-brand-600 transition-colors shadow-2xs hover:shadow-sm"
          >
            <span>See all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
