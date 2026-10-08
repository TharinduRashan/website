import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-36 pb-24 flex items-center justify-center bg-slate-50/50">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-3xl bg-brand-50 border border-brand-100 flex items-center justify-center p-3.5 shadow-xs">
            <Image
              src="/images/brand/cloudzyne-vortex-mark-blue.svg"
              alt="Cloudzyne"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The route or resource you are looking for does not exist or may have been relocated.
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white border border-slate-200 hover:border-slate-300 text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
