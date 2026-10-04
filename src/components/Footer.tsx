'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import YLSLogo from './YLSLogo';
import { GstLogoMark, MsmeLogoMark } from './TrustBadges';
import { COMPANY, PRIMARY_SERVICES } from '@/lib/constants';
import { getAssetPath } from '@/lib/imageLoader';

function HeadingAccent() {
  return (
    <span className="flex items-center gap-1.5 mt-2.5" aria-hidden="true">
      <span className="w-5 h-[3px] rounded-full bg-white" />
      <span className="w-14 h-[3px] rounded-full bg-primary" />
    </span>
  );
}

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <div
      className="relative bg-[#020e28] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('${getAssetPath('/images/footer-bg.jpg')}')`,
        backgroundColor: '#020e28',
      }}
    >
      <div className="absolute inset-0 bg-[#020e28]/95" aria-hidden="true" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pb-40">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold leading-tight uppercase tracking-wide">
              Subscribe to
              <br />
              <span className="text-slate-400">Our Newsletter</span>
            </h2>

            <div className="w-full max-w-xl">
              {subscribed ? (
                <p className="text-lg font-heading font-semibold text-white bg-white/10 border border-white/20 rounded-full px-8 py-5 text-center">
                  <i className="fa-solid fa-circle-check text-primary mr-2" aria-hidden="true" />
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
                    className="w-full rounded-full bg-white/10 border border-white/20 px-7 py-5 pr-44 text-white placeholder-white/50 font-medium outline-none focus:border-primary transition text-base"
                  />
                  <button
                    type="submit"
                    className="btn-primary absolute right-2 top-1/2 -translate-y-1/2 py-3.5 px-7"
                  >
                    <span>Subscribe</span>
                    <i className="fa fa-paper-plane text-sm" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer
        className="relative -mt-16 mx-3 sm:mx-5 rounded-[2.5rem] overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('${getAssetPath('/images/footer-bg.jpg')}')`,
          backgroundColor: '#020e28',
        }}
      >
        <div className="absolute inset-0 bg-[#020e28]/95" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-20 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
            {/* Col 1: Logo & Description */}
            <div className="lg:col-span-4 space-y-6">
              <YLSLogo variant="dark" size="xl" />
              <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                YES LOGISTICS SERVICE is a premier fleet owner and transport
                contractor established in 2021. Providing Pickups, Taurus trucks,
                open/closed containers, heavy trailers, and warehousing across India.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wide">
                Quick Links
                <HeadingAccent />
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Logistics Services</Link></li>
                <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog &amp; Insights</Link></li>
                <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wide">
                Our Services
                <HeadingAccent />
              </h4>
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

            {/* Col 4: Contact & Hours */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-lg font-heading font-bold text-white uppercase tracking-wide">
                Contact &amp; Hours
                <HeadingAccent />
              </h4>
              <ul className="space-y-2 text-sm text-slate-300 font-medium pt-1">
                <li className="flex items-center justify-between gap-4 text-xs">
                  <span>Mon &ndash; Sat</span>
                  <span className="text-white font-semibold">09:00 &ndash; 19:30</span>
                </li>
                <li className="flex items-center justify-between gap-4 text-xs">
                  <span>Sunday</span>
                  <span className="text-emerald-400 font-semibold">24/7 On-Call Dispatch</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                <p className="text-slate-400 font-medium">Dispatch Hotlines (Call &amp; WhatsApp):</p>
                <div className="flex flex-col gap-1.5 font-heading font-bold text-sm">
                  <a
                    href="tel:+917020057149"
                    className="text-primary hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <i className="fa-solid fa-phone text-xs" />
                    <span>+91 70200 57149</span>
                  </a>
                  <a
                    href="tel:+917021277197"
                    className="text-primary hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <i className="fa-solid fa-phone text-xs" />
                    <span>+91 70212 77197</span>
                  </a>
                </div>
                <p className="text-slate-400 text-[11px] leading-tight pt-1">
                  HQ: CTS 1937 S1 Nilratna Apt BLD 2F, Pune 411033
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-dark font-heading font-semibold text-xs hover:bg-primary hover:text-white transition-colors"
                >
                  Visit Contact Page &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Statutory Registrations & Legal Verification Logo Marks */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <GstLogoMark className="h-9 sm:h-11 w-auto" />
              <MsmeLogoMark className="h-9 sm:h-11 w-auto" />
            </div>

            <p className="text-[11px] text-slate-400 font-medium">
              Registered Office: CTS 1937 S1 Nilratna Apt BLD 2F, Pune 411033
            </p>
          </div>
        </div>
      </footer>

      <div className="relative z-10 px-6 sm:px-12 pt-7 pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <strong className="text-white font-semibold">YES LOGISTICS SERVICE</strong>.
          All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="w-px h-4 bg-white/20" aria-hidden="true" />
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
