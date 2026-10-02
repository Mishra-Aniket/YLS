"use client";

import React from "react";
import Image from "next/image";
import { Building2, ShieldCheck } from "lucide-react";
import { CLIENTS } from "@/lib/constants";

export default function ClientsSection() {
  return (
    <section className="py-16 bg-navy-dark text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/brand-bg.jpg"
          alt="Brand background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <p className="text-brand-yellow font-bold text-xs uppercase tracking-[0.2em]">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
            Our Prestigious Corporate Clients
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Providing heavy transport, trailer, and ODC solutions to prominent engineering, manufacturing, and defense contractors across India.
          </p>
        </div>

        {/* Client Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-yellow/30 transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-wider block mb-1">
                  {client.sector}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {client.name}
                </h4>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 font-medium">
                {client.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
