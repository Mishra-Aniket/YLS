"use client";

import React from "react";
import { MapPin, Phone, User, Mail, ArrowUpRight, Building2 } from "lucide-react";
import { BRANCHES } from "@/lib/constants";

export default function BranchSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
                NATIONWIDE PRESENCE
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06112E] font-display">
              Our Branch Network Across India
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            Direct on-ground dispatch personnel stationed in key industrial and logistics transit corridors for immediate coordination.
          </p>
        </div>

        {/* 5 Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.city}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                branch.isHeadquarter
                  ? "bg-navy-dark text-white shadow-card border-2 border-primary/30"
                  : "bg-[#F5F7FA] text-slate-800 border border-slate-200/80 hover:bg-white hover:shadow-card"
              }`}
            >
              <div>
                {/* Top: City & State Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                      branch.isHeadquarter
                        ? "bg-primary text-white"
                        : "bg-white text-[#175A9D] border border-slate-200 shadow-sm"
                    }`}
                  >
                    {branch.stateCode} &bull; {branch.state}
                  </span>
                  {branch.isHeadquarter && (
                    <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">
                      HQ
                    </span>
                  )}
                </div>

                {/* City Heading */}
                <h3
                  className={`text-xl font-black font-display mb-3 ${
                    branch.isHeadquarter ? "text-white" : "text-[#06112E]"
                  }`}
                >
                  {branch.city}
                </h3>

                {/* Contact Person */}
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <User
                    className={`w-4 h-4 shrink-0 ${
                      branch.isHeadquarter ? "text-brand-yellow" : "text-primary"
                    }`}
                  />
                  <span
                    className={`font-bold ${
                      branch.isHeadquarter ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {branch.contactPerson}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-xs mb-5">
                  <MapPin
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      branch.isHeadquarter ? "text-slate-400" : "text-slate-400"
                    }`}
                  />
                  <p
                    className={`leading-relaxed line-clamp-3 ${
                      branch.isHeadquarter ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {branch.address}, Pin: {branch.pincode}
                  </p>
                </div>
              </div>

              {/* Bottom: Click to Call Link */}
              <div className="pt-4 border-t border-slate-200/20">
                <a
                  href={`tel:${branch.phoneRaw}`}
                  className={`w-full py-2.5 px-4 rounded-full text-xs font-bold flex items-center justify-between transition ${
                    branch.isHeadquarter
                      ? "bg-white/10 hover:bg-primary text-white"
                      : "bg-white hover:bg-primary text-slate-800 hover:text-white shadow-sm border border-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{branch.phone}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
