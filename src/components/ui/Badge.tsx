import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "neutral" | "success" | "outline";
}

export function Badge({
  className,
  variant = "brand",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-brand-50 text-brand-700 border-brand-200/60",
    neutral: "bg-slate-100 text-slate-700 border-slate-200/80",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    outline: "bg-transparent text-slate-600 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
