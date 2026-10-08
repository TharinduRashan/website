"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validators";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      companyWebsite: "",
      email: "",
      phone: "",
      message: "",
      agreeToTerms: false,
      botCheck: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("loading");
    setServerErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed. Please try again.");
      }

      setFormState("success");
      reset();
    } catch (err: unknown) {
      setFormState("error");
      setServerErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please contact us directly via info@cloudzyne.com."
      );
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm text-center space-y-6 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Message Received</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you for reaching out to Cloudzyne. Our engineering team reviews every inquiry thoroughly and will get back to you within 24&ndash;48 business hours.
          </p>
        </div>
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setFormState("idle")}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 underline cursor-pointer"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-12 md:p-16 border border-slate-200/80 shadow-sm max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
        {formState === "error" && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
            <p>{serverErrorMessage}</p>
          </div>
        )}


        {/* 2x2 Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-900">
              Name <span className="text-brand-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              className={`w-full bg-transparent border-0 border-b py-3 px-0 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 transition-colors ${
                errors.name
                  ? "border-red-400 focus:border-red-500"
                  : "border-slate-300 focus:border-brand-500"
              }`}
              aria-invalid={Boolean(errors.name)}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Company Website Field */}
          <div className="space-y-2">
            <label htmlFor="companyWebsite" className="block text-sm font-medium text-slate-900">
              Company / Website (Optional)
            </label>
            <input
              id="companyWebsite"
              type="text"
              placeholder="e.g. yourcompany.com"
              className="w-full bg-transparent border-0 border-b border-slate-300 py-3 px-0 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-0 transition-colors"
              {...register("companyWebsite")}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-900">
              Email <span className="text-brand-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className={`w-full bg-transparent border-0 border-b py-3 px-0 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 transition-colors ${
                errors.email
                  ? "border-red-400 focus:border-red-500"
                  : "border-slate-300 focus:border-brand-500"
              }`}
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-900">
              Phone (Optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              className={`w-full bg-transparent border-0 border-b py-3 px-0 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 transition-colors ${
                errors.phone
                  ? "border-red-400 focus:border-red-500"
                  : "border-slate-300 focus:border-brand-500"
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Message / What are you planning to build? */}
        <div className="space-y-2 pt-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-900">
            What are you planning to build? <span className="text-brand-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Message..."
            className={`w-full bg-transparent border-0 border-b py-3 px-0 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 transition-colors resize-y min-h-[100px] ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-slate-300 focus:border-brand-500"
            }`}
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500 cursor-pointer accent-brand-500 shrink-0"
              {...register("agreeToTerms")}
            />
            <span className="text-xs sm:text-sm text-slate-600 leading-relaxed select-none">
              By submitting my information, I agree to the website&apos;s{" "}
              <Link href="/terms" className="underline hover:text-brand-600 text-slate-800 font-medium">
                terms of service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-brand-600 text-slate-800 font-medium">
                Privacy statement
              </Link>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-xs text-red-600 mt-1.5 ml-7">{errors.agreeToTerms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            disabled={formState === "loading"}
            className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] text-sm sm:text-base px-8 py-3.5 gap-2 bg-brand-500 hover:bg-brand-600 text-white shadow-sm hover:shadow-md cursor-pointer"
          >
            {formState === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
