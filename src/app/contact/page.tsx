import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Mail, Calendar, PhoneCall, ShieldCheck, Clock } from "lucide-react";
import { companyConfig } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Cloudzyne — Software Consultation & Inquiries",
  description:
    "Get in touch with Cloudzyne. Request a software consultation, discuss your web or mobile app requirements, or reach out to our team in Sri Lanka.",
  alternates: {
    canonical: "https://www.cloudzyne.com/contact",
  },
  openGraph: {
    title: "Contact Cloudzyne — Software Solutions & Engineering",
    description:
      "Ready to engineer your next software system? Speak with Cloudzyne's technical team today.",
    url: "https://www.cloudzyne.com/contact",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Cloudzyne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cloudzyne — Software Solutions & Engineering",
    description:
      "Ready to engineer your next software system? Speak with Cloudzyne's technical team today.",
  },
};

const contactSchema = {
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
          "name": "Contact",
          "item": "https://www.cloudzyne.com/contact",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.cloudzyne.com/contact#webpage",
      "url": "https://www.cloudzyne.com/contact",
      "name": "Contact Cloudzyne",
      "mainEntity": {
        "@type": "Organization",
        "name": "Cloudzyne",
        "telephone": "+94787255755",
        "email": "info@cloudzyne.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Colombo",
          "addressCountry": "LK",
        },
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50/60 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Contact Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* 1. Header Section */}
      <section className="section-contact-header max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
          Ready to build your software solution? <br className="hidden sm:inline" />
          <span className="text-brand-500">Let&apos;s make it happen!</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Reach out to us to build dedicated software solutions tailored to your needs.
          Together, let&apos;s create robust, high-impact digital systems.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-sm sm:text-base px-7 py-3 gap-2 bg-brand-500 hover:bg-brand-600 text-white shadow-sm hover:shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Send an Inquiry</span>
          </a>
          <a
            href={`mailto:${companyConfig.supportEmail}`}
            className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 text-sm sm:text-base px-7 py-3 gap-2 bg-slate-900 hover:bg-black text-white shadow-sm hover:shadow-md cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{companyConfig.supportEmail}</span>
          </a>
        </div>
      </section>

      {/* 2. Form Section */}
      <section id="contact-form" className="section-contact-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-28">
        <ContactForm />
      </section>

      {/* 3. Location Card Section */}
      <section className="section-contact-cta max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xs text-center flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-slate-800/80 text-brand-400 flex items-center justify-center mb-4 shadow-2xs">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
            We&apos;re Located at
          </h2>
          <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Colombo, Sri Lanka
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">
            Collaborating remotely with startups, businesses, and enterprises worldwide.
          </p>

          <div className="mt-6 pt-6 border-t border-slate-800 w-full max-w-md flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-400" />
              <span>Response in 24&ndash;48 hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Confidentiality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
