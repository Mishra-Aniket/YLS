"use client";

import React, { useEffect } from "react";
import { X, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import YLSLogo from "./YLSLogo";
import { COMPANY, BRANCHES } from "@/lib/constants";

interface OffcanvasDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffcanvasDrawer({ isOpen, onClose }: OffcanvasDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark overlay */}
      <div
        className="fixed inset-0 bg-[#06112E]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-10">
        <div className="w-screen max-w-md bg-navy-dark text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-l border-white/10 shadow-2xl">
          <div>
            {/* Top row with Logo and Close */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <YLSLogo variant="dark" size="sm" />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Company Summary */}
            <div className="mt-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ODC Consignment Specialist</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                YES LOGISTICS SERVICE is a Pune-registered fleet owner and transport contractor established in 2021, providing dependable truck, trailer, ODC, and warehouse solutions across India.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">
                Explore Navigation
              </h4>
              <nav className="flex flex-col space-y-3 text-sm font-semibold">
                <Link
                  href="/"
                  onClick={onClose}
                  className="hover:text-primary transition flex items-center justify-between py-1 border-b border-white/5"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
                <Link
                  href="/about-us"
                  onClick={onClose}
                  className="hover:text-primary transition flex items-center justify-between py-1 border-b border-white/5"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="hover:text-primary transition flex items-center justify-between py-1 border-b border-white/5"
                >
                  <span>Services</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
                <Link
                  href="/case-studies"
                  onClick={onClose}
                  className="hover:text-primary transition flex items-center justify-between py-1 border-b border-white/5"
                >
                  <span>Case Studies</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
                <Link
                  href="/blog"
                  onClick={onClose}
                  className="hover:text-primary transition flex items-center justify-between py-1 border-b border-white/5"
                >
                  <span>Blog & Logistics Insights</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
                <Link
                  href="/contact-us"
                  onClick={onClose}
                  className="hover:text-primary transition flex items-center justify-between py-1 border-b border-white/5"
                >
                  <span>Contact & Branches</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </nav>
            </div>

            {/* Branch Locations */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-3">
                All-India Branch Network
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {BRANCHES.map((b) => (
                  <a
                    key={b.city}
                    href={`tel:${b.phoneRaw}`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition block border border-white/5"
                  >
                    <span className="font-bold text-white block">{b.city} ({b.stateCode})</span>
                    <span className="text-slate-400 text-[11px] block">{b.contactPerson}</span>
                    <span className="text-primary font-semibold text-[11px] mt-0.5 block">{b.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Contact & CTA */}
          <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 7021277197 / 7020057149</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>ylspune@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>CTS 1937 S1 Nilratna Apt BLD 2F, Chinchwad, Pune 411033</span>
              </div>
            </div>

            <Link
              href="/quote"
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-pill bg-primary hover:bg-primary-hover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow transition"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
