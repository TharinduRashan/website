"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleToggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-nav border border-slate-200/80"
                : "bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-subtle"
            }`}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg py-0.5 px-1"
            >
              <Image
                src="/images/brand/logo.png"
                alt="Cloudzyne"
                width={160}
                height={35}
                priority
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNavItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "text-brand-600 font-semibold bg-brand-50/70"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-4 h-4 ml-0.5" />}
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex text-xs px-3.5 py-1.5"
              >
                Let&apos;s Talk
              </Button>
              <button
                type="button"
                onClick={handleToggleMobileMenu}
                className="p-2 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}
