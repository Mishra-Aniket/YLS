"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ShoppingCart,
  Search,
  Menu,
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Warehouse,
  FileText,
  MapPin,
  Clock,
} from "lucide-react";
import YLSLogo from "./YLSLogo";
import SearchModal from "./SearchModal";
import OffcanvasDrawer from "./OffcanvasDrawer";
import { COMPANY, PRIMARY_SERVICES, BRANCHES } from "@/lib/constants";

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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-300 ${
          variant === "floating"
            ? "absolute top-4 sm:top-6 inset-x-0"
            : "sticky top-0 bg-navy-dark border-b border-white/10 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* White Pill-Shaped Container */}
          <div
            className={`relative flex items-center justify-between bg-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-pill border border-slate-100 transition-all duration-300 ${
              isScrolled ? "shadow-card bg-white/95 backdrop-blur-md" : ""
            }`}
          >
            {/* Left: Angled Logo Area */}
            <div className="flex items-center">
              <div className="relative pr-4 sm:pr-6 border-r border-slate-200">
                <YLSLogo variant="light" size="sm" />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-[15px] font-semibold text-slate-800">
              {/* Home */}
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-full transition-colors ${
                  pathname === "/"
                    ? "text-primary font-bold"
                    : "text-slate-800 hover:text-primary"
                }`}
              >
                Home
              </Link>

              {/* Services with Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-primary font-bold"
                      : "text-slate-800 hover:text-primary"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-72 pt-3 z-50 transition-all duration-200 ${
                    activeDropdown === "services"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-card border border-slate-100 space-y-1">
                    {PRIMARY_SERVICES.map((srv) => (
                      <Link
                        key={srv.id}
                        href="/services"
                        className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
                        className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 hover:bg-primary hover:text-white text-xs font-bold text-slate-700 transition"
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
                  className="flex items-center gap-1 px-3.5 py-2 rounded-full text-slate-800 hover:text-primary transition-colors cursor-pointer"
                >
                  <span>Pages</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div
                  className={`absolute top-full left-0 w-64 pt-3 z-50 transition-all duration-200 ${
                    activeDropdown === "pages"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-card border border-slate-100 space-y-1">
                    <Link
                      href="/about-us"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      About Our Company
                    </Link>
                    <Link
                      href="/services"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      Fleet & ODC Services
                    </Link>
                    <Link
                      href="/#tracking-section"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      Shipment Tracking
                    </Link>
                    <Link
                      href="/quote"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      Request a Freight Quote
                    </Link>
                    <Link
                      href="/contact-us"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
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
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors ${
                    pathname.startsWith("/case-studies")
                      ? "text-primary font-bold"
                      : "text-slate-800 hover:text-primary"
                  }`}
                >
                  <span>Case Study</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>

                <div
                  className={`absolute top-full left-0 w-72 pt-3 z-50 transition-all duration-200 ${
                    activeDropdown === "casestudy"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-card border border-slate-100 space-y-1">
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      ODC Girder Transport (52m)
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      Pune Warehouse Staging
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      Multi-State Fleet Delivery
                    </Link>
                    <Link
                      href="/case-studies"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
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
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors ${
                    pathname.startsWith("/blog")
                      ? "text-primary font-bold"
                      : "text-slate-800 hover:text-primary"
                  }`}
                >
                  <span>Blog</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>

                <div
                  className={`absolute top-full left-0 w-72 pt-3 z-50 transition-all duration-200 ${
                    activeDropdown === "blog"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-3 shadow-card border border-slate-100 space-y-1">
                    <Link
                      href="/blog"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      Safer ODC Movements in India
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      How to Reduce Transport Delays
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                    >
                      Why Warehousing Belongs in Logistics
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/contact-us"
                className={`px-3.5 py-2 rounded-full transition-colors ${
                  pathname === "/contact-us"
                    ? "text-primary font-bold"
                    : "text-slate-800 hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Icons & Free Quote Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cart Icon Button */}
              <button
                onClick={() => setCartCount((prev) => (prev > 0 ? 0 : 1))}
                className="relative w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition"
                aria-label="View logistics cart"
                title="Service Inquiry Bag"
              >
                <ShoppingCart className="w-4 h-4 text-slate-700" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              </button>

              {/* Search Icon Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition"
                aria-label="Search site"
              >
                <Search className="w-4 h-4 text-slate-700" />
              </button>

              {/* Menu / Hamburger Icon Button (Offcanvas Trigger) */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition"
                aria-label="Open detailed menu"
              >
                <Menu className="w-4 h-4 text-slate-700" />
              </button>

              {/* Free Quote Button (Orange-Red Pill) */}
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm tracking-wide shadow-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Free Quote</span>
                <ArrowRight className="w-4 h-4" />
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
