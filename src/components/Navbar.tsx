"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ShoppingCart,
  Search,
  ArrowRight,
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
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-300 ${
          variant === "floating"
            ? isScrolled
              ? "fixed top-3 inset-x-0 px-3 sm:px-6"
              : "absolute top-4 sm:top-6 inset-x-0 px-3 sm:px-6"
            : "sticky top-0 bg-[#020e28] border-b border-white/10 shadow-lg px-3 sm:px-6"
        }`}
      >
        <div className="max-w-[1365px] mx-auto">
          {/* Pure Code-Crafted White Pill Navbar (100% Responsive, Zero Broken Background Images) */}
          <div
            className={`relative flex items-center justify-between rounded-full bg-white px-4 sm:px-6 xl:px-7 py-2.5 sm:py-3 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-slate-100 ${
              isScrolled ? "bg-white/95 backdrop-blur-md shadow-2xl" : ""
            }`}
          >
            {/* Left: Authentic YLS Logo from Uploaded Emblem */}
            <div className="flex items-center shrink-0">
              <YLSLogo variant="light" size="sm" />
            </div>

            {/* Angled Code-Based Slash Separator (Desktop) */}
            <div className="hidden xl:flex items-center pl-4 pr-3 shrink-0">
              <div className="w-[1.5px] h-8 bg-slate-200/90 transform -rotate-[22deg]" />
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-[15px] font-semibold text-[#020e28]">
              {/* Home */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("home")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/"
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                    pathname === "/"
                      ? "text-[#fd5523] font-bold"
                      : "text-[#020e28] hover:text-[#fd5523]"
                  }`}
                >
                  <span>Home</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </Link>

                <div
                  className={`absolute top-full left-0 w-48 pt-2 z-50 transition-all duration-200 ${
                    activeDropdown === "home"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-2 shadow-2xl border border-slate-100 space-y-1">
                    <Link
                      href="/"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-[#fd5523] font-bold text-sm"
                    >
                      Home 1 (Default)
                    </Link>
                    <Link
                      href="/#services-section"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium"
                    >
                      Home 2 (Fleet View)
                    </Link>
                    <Link
                      href="/#process-section"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium"
                    >
                      Home 3 (Logistics Hub)
                    </Link>
                  </div>
                </div>
              </div>

              {/* Services with Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-[#fd5523] font-bold"
                      : "text-[#020e28] hover:text-[#fd5523]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-72 pt-2 z-50 transition-all duration-200 ${
                    activeDropdown === "services"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 space-y-1">
                    {PRIMARY_SERVICES.map((srv) => (
                      <Link
                        key={srv.id}
                        href="/services"
                        className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fd5523]" />
                          {srv.title}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {srv.number}
                        </span>
                      </Link>
                    ))}
                    <div className="pt-2 mt-1 border-t border-slate-100">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 hover:bg-[#fd5523] hover:text-white text-xs font-bold text-slate-700 transition"
                      >
                        <span>View All 15+ Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pages with Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("pages")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 rounded-full text-[#020e28] hover:text-[#fd5523] transition-colors cursor-pointer"
                >
                  <span>Pages</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>

                <div
                  className={`absolute top-full left-0 w-64 pt-2 z-50 transition-all duration-200 ${
                    activeDropdown === "pages"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 space-y-1">
                    <Link
                      href="/about-us"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      About Our Company
                    </Link>
                    <Link
                      href="/services"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      Fleet &amp; ODC Services
                    </Link>
                    <Link
                      href="/#tracking-section"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      Shipment Tracking
                    </Link>
                    <Link
                      href="/quote"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      Request a Freight Quote
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      All-India Branches (5 Hubs)
                    </Link>
                  </div>
                </div>
              </div>

              {/* Case Study with Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("casestudy")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/case-studies"
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                    pathname.startsWith("/case-studies")
                      ? "text-[#fd5523] font-bold"
                      : "text-[#020e28] hover:text-[#fd5523]"
                  }`}
                >
                  <span>Case Study</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </Link>

                <div
                  className={`absolute top-full left-0 w-72 pt-2 z-50 transition-all duration-200 ${
                    activeDropdown === "casestudy"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 space-y-1">
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      ODC Girder Transport (52m)
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      Pune Warehouse Staging
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      Multi-State Fleet Delivery
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      50-Ton Crane Handover
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog with Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("blog")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/blog"
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                    pathname.startsWith("/blog")
                      ? "text-[#fd5523] font-bold"
                      : "text-[#020e28] hover:text-[#fd5523]"
                  }`}
                >
                  <span>Blog</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </Link>

                <div
                  className={`absolute top-full left-0 w-72 pt-2 z-50 transition-all duration-200 ${
                    activeDropdown === "blog"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 space-y-1">
                    <Link
                      href="/blog"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      Safer ODC Movements in India
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      How to Reduce Transport Delays
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#fd5523] text-sm font-medium transition"
                    >
                      Why Warehousing Belongs in Logistics
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/contact-us"
                className={`px-3 py-2 rounded-full transition-colors ${
                  pathname === "/contact-us"
                    ? "text-[#fd5523] font-bold"
                    : "text-[#020e28] hover:text-[#fd5523]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Action Buttons & Free Quote CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Cart Icon Button */}
              <button
                onClick={() => setCartCount((prev) => (prev > 0 ? 0 : 1))}
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4f5f7] hover:bg-slate-200 text-[#020e28] flex items-center justify-center transition"
                aria-label="View logistics cart"
                title="Service Inquiry Bag"
              >
                <ShoppingCart className="w-4 h-4 text-[#020e28]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#fd5523] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              </button>

              {/* Search Icon Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4f5f7] hover:bg-slate-200 text-[#020e28] flex items-center justify-center transition"
                aria-label="Search site"
              >
                <Search className="w-4 h-4 text-[#020e28]" />
              </button>

              {/* Burger Menu Button (TransHub SVG Icon) */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4f5f7] hover:bg-slate-200 text-[#020e28] flex items-center justify-center transition"
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

              {/* Free Quote Button (Orange-Red Pill) */}
              <Link
                href="/quote"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#fd5523] hover:bg-[#e04414] text-white font-bold text-xs sm:text-sm tracking-wide shadow-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Modals & Drawers */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <OffcanvasDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
