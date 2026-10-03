import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-100">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Cloudzyne"
                width={170}
                height={38}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Purpose-built software engineering for individuals, startups, and growing businesses.
              We transform ambitious operational concepts into dependable digital products.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href={`mailto:${companyConfig.supportEmail}`}
                  className="hover:text-brand-600 transition-colors font-medium text-slate-800"
                >
                  {companyConfig.supportEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-brand-600 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-brand-600 font-semibold hover:text-brand-700 transition-colors inline-flex items-center gap-1 mt-2"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>&copy; {companyConfig.foundedYear} {companyConfig.legalName}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
