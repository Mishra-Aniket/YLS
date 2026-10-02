"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import YLSLogo from "./YLSLogo";
import { COMPANY, PRIMARY_SERVICES, BRANCHES } from "@/lib/constants";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden pt-16 sm:pt-20 border-t border-white/10">
      {/* Background overlay graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/images/footer-bg.jpg"
          alt="Footer background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter / Quick Consultation Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-card to-[#0e244d] border border-white/10 shadow-2xl mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest">
              DISPATCH BULLETINS &amp; ROUTE UPDATES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Subscribe to Our Logistics Newsletter
            </h3>
            <p className="text-slate-300 text-sm max-w-lg">
              Get technical updates on Indian freight corridors, monsoon transit alerts, and ODC route clearances.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 p-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you! You are subscribed to YLS dispatch news.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your corporate email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full pl-5 pr-36 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white/15 transition"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold tracking-wide shadow-glow transition flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <YLSLogo variant="dark" size="md" />

            <p className="text-slate-300 text-sm leading-relaxed">
              YES LOGISTICS SERVICE is an established fleet owner and transport contractor registered in Pune in 2021. We specialize in Over Dimensional Cargo (ODC), mechanical trailers, and industrial carting across all Indian states.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 font-mono">
              <p>PAN: {COMPANY.registration.pan}</p>
              <p>GSTIN: {COMPANY.registration.gst}</p>
              <p>UDYAM: {COMPANY.registration.udyam}</p>
            </div>

            {/* Social Media Placeholders */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-2.5">
                {["LinkedIn", "Facebook", "X", "YouTube"].map((platform) => (
                  <span
                    key={platform}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center text-xs font-bold transition cursor-pointer"
                    title={`Follow on ${platform}`}
                  >
                    {platform[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition">
                  Blog &amp; News
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-primary transition">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow font-display">
              Logistics Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              {PRIMARY_SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link href={`/services#${srv.id}`} className="hover:text-primary transition">
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Mechanical Trailer Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Export &amp; Port Carting
                </Link>
              </li>
              <li>
                <Link href="/#tracking-section" className="text-brand-yellow font-bold hover:underline">
                  Live Consignment Tracking &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow font-display">
              Registered Office
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <p className="leading-relaxed">
                  {COMPANY.registeredOffice.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-brand-yellow font-bold text-white transition"
                >
                  {COMPANY.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${COMPANY.additionalPhone.replace(/\s+/g, "")}`}
                  className="hover:text-brand-yellow text-slate-300 transition"
                >
                  {COMPANY.additionalPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-brand-yellow text-slate-300 transition"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-brand-yellow font-bold block mb-0.5">
                    Branch Desks Active in 5 States:
                  </span>
                  <span className="text-slate-400">
                    Pune (MH), Bangalore (KA), Vadodara (GJ), Jeypore (OD), Prayagraj (UP)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="order-2 sm:order-1 text-center sm:text-left">
            &copy; 2026 YES LOGISTICS SERVICE. All rights reserved.
          </p>

          <div className="flex items-center gap-6 order-1 sm:order-2 font-medium">
            <Link href="/about-us" className="hover:text-white transition">
              About YLS
            </Link>
            <Link href="/contact-us" className="hover:text-white transition">
              Branch Directory
            </Link>
            <Link href="/quote" className="text-brand-yellow font-bold hover:underline">
              Free Freight Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
