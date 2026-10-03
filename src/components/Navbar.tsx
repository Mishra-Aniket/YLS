"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Search,
  Menu,
  PhoneCall,
} from "lucide-react";
import YLSLogo from "./YLSLogo";
import SearchModal from "./SearchModal";
import OffcanvasDrawer from "./OffcanvasDrawer";
import { PRIMARY_SERVICES } from "@/lib/constants";

interface NavbarProps {
  variant?: "floating" | "solid";
}

export default function Navbar({ variant = "floating" }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Logo block ---------- */
  const logoBlock = (
    <Link href="/" className="flex items-center shrink-0">
      <span className="inline-flex scale-[0.82] sm:scale-100 origin-left transition-transform">
        <YLSLogo variant="light" size="lg" />
      </span>
    </Link>
  );

  /* ---------- Streamlined, Spacious Menu ---------- */
  const menu = (
    <ul className="hidden lg:flex items-center gap-6 xl:gap-9 font-heading font-semibold text-[15px] xl:text-[16px] text-dark">
      {/* Home */}
      <li>
        <Link
          href="/"
          className={`py-2 transition-colors duration-200 ${
            pathname === "/" ? "text-primary font-bold" : "text-dark/90 hover:text-primary"
          }`}
        >
          Home
        </Link>
      </li>

      {/* About Us */}
      <li>
        <Link
          href="/about-us"
          className={`py-2 transition-colors duration-200 ${
            pathname === "/about-us" ? "text-primary font-bold" : "text-dark/90 hover:text-primary"
          }`}
        >
          About Us
        </Link>
      </li>

      {/* Services Dropdown */}
      <li
        className="relative group py-2"
        onMouseEnter={() => setActiveDropdown("services")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          href="/services"
          className={`inline-flex items-center gap-1.5 transition-colors duration-200 ${
            pathname.startsWith("/services")
              ? "text-primary font-bold"
              : "text-dark/90 hover:text-primary"
          }`}
        >
          <span>Services</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" />
        </Link>

        <div
          className={`absolute top-full left-0 w-72 pt-3 z-50 transition-all duration-200 ${
            activeDropdown === "services"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 space-y-1">
            {PRIMARY_SERVICES.map((srv) => (
              <Link
                key={srv.id}
                href={`/services#${srv.id}`}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {srv.title}
                </span>
                <span className="text-[11px] font-bold text-slate-400">{srv.number}</span>
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-slate-100">
              <Link
                href="/services"
                className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-primary hover:text-white text-xs font-bold text-slate-700 transition"
              >
                <span>View All 6 Specialized Haulage Divisions</span>
                <i className="fa fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </li>

      {/* Case Studies */}
      <li>
        <Link
          href="/case-studies"
          className={`py-2 transition-colors duration-200 ${
            pathname.startsWith("/case-studies")
              ? "text-primary font-bold"
              : "text-dark/90 hover:text-primary"
          }`}
        >
          Case Studies
        </Link>
      </li>

      {/* Gallery */}
      <li>
        <Link
          href="/gallery"
          className={`py-2 transition-colors duration-200 ${
            pathname.startsWith("/gallery")
              ? "text-primary font-bold"
              : "text-dark/90 hover:text-primary"
          }`}
        >
          Fleet Gallery
        </Link>
      </li>

      {/* Contact */}
      <li>
        <Link
          href="/contact-us"
          className={`py-2 transition-colors duration-200 ${
            pathname === "/contact-us" ? "text-primary font-bold" : "text-dark/90 hover:text-primary"
          }`}
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  /* ---------- Right Actions ---------- */
  const actions = (
    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
      {/* 24/7 Dispatch Control Call Pill */}
      <a
        href="tel:+919370691090"
        className="hidden 2xl:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-dark text-xs font-semibold font-heading transition"
        title="24/7 Dispatch Hotline"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <PhoneCall className="w-3.5 h-3.5 text-primary" />
        <span>+91 93706 91090</span>
      </a>

      {/* Search Icon Circle */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-dark flex items-center justify-center transition"
        aria-label="Search website"
      >
        <Search className="w-4 h-4 text-dark" />
      </button>

      {/* Burger Menu Circle (for detailed offcanvas drawer) */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-dark items-center justify-center transition"
        aria-label="Open detailed menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="12"
          fill="none"
          viewBox="0 0 14 12"
        >
          <path
            fill="#020e28"
            d="M0 .75Q.063.063.75 0h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 1.437 0 .75m0 5Q.063 5.063.75 5h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 6.437 0 5.75m13.25 5.75H.75q-.687-.063-.75-.75.063-.687.75-.75h12.5q.687.063.75.75-.063.687-.75.75"
          />
        </svg>
      </button>

      {/* Free Quote Button */}
      <Link href="/quote" className="btn-primary py-2.5 sm:py-3 px-5 sm:px-6 text-sm hidden sm:inline-flex items-center gap-2">
        <span>Free Quote</span>
        <i className="fa fa-turn-up text-xs" aria-hidden="true"></i>
      </Link>

      {/* Mobile Menu Toggler */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-100 text-dark text-xs font-bold hover:bg-primary hover:text-white transition"
        aria-label="Toggle Navigation"
      >
        <Menu className="w-4 h-4" />
        <span className="hidden xs:inline">Menu</span>
      </button>
    </div>
  );

  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-300 ${
          variant === "floating" ? "fixed top-0 inset-x-0" : "sticky top-0"
        }`}
      >
        {/* Full-width white bar with smooth shadow on scroll */}
        <div
          className={`w-full bg-white transition-all duration-300 ease-out ${
            isScrolled || variant === "solid"
              ? "shadow-[0_10px_30px_rgba(2,14,40,0.12)] border-b border-slate-100"
              : "shadow-[0_4px_20px_rgba(2,14,40,0.04)]"
          }`}
        >
          <div className="max-w-[1640px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <nav className="flex items-center justify-between h-[80px] sm:h-[84px]">
              {logoBlock}
              {menu}
              {actions}
            </nav>
          </div>
        </div>
      </header>

      {/* Modals & Drawers */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <OffcanvasDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
