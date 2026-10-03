"use client";

import React from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/constants";

/**
 * Trusted-by band: premium dark treatment (no stock ship photo).
 * Each logo tile links to the company's Google profile and reveals
 * a "Google Profile" overlay on hover.
 */
export default function ClientsSection() {
  return (
    <section className="brands-sec relative py-20 overflow-hidden bg-[#020e28]">
      {/* Premium dark backdrop: soft brand-colored glows (no stock photo) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 12% 30%, rgba(253,85,35,0.10), transparent), radial-gradient(ellipse 50% 65% at 88% 70%, rgba(23,90,157,0.16), transparent)",
        }}
        aria-hidden="true"
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-heading font-bold text-primary uppercase tracking-[0.2em] mb-2">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Trusted by Reputed Indian Enterprises
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Hover any logo to open the company&rsquo;s Google profile.
          </p>
        </div>

        {/* Client tiles — hover reveals the Google profile action */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          {CLIENT_LOGOS.map((client) => {
            const profileUrl = `https://www.google.com/search?q=${encodeURIComponent(
              client.name + " India"
            )}`;
            return (
              <a
                key={client.name}
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-24 w-full items-center justify-center rounded-2xl bg-white px-5 shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(253,85,35,0.25)] overflow-hidden"
                title={`${client.name} — Google Profile`}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={170}
                  height={56}
                  className="max-h-14 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-75 group-hover:opacity-0"
                />

                {/* Hover overlay: company Google profile */}
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-[#020e28] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-heading font-bold text-white text-xs text-center px-2 leading-snug">
                    {client.name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-primary">
                    <i className="fa-brands fa-google text-[10px]" aria-hidden="true" />
                    Google Profile
                    <i className="fa fa-turn-up text-[9px]" aria-hidden="true" />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
