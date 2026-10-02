"use client";

import React from "react";
import Image from "next/image";
import { CLIENTS } from "@/lib/constants";

const BRAND_LOGOS = [
  "/images/br1.png",
  "/images/br2.png",
  "/images/br3.png",
  "/images/br4.png",
  "/images/br5.png",
  "/images/br6.png",
];

export default function ClientsSection() {
  return (
    <section
      className="brands-sec relative py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/brand-bg.jpg')",
        backgroundColor: "#020e28",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020e28]/85" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-heading font-bold text-primary uppercase tracking-[0.2em] mb-2">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Trusted by Reputed Indian Enterprises
          </h2>
        </div>

        {/* Brand Logos Strip matching TransHub .brands-sec */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {BRAND_LOGOS.map((logo, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 w-full flex items-center justify-center h-24 hover:scale-105"
            >
              <Image
                src={logo}
                alt="Client Brand"
                width={120}
                height={50}
                className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Corporate Client Marquee List from YLS profile */}
        <div className="mt-12 pt-8 border-t border-white/10 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-300 font-medium">
            {CLIENTS.slice(0, 8).map((client) => (
              <span key={client.name} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-white font-semibold">{client.name}</span>
                <span className="text-slate-400">({client.location})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
