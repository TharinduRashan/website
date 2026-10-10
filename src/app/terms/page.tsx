import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Cloudzyne",
  description:
    "These Terms of Service govern your access to and use of cloudzyne.com and its content.",
  alternates: {
    canonical: "https://www.cloudzyne.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        {/* Header */}
        <div className="border-b border-slate-100 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-600 font-bold">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">Terms of Service</h1>
          <p className="text-xs text-slate-500">Effective Date: October 4, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm leading-relaxed">
          <p className="text-base text-slate-800 leading-relaxed font-normal">
            Welcome to Cloudzyne (&ldquo;Cloudzyne,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            These Terms of Service govern your access to and use of cloudzyne.com and its content.
          </p>
          <p>
            By accessing or using our website, you agree to these Terms. If you do not agree with
            these Terms, please do not use the website.
          </p>

          {/* 1. Use of the Website */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">1. Use of the Website</h2>
            <p>
              You may use this website for lawful purposes and in accordance with these Terms.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Use the website for unlawful, fraudulent, or abusive purposes</li>
              <li>Attempt to gain unauthorized access to our website, systems, or services</li>
              <li>Interfere with the operation or security of the website</li>
              <li>Copy, reproduce, modify, or distribute website content without appropriate permission</li>
              <li>Use the website in a manner that could damage Cloudzyne or its users</li>
            </ul>
          </div>

          {/* 2. Website Information */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">2. Website Information</h2>
            <p>
              The information provided on this website is intended for general informational
              purposes regarding Cloudzyne, our services, capabilities, and projects.
            </p>
            <p>
              We make reasonable efforts to keep the information on the website accurate and
              current. However, we do not guarantee that all information will always be complete,
              accurate, or up to date.
            </p>
            <p>
              Website content should not be interpreted as a formal quotation, proposal, guarantee,
              or commitment to provide any particular service.
            </p>
          </div>

          {/* 3. Project Inquiries and Engagements */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">3. Project Inquiries and Engagements</h2>
            <p>
              Submitting an inquiry through our website does not create a client relationship,
              contractual obligation, or agreement between you and Cloudzyne.
            </p>
            <p>
              Project requirements, pricing, timelines, deliverables, intellectual-property rights,
              payment terms, confidentiality obligations, warranties, and other engagement terms will
              be established separately through appropriate written agreements, proposals,
              Statements of Work (SOWs), or other contractual documents.
            </p>
            <p>
              In the event of a conflict between these website Terms and a separate written agreement
              governing a Cloudzyne project, the applicable project agreement will control.
            </p>
          </div>

          {/* 4. Intellectual Property */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the content of this website, including Cloudzyne branding,
              logos, designs, text, graphics, and original materials, is owned by or licensed to
              Cloudzyne and is protected by applicable intellectual-property laws.
            </p>
            <p>
              You may view and use the website for personal or legitimate business purposes, but you
              may not reproduce, modify, distribute, publish, or commercially exploit our website
              content without our prior written permission.
            </p>
            <p>
              Intellectual-property rights relating to software, designs, documentation, or other work
              created for clients are governed by the applicable client agreement.
            </p>
          </div>

          {/* 5. Third-Party Services and Links */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">5. Third-Party Services and Links</h2>
            <p>
              Our website may reference or link to third-party websites, products, or services.
            </p>
            <p>
              These third parties operate independently from Cloudzyne. We are not responsible for the
              availability, content, security, privacy practices, or policies of third-party websites
              or services.
            </p>
            <p>
              Your use of third-party services is subject to the terms and policies provided by those
              third parties.
            </p>
          </div>

          {/* 6. Disclaimer */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">6. Disclaimer</h2>
            <p>
              The website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis to the extent permitted by applicable law.
            </p>
            <p>
              We do not guarantee that the website will always be available, uninterrupted,
              error-free, or free from harmful components.
            </p>
            <p>
              Nothing on this website constitutes professional, legal, financial, or other specialized
              advice.
            </p>
          </div>

          {/* 7. Limitation of Liability */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Cloudzyne will not be liable for
              losses or damages arising from your use of, or inability to use, the website or
              reliance on information provided through the website.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or
              limited under applicable law.
            </p>
          </div>

          {/* 8. Changes to These Terms */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">8. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time to reflect changes to our
              website, services, business practices, or applicable legal requirements.
            </p>
            <p>
              Updated Terms will be published on this page with a revised effective date.
            </p>
            <p>
              Your continued use of the website after updated Terms are published constitutes
              acceptance of the updated Terms to the extent permitted by applicable law.
            </p>
          </div>

          {/* 9. Governing Law */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Sri Lanka, without regard to conflict-of-law
              principles.
            </p>
            <p>
              Any disputes relating to these Terms or your use of the website will be subject to the
              applicable courts and laws of Sri Lanka.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-950">10. Contact Us</h2>
            <p>
              If you have questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 not-prose text-slate-700">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href="mailto:info@cloudzyne.com"
                  className="font-medium text-brand-600 hover:text-brand-700 underline"
                >
                  info@cloudzyne.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="font-medium text-slate-900">
                  Cloudzyne Software Solutions
                </span>
                <span className="text-slate-500">&middot; Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
