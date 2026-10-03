"use client";

import React, { useState } from "react";
import YLSLogo from "./YLSLogo";
import { COMPANY, BRANCHES, PRIMARY_SERVICES } from "@/lib/constants";
import { getAssetPath } from "@/lib/imageLoader";

// Two-tone heading underline accent matching TransHub widget titles
function HeadingAccent() {
  return (
    <span className="flex items-center gap-1.5 mt-2.5" aria-hidden="true">
      <span className="w-5 h-[3px] rounded-full bg-white" />
      <span className="w-14 h-[3px] rounded-full bg-primary" />
    </span>
  );
}

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <div
      className="relative bg-[#020e28] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('${getAssetPath("/images/footer-bg.jpg")}')`,
        backgroundColor: "#020e28",
      }}
    >
      <div className="absolute inset-0 bg-[#020e28]/95" aria-hidden="true" />

      {/* Newsletter band matching TransHub subscribe strip */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pb-40">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">
              Subscribe to
              <br />
              <span className="text-slate-400">Our Newsletter</span>
            </h2>

            <div className="w-full max-w-xl">
              {subscribed ? (
                <p className="text-lg font-heading font-semibold text-white bg-white/10 border border-white/20 rounded-full px-8 py-5 text-center">
                  <i className="fa-solid fa-circle-check text-primary mr-2" aria-hidden="true"></i>
                  Subscribed! Freight updates will land in your inbox.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full rounded-full bg-white/10 border border-white/20 px-7 py-5 pr-44 text-white placeholder-white/50 font-medium outline-none focus:border-primary transition"
                  />
                  <button
                    type="submit"
                    className="btn-primary absolute right-2 top-1/2 -translate-y-1/2 py-3.5 px-7"
                  >
                    <span>Subscribe</span>
                    <i className="fa fa-paper-plane text-sm" aria-hidden="true"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rounded footer card matching TransHub footer wrapper */}
      <footer className="relative -mt-16 mx-3 sm:mx-5 rounded-[2.5rem] overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('${getAssetPath("/images/footer-bg.jpg")}')`,
          backgroundColor: "#020e28",
        }}
      >
        <div className="absolute inset-0 bg-[#020e28]/95" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-20 pb-8">
          {/* 4 Widget Columns matching TransHub .footer-widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
            {/* Col 1: Logo, Description & Socials (TransHub first column) */}
            <div className="lg:col-span-4 space-y-6">
              <YLSLogo variant="dark" size="xl" />
              <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                YES LOGISTICS SERVICE is a premier fleet owner and transport contractor established in 2021. Specialist in ODC heavy haulage, trailers, warehousing, and nationwide cargo across India.
              </p>

              <div className="flex items-center gap-4">
                <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
                  <i className="fa-brands fa-facebook-f text-sm"></i>
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
                  <i className="fa-brands fa-x-twitter text-sm"></i>
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition">
                  <i className="fa-brands fa-instagram text-sm"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-lg font-heading font-bold text-white">
                Quick Links
                <HeadingAccent />
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Logistics Services
                  </a>
                </li>
                <li>
                  <a href="/case-studies" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-primary transition-colors">
                    Blog &amp; Insights
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-primary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-heading font-bold text-white">
                Our Services
                <HeadingAccent />
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
                {PRIMARY_SERVICES.map((s) => (
                  <li key={s.id}>
                    <a href={`/services#${s.id}`} className="hover:text-primary transition-colors">
                      {s.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Port &amp; Export Freight
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-primary transition-colors">
                    Crane &amp; Loading Escort
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Opening Hours (TransHub column) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-heading font-bold text-white">
                Our Opening Hours
                <HeadingAccent />
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300 font-medium pt-1">
                <li className="flex items-center justify-between gap-4">
                  <span>Week Days</span>
                  <span>09.00 &ndash; 19.00</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Saturday</span>
                  <span>09.00 &ndash; 14.00</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Sunday</span>
                  <span>On Call</span>
                </li>
              </ul>

              <a
                href="/contact-us"
                className="inline-flex items-center px-8 py-3.5 mt-4 rounded-full bg-white text-dark font-heading font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar below the card on the dark band, matching TransHub */}
      <div className="relative z-10 px-6 sm:px-12 pt-7 pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
        <p>
          &copy; 2026 <strong className="text-white font-semibold">YES LOGISTICS SERVICE</strong>. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="w-px h-4 bg-white/20" aria-hidden="true" />
          <a href="#" className="hover:text-white transition-colors">
            Terms &amp; Condition
          </a>
        </div>
      </div>
    </div>
  );
}
