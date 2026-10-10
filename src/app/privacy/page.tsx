import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Cloudzyne",
  description:
    "This Privacy Policy explains how Cloudzyne handles personal information submitted through our website and service inquiries.",
  alternates: {
    canonical: "https://www.cloudzyne.com/privacy",
  },
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Effective Date: October 4, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm leading-relaxed">
          <p className="text-base text-slate-800 leading-relaxed font-normal">
            Cloudzyne (&ldquo;Cloudzyne,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            respects your privacy. This Privacy Policy explains how we handle personal information
            submitted through our website, cloudzyne.com, and through inquiries regarding our
            software development and technology services.
          </p>

          {/* 1. Information We Collect */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">1. Information We Collect</h2>
            <p>
              When you contact Cloudzyne through our website, you may provide information such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number, if provided</li>
              <li>Company or organization name, if provided</li>
              <li>Project requirements and description</li>
              <li>Project category, scope, and estimated budget</li>
              <li>Any other information you voluntarily include in your inquiry</li>
            </ul>
            <p className="pt-1">
              We collect this information to understand your requirements and communicate with you
              regarding your inquiry.
            </p>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">2. How We Use Your Information</h2>
            <p>We may use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Respond to your inquiries</li>
              <li>Understand your software or technology requirements</li>
              <li>Discuss potential projects</li>
              <li>Prepare proposals or estimates</li>
              <li>Communicate with you about our services</li>
              <li>Maintain the security and operation of our website and services</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p className="pt-1 font-medium text-slate-900">
              We do not sell or rent your personal information.
            </p>
          </div>

          {/* 3. Email and Service Providers */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">3. Email and Service Providers</h2>
            <p>
              When you submit our contact form, the information you provide is transmitted through
              Resend, our email delivery provider, so that your inquiry can be delivered to our
              business email account.
            </p>
            <p>
              The resulting email and related information may be stored and processed by Resend and
              by Google Workspace, which we use for business email.
            </p>
            <p>
              These providers may process information such as email addresses, message content, and
              related email metadata as necessary to provide their services. Resend states that its
              email service processes message content and metadata and that its customer data is
              stored in the United States.
            </p>
            <p>
              We use these services only for legitimate business and communication purposes.
            </p>
          </div>

          {/* 4. Confidential Business Information */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">4. Confidential Business Information</h2>
            <p>
              You may choose to provide information about your business, software ideas, workflows,
              or project requirements when contacting us.
            </p>
            <p>
              We handle information provided to us responsibly and use it for the purposes for which
              it was provided.
            </p>
            <p>
              Where formal confidentiality obligations are required, Cloudzyne may enter into a
              separate Non-Disclosure Agreement (NDA) or other written agreement with the relevant
              party.
            </p>
            <p>
              This Privacy Policy does not replace the confidentiality or intellectual-property
              terms of a separate agreement.
            </p>
          </div>

          {/* 5. Data Retention */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">5. Data Retention</h2>
            <p>
              We retain inquiry and communication information for as long as reasonably necessary
              for legitimate business purposes, including responding to inquiries, managing
              prospective or existing client relationships, maintaining appropriate business
              records, resolving disputes, and meeting applicable legal obligations.
            </p>
            <p>
              The retention period may vary depending on the nature of the information and the
              circumstances in which it was provided.
            </p>
          </div>

          {/* 6. Cookies and Analytics */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">6. Cookies and Analytics</h2>
            <p>
              Cloudzyne does not currently use non-essential cookies or analytics services to track
              website visitors for advertising or behavioral analytics.
            </p>
            <p>
              Our website may nevertheless use technologies that are technically necessary to
              operate, secure, and deliver the website.
            </p>
          </div>

          {/* 7. Data Security */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">7. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect personal
              information against unauthorized access, disclosure, alteration, loss, or destruction.
            </p>
            <p>
              However, no method of transmitting or storing information electronically can be
              guaranteed to be completely secure.
            </p>
          </div>

          {/* 8. Your Rights */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">8. Your Rights</h2>
            <p>
              Subject to applicable law, you may have rights regarding your personal information,
              including the right to request access to, correction of, or deletion of certain personal
              information held by us.
            </p>
            <p>
              If you wish to make a privacy-related request, please contact us using the details below.
              We may take reasonable steps to verify your identity before processing a request.
            </p>
          </div>

          {/* 9. Changes to This Privacy Policy */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy when our services, website, data practices, or
              applicable legal requirements change.
            </p>
            <p>
              Any updated version will be published on this page with a revised effective date.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-950">10. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or the
              handling of your personal information, please contact us at:
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
