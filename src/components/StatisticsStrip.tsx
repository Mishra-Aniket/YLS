"use client";

import React from "react";

// TransHub-style dark counter band: orange line icons + big numbers, divider separated
const STAT_ITEMS = [
  { icon: "fa-solid fa-plane-departure", value: "05", label: "Branch Locations" },
  { icon: "fa-solid fa-users", value: "24/7", label: "Response Support" },
  { icon: "fa-solid fa-warehouse", value: "25,000+", label: "Sq Ft Warehousing" },
  { icon: "fa-solid fa-truck-fast", value: "15+", label: "Logistics Services" },
];

export default function StatisticsStrip() {
  return (
    <section
      className="relative z-20 py-16 lg:py-20 bg-[#020e28] text-white overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 90% at 15% 50%, rgba(253,85,35,0.06), transparent), radial-gradient(ellipse 50% 80% at 85% 50%, rgba(23,90,157,0.12), transparent)",
      }}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STAT_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-5 px-6 py-7 ${
                idx > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <i
                className={`${item.icon} text-primary text-4xl lg:text-5xl`}
                aria-hidden="true"
              />
              <div>
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-none">
                  {item.value}
                </h3>
                <p className="text-sm text-slate-400 font-medium mt-2">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
