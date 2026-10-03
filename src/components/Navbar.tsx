"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ShoppingCart,
  Search,
  ArrowRight,
  Menu,
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
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Logo block (constant size — no squish) ---------- */
  const logoBlock = (
    <div className="flex items-center shrink-0">
      <span className="inline-flex scale-[0.78] origin-left sm:scale-100 transition-transform">
        <YLSLogo variant="light" size="lg" />
      </span>
    </div>
  );

  /* ---------- Center menu (shared by both states) ---------- */
  const menu = (
    <ul className="hidden xl:flex items-center gap-8 font-heading font-medium text-[16px] text-dark">
      {/* Home */}
      <li
        className="relative group py-2"
        onMouseEnter={() => setActiveDropdown("home")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          href="/"
          className={`inline-flex items-center gap-1.5 transition-colors ${
            pathname === "/" ? "text-primary font-bold" : "text-dark hover:text-primary"
          }`}
        >
          <span>Home</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" />
        </Link>

        <div
          className={`absolute top-full left-0 w-52 pt-3 z-50 transition-all duration-200 ${
            activeDropdown === "home"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 space-y-1">
            <Link
              href="/"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-primary font-bold text-sm"
            >
              Home 1 (TransHub Clone)
            </Link>
            <Link
              href="/#services-section"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Fleet &amp; Heavy Haulage
            </Link>
            <Link
              href="/#process-section"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Working Workflow
            </Link>
          </div>
        </div>
      </li>

      {/* Services */}
      <li
        className="relative group py-2"
        onMouseEnter={() => setActiveDropdown("services")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          href="/services"
          className={`inline-flex items-center gap-1.5 transition-colors ${
            pathname.startsWith("/services")
              ? "text-primary font-bold"
              : "text-dark hover:text-primary"
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
                className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
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
                <span>View All 15+ Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </li>

      {/* Pages */}
      <li
        className="relative group py-2"
        onMouseEnter={() => setActiveDropdown("pages")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-dark hover:text-primary transition-colors cursor-pointer"
        >
          <span>Pages</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" />
        </button>

        <div
          className={`absolute top-full left-0 w-64 pt-3 z-50 transition-all duration-200 ${
            activeDropdown === "pages"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 space-y-1">
            <Link
              href="/about-us"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              About Our Company
            </Link>
            <Link
              href="/services"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              All Logistics Services
            </Link>
            <Link
              href="/#tracking-section"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Track Consignment
            </Link>
            <Link
              href="/quote"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Request Freight Quote
            </Link>
            <Link
              href="/contact-us"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Branch Network (5 Hubs)
            </Link>
          </div>
        </div>
      </li>

      {/* Case Study */}
      <li
        className="relative group py-2"
        onMouseEnter={() => setActiveDropdown("casestudy")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          href="/case-studies"
          className={`inline-flex items-center gap-1.5 transition-colors ${
            pathname.startsWith("/case-studies")
              ? "text-primary font-bold"
              : "text-dark hover:text-primary"
          }`}
        >
          <span>Case Study</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" />
        </Link>

        <div
          className={`absolute top-full left-0 w-72 pt-3 z-50 transition-all duration-200 ${
            activeDropdown === "casestudy"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 space-y-1">
            <Link
              href="/case-studies"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              ODC Girder Transport (52m)
            </Link>
            <Link
              href="/case-studies"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Pune Warehouse Staging
            </Link>
            <Link
              href="/case-studies"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Multi-State Fleet Network
            </Link>
            <Link
              href="/case-studies"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              50-Ton Crane Handover
            </Link>
          </div>
        </div>
      </li>

      {/* Blog */}
      <li
        className="relative group py-2"
        onMouseEnter={() => setActiveDropdown("blog")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          href="/blog"
          className={`inline-flex items-center gap-1.5 transition-colors ${
            pathname.startsWith("/blog") ? "text-primary font-bold" : "text-dark hover:text-primary"
          }`}
        >
          <span>Blog</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" />
        </Link>

        <div
          className={`absolute top-full left-0 w-72 pt-3 z-50 transition-all duration-200 ${
            activeDropdown === "blog"
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 space-y-1">
            <Link
              href="/blog"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Safer ODC Movements in India
            </Link>
            <Link
              href="/blog"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              How to Reduce Transport Delays
            </Link>
            <Link
              href="/blog"
              className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium"
            >
              Why Warehousing Belongs in Logistics
            </Link>
          </div>
        </div>
      </li>

      {/* Gallery */}
      <li>
        <Link
          href="/gallery"
          className={`py-2 transition-colors ${
            pathname.startsWith("/gallery")
              ? "text-primary font-bold"
              : "text-dark hover:text-primary"
          }`}
        >
          Gallery
        </Link>
      </li>

      {/* Contact */}
      <li>
        <Link
          href="/contact-us"
          className={`py-2 transition-colors ${
            pathname === "/contact-us" ? "text-primary font-bold" : "text-dark hover:text-primary"
          }`}
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  /* ---------- Right actions (shared by both states) ---------- */
  const actions = (
    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
      {/* Cart Icon Circle */}
      <button
        onClick={() => setCartCount((prev) => (prev > 0 ? 0 : 1))}
        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f5f5f7] hover:bg-slate-200 text-dark flex items-center justify-center transition"
        aria-label="View Inquiry Cart"
        title="Consignment Inquiry Cart"
      >
        <ShoppingCart className="w-[18px] h-[18px] text-dark" />
        <sup className="absolute top-0.5 right-0.5 w-[18px] h-[18px] rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center leading-none">
          {cartCount}
        </sup>
      </button>

      {/* Search Icon Circle */}
      <button
        onClick={() => setIsSearchOpen(true)}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f5f5f7] hover:bg-slate-200 text-dark flex items-center justify-center transition"
        aria-label="Search website"
      >
        <Search className="w-[18px] h-[18px] text-dark" />
      </button>

      {/* Burger Menu Circle (desktop — TransHub style) */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f5f5f7] hover:bg-slate-200 text-dark flex items-center justify-center transition"
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

      {/* Free Quote Button (desktop/tablet — mobile uses drawer + hero CTA) */}
      <Link href="/quote" className="btn-primary py-3.5 px-7 hidden sm:inline-flex">
        <span>Free Quote</span>
        <i className="fa fa-turn-up text-xs" aria-hidden="true"></i>
      </Link>

      {/* Mobile Menu Toggler (mobile + tablet) */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-100 text-dark text-xs font-bold hover:bg-primary hover:text-white transition"
        aria-label="Toggle Navigation"
      >
        <Menu className="w-4 h-4" />
        <span className="hidden sm:inline">Menu</span>
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
        {/* Full-width white bar — constant height, only the shadow fades on scroll */}
        <div
          className={`w-full bg-white transition-shadow duration-300 ease-out ${
            isScrolled || variant === "solid"
              ? "shadow-[0_12px_30px_rgba(2,14,40,0.10)]"
              : "shadow-[0_12px_30px_rgba(2,14,40,0)]"
          }`}
        >
          <div className="max-w-[1365px] mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-between h-[84px]">
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
