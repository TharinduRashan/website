import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Cpu,
  ExternalLink,
} from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.status !== "concept")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Cloudzyne",
    };
  }

  return {
    title: `${project.title} — Case Study | Cloudzyne`,
    description: project.description,
    alternates: {
      canonical: `https://cloudzyne.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.status === "concept") {
    notFound();
  }

  const isAcademic = project.label === "Academic Project";

  return (
    <main className="pt-28 md:pt-36 bg-white min-h-screen">
      {/* Top Breadcrumb / Back Link */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Header Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div
          className={`w-full rounded-3xl bg-gradient-to-br ${project.coverColor} p-8 sm:p-12 border border-slate-200/80 space-y-6 relative overflow-hidden`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="brand">{project.category}</Badge>
            {project.label && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-white">
                {project.label}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-700 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/90 text-slate-800 text-xs font-mono font-medium shadow-2xs border border-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 bg-white px-4 py-2 rounded-full shadow-2xs"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Visual Mockup Preview Showcase */}
      {project.imageUrl && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 ring-1 ring-slate-900/5">
            {/* Top Browser Bar */}
            <div className="px-5 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-900/90 px-4 py-1 rounded-full border border-slate-800 max-w-xs truncate">
                {project.liveUrl || `cloudzyne.com/projects/${project.slug}`}
              </div>
              <div className="w-12 hidden sm:block" />
            </div>
            {/* Image Preview */}
            <div className="relative aspect-[16/9] w-full bg-slate-950">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24">
        {/* Context Notice for Academic Projects */}
        {isAcademic && (
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4 text-amber-800">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-sm">
              <p className="font-bold text-amber-900">Academic &amp; Learning Project Notice</p>
              <p className="leading-relaxed">
                {project.detailContent?.context ||
                  "This project was engineered as part of a university software engineering curriculum. It represents genuine technical implementation and prototype design rather than a commercial client contract."}
              </p>
            </div>
          </div>
        )}

        {/* Overview Section */}
        {project.detailContent?.overview && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-500" />
              <span>Project Overview</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {project.detailContent.overview}
            </p>
          </section>
        )}

        {/* Key Features Section */}
        {project.detailContent?.features && project.detailContent.features.length > 0 && (
          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brand-500" />
              <span>Key Features &amp; Modules</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.detailContent.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenges & Engineering Decisions */}
        {project.detailContent?.challenges && (
          <section className="space-y-4 p-8 rounded-3xl bg-slate-50/80 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              Technical Challenges &amp; Architectural Focus
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.detailContent.challenges}
            </p>
          </section>
        )}

        {/* Outcome (if any) */}
        {project.detailContent?.outcome && (
          <section className="space-y-4 p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200">
            <h2 className="text-xl font-bold text-emerald-950">Verified Outcome</h2>
            <p className="text-sm sm:text-base text-emerald-900 leading-relaxed">
              {project.detailContent.outcome}
            </p>
          </section>
        )}

        {/* Next Step / Contact */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Interested in a similar system?</h3>
            <p className="text-sm text-slate-500">
              We can engineer a tailored solution for your specific operational parameters.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="md">
            Start a Conversation
          </Button>
        </div>
      </div>

      {/* Closing CTA */}
      <CtaSection />
    </main>
  );
}
