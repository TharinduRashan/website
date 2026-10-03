import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/ui/Badge";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Projects & Engineering Work — Cloudzyne",
  description:
    "Explore software projects engineered by Cloudzyne: internal production platforms, educational LMS prototypes, and salon booking systems.",
  alternates: {
    canonical: "https://cloudzyne.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="pt-28 md:pt-36 bg-white min-h-screen">
      {/* Page Header */}
      <section className="pb-16 md:pb-24 border-b border-slate-100 mesh-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="brand">Our Work &amp; Portfolio</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
              Engineered with care. <br />
              <span className="text-brand-500">Documented with honesty.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Browse our portfolio of software platforms and prototypes. We clearly classify
              commercial prototypes, internal production systems, and academic work without
              embellishment.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaSection />
    </main>
  );
}
