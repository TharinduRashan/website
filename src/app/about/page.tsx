import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/ui/Badge";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  Lightbulb,
  Rocket,
  Building2,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Cloudzyne Software Engineering Team",
  description:
    "Cloudzyne is an engineer-founded software company based in Sri Lanka, building dependable custom software, web platforms, and mobile products for businesses worldwide.",
  alternates: {
    canonical: "https://www.cloudzyne.com/about",
  },
  openGraph: {
    title: "About Cloudzyne — Software Solutions & Engineering",
    description:
      "Engineer-founded software company based in Sri Lanka, creating high-impact custom software, web platforms, and mobile apps.",
    url: "https://www.cloudzyne.com/about",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Cloudzyne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cloudzyne — Software Solutions & Engineering",
    description:
      "Engineer-founded software company based in Sri Lanka, creating high-impact custom software, web platforms, and mobile apps.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cloudzyne.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.cloudzyne.com/about",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.cloudzyne.com/about#webpage",
      "url": "https://www.cloudzyne.com/about",
      "name": "About Cloudzyne",
      "mainEntity": {
        "@type": "Organization",
        "name": "Cloudzyne",
        "url": "https://www.cloudzyne.com",
        "founder": [
          {
            "@type": "Person",
            "name": "Rashan",
            "jobTitle": "Co-Founder, Product & Software Engineering",
            "image": "https://www.cloudzyne.com/images/team/rashan.webp",
          },
          {
            "@type": "Person",
            "name": "Malshan",
            "jobTitle": "Co-Founder, Systems & Software Engineering",
            "image": "https://www.cloudzyne.com/images/team/malshan.webp",
          },
        ],
      },
    },
  ],
};

const audiences = [
  {
    icon: <Lightbulb className="w-5 h-5 text-brand-500" />,
    title: "Individuals & Founders",
    description:
      "Turning early-stage software concepts into functional, validated products.",
  },
  {
    icon: <Rocket className="w-5 h-5 text-brand-500" />,
    title: "Startups",
    description:
      "Building scalable MVPs engineered with solid foundations for growth.",
  },
  {
    icon: <Building2 className="w-5 h-5 text-brand-500" />,
    title: "Small Businesses",
    description:
      "Automating core operations and replacing fragmented manual workflows.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-brand-500" />,
    title: "Growing Companies",
    description:
      "Modernizing internal systems and engineering dedicated digital platforms.",
  },
];

const founders = [
  {
    initials: "R",
    name: "Rashan",
    role: "Co-Founder",
    title: "Product & Software Engineering",
    image: "/images/team/rashan.webp",
    description:
      "Leads product engineering and full-stack software architecture, focusing on building clean, dependable digital systems tailored to business needs.",
  },
  {
    initials: "M",
    name: "Malshan",
    role: "Co-Founder",
    title: "Systems & Software Engineering",
    image: "/images/team/malshan.webp",
    description:
      "Drives software development and system implementation, working directly with clients to translate operational requirements into high-performing products.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-28 md:pt-36 bg-white min-h-screen">
      {/* About Breadcrumbs & Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* 1. Page Hero */}
      <section className="pt-6 sm:pt-10 pb-24 sm:pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
              Software built with <br />
              <span className="text-brand-500">purpose and precision.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Cloudzyne is a software solutions company based in Sri Lanka. Founded by software
              engineers, we build custom software and digital products for individuals, startups,
              small businesses, and growing companies.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 md:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-400/30 mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Who We Are
              </h2>
            </div>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>
                Cloudzyne was founded on a simple belief: businesses deserve software built by
                engineers who care about the problem.
              </p>
              <p>
                As a small, engineer-led company, we work closely with our clients to understand
                their needs, workflows, and goals before building.
              </p>
              <p>
                Whether launching a new product or improving an existing system, we focus on
                reliable software built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Build For */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge variant="brand" className="mb-4">
              Client Focus
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
              Who We Build For
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              We collaborate with clients across diverse stages of growth, delivering software tailored to their scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((aud, idx) => (
              <div
                key={idx}
                className="group p-7 rounded-3xl bg-slate-50/70 border border-slate-200/70 shadow-2xs space-y-3.5 hover:border-brand-500/80 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-brand-600 group-hover:bg-brand-500 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    {aud.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-600 transition-colors duration-200">{aud.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {aud.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The People Behind Cloudzyne */}
      <section id="team" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge variant="brand" className="mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
              The People Behind Cloudzyne
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Engineer-led leadership committed to building reliable, high-impact digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((f, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-2xs space-y-5 hover:border-brand-500/80 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 font-bold text-lg shadow-2xs overflow-hidden shrink-0 relative">
                    {f.image ? (
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        className="object-cover object-center"
                        sizes="56px"
                      />
                    ) : (
                      f.initials
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{f.name}</h3>
                    <p className="text-xs font-semibold text-brand-600 mt-0.5">
                      {f.role} &middot; {f.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Let's Build Together CTA */}
      <CtaSection />
    </main>
  );
}
