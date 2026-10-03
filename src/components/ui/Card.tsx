import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  className,
  hoverable = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 transition-all duration-300",
        hoverable &&
          "hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
