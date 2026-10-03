"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import YLSLogo from "./YLSLogo";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, BRANCHES } from "@/lib/constants";

interface OffcanvasDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffcanvasDrawer({
  isOpen,
  onClose,
}: OffcanvasDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Always mounted so the open/close animation plays smoothly

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end ${
        isOpen ? "" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-dark/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer matching TransHub .canvas-menu — slides in/out smoothly */}
      <div
        className={`relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <YLSLogo variant="light" size="sm" />
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-dark flex items-center justify-center transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <div className="py-6 border-b border-slate-100">
            <p className="text-slate-600 text-sm leading-relaxed">
              YES LOGISTICS SERVICE is a Pune-registered fleet owner and transport contractor (estd. 2021). We deliver safe, dependable ODC and trailer freight across India.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="py-6 border-b border-slate-100">
            <h5 className="text-xs font-heading font-bold text-dark uppercase tracking-wider mb-4">
              Navigation Menu
            </h5>
            <ul className="space-y-3 font-heading font-semibold text-base text-dark">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors"
                >
                  Blog &amp; News
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details with both numbers and WhatsApp / Call buttons */}
          <div className="py-6 space-y-4 text-xs text-slate-600">
            <div className="space-y-2">
              <span className="text-[11px] font-heading font-bold text-slate-400 uppercase tracking-wider block">
                24/7 Dispatch Desk (Call / WhatsApp)
              </span>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-heading font-bold text-dark text-xs sm:text-sm">+91 70200 57149</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://wa.me/917020057149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition"
                    title="Chat on WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp text-xs"></i>
                  </a>
                  <a
                    href="tel:+917020057149"
                    className="p-1.5 rounded-lg bg-dark hover:bg-primary text-white transition"
                    title="Call Now"
                  >
                    <Phone className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-heading font-bold text-dark text-xs sm:text-sm">+91 70212 77197</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://wa.me/917021277197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition"
                    title="Chat on WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp text-xs"></i>
                  </a>
                  <a
                    href="tel:+917021277197"
                    className="p-1.5 rounded-lg bg-dark hover:bg-primary text-white transition"
                    title="Call Now"
                  >
                    <Phone className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary font-medium text-dark">
                {COMPANY.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{COMPANY.registeredOffice.full}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-6 border-t border-slate-100">
          <Link
            href="/quote"
            onClick={onClose}
            className="btn-primary w-full justify-center py-3.5 text-sm"
          >
            <span>Get a Free Quote</span>
            <i className="fa fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
