"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/ui/Button";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Close menu only when route actually changes
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 sm:p-8 z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <Link
                href="/"
                className="flex items-center"
                onClick={onClose}
              >
                <Image
                  src="/images/brand/logo.png"
                  alt="Cloudzyne"
                  width={150}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 py-8 flex flex-col gap-2 overflow-y-auto">
              {mainNavItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-brand-50 text-brand-600 font-semibold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-brand-600 translate-x-1" : "text-slate-400 opacity-60"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={onClose}
              >
                Start a Project
              </Button>
              <p className="text-xs text-center text-slate-500">
                Software Solutions &middot; Sri Lanka
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
