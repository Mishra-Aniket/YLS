"use client";

import React from "react";
import { MapPin, Clock, ShieldCheck, Globe2 } from "lucide-react";
import { STATS } from "@/lib/constants";

const STAT_ICONS = [MapPin, Clock, ShieldCheck, Globe2];

export default function StatisticsStrip() {
  return (
    <section className="relative z-30 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? "pt-5 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-50 to-slate-100 border border-slate-100 flex items-center justify-center text-primary shrink-0 shadow-sm transition-transform hover:scale-105">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#06112E] font-display tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                      {stat.highlight}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 leading-snug">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
