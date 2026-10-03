import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  hasBackground?: boolean;
  backgroundVariant?: "white" | "subtle" | "dark";
}

export function Section({
  className,
  containerClassName,
  backgroundVariant = "white",
  children,
  ...props
}: SectionProps) {
  const bgStyles = {
    white: "bg-white text-slate-900",
    subtle: "bg-slate-50/70 border-y border-slate-100 text-slate-900",
    dark: "bg-slate-950 text-white",
  };

  return (
    <section
      className={cn("py-20 md:py-28 relative overflow-hidden", bgStyles[backgroundVariant], className)}
      {...props}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
