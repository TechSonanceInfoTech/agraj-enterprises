"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CONFIG } from "@/config";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 -ml-2 sm:-ml-4 p-2 rounded-xl" aria-label={`${CONFIG.company.name} - Home`}>
            <Image 
              src="/logo.png" 
              alt={`${CONFIG.company.name} Logo`} 
              width={320}
              height={80}
              className="h-12 md:h-16 w-[200px] sm:w-[260px] md:w-[300px] object-contain object-left mix-blend-multiply contrast-[1.2] brightness-[1.1]"
              priority
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {CONFIG.nav.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "hover:bg-gray-100"
                  }`}
                  style={
                    isActive
                      ? { background: CONFIG.colors.primaryMid, color: CONFIG.colors.white }
                      : { color: CONFIG.colors.darkText }
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href={CONFIG.nav.ctaHref}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ background: CONFIG.colors.accentOrange }}
            >
              <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
              {CONFIG.nav.ctaLabel}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-expanded={isMobileOpen}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ background: CONFIG.colors.primaryDark }}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
                style={{ background: CONFIG.colors.primaryDark }}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ background: CONFIG.colors.primaryDark }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu ${isMobileOpen ? "open" : ""}`}>
          <div className="py-3 border-t" style={{ borderColor: CONFIG.colors.border }}>
            {CONFIG.nav.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "text-white" : ""
                  }`}
                  style={
                    isActive
                      ? { background: CONFIG.colors.primaryMid, color: CONFIG.colors.white }
                      : { color: CONFIG.colors.darkText }
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 px-4 pb-2">
              <Link
                href={CONFIG.nav.ctaHref}
                className="block text-center px-5 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: CONFIG.colors.accentOrange }}
              >
                {CONFIG.nav.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
