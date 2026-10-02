"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import YLSLogo from "./YLSLogo";
import { COMPANY, BRANCHES, PRIMARY_SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="footer relative pt-24 pb-12 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
        backgroundColor: "#020e28",
      }}
    >
      {/* TransHub Parallax Overlay (.parallax-overly) */}
      <div className="absolute inset-0 bg-[#020e28]/95" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row matching TransHub footer-top */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 mb-12 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <YLSLogo variant="dark" size="lg" />
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <i className="fa-solid fa-phone"></i>
              </span>
              <div>
                <p className="text-[11px] text-mute uppercase font-bold">24/7 Pune HQ Hotline</p>
                <a
                  href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                  className="font-heading font-bold text-white hover:text-primary transition"
                >
                  {COMPANY.primaryPhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <div>
                <p className="text-[11px] text-mute uppercase font-bold">Dispatch Inquiries</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="font-heading font-bold text-white hover:text-primary transition"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Widget Columns matching TransHub .footer-widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: About & Compliance (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-primary font-heading font-bold text-sm uppercase tracking-wider">
              {COMPANY.tagline}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              YES LOGISTICS SERVICE is a premier fleet owner and transport contractor established in 2021. Specialist in ODC heavy haulage, trailers, warehousing, and nationwide cargo across India.
            </p>

            {/* Compliance Badge / Registration Information with MASKED PAN */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
              <p className="font-bold text-white uppercase tracking-wider text-[11px]">
                Statutory Registrations:
              </p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
                <span>PAN: <strong className="text-primary">{COMPANY.registration.pan}</strong></span>
                <span>GST: <strong className="text-slate-200">{COMPANY.registration.gst}</strong></span>
                <span className="col-span-2">UDYAM: <span className="text-slate-300">{COMPANY.registration.udyam}</span></span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-lg font-heading font-bold text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Logistics Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-heading font-bold text-white">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              {PRIMARY_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Port &amp; Export Freight
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Crane &amp; Loading Escort
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Branches (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-heading font-bold text-white">Pune Registered Office</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {COMPANY.registeredOffice.full}
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                All India Branches:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {BRANCHES.map((b) => (
                  <Link
                    key={b.city}
                    href="/contact-us"
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-primary text-slate-200 hover:text-white transition"
                  >
                    {b.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching TransHub .footer-bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 <strong className="text-white font-semibold">YES LOGISTICS SERVICE</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
              <i className="fa-brands fa-facebook-f text-xs"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
              <i className="fa-brands fa-x-twitter text-xs"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
              <i className="fa-brands fa-linkedin-in text-xs"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
              <i className="fa-brands fa-instagram text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
