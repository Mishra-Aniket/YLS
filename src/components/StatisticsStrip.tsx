"use client";

import React from "react";
import Image from "next/image";

const STAT_ITEMS = [
  {
    icon: "/images/stat1.png",
    value: "05",
    suffix: "",
    title: "Branch Locations",
    subtitle: "Pune, BLR, Vadodara, Jeypore, Prayagraj",
  },
  {
    icon: "/images/sta2.png",
    value: "24/7",
    suffix: "",
    title: "Response Support",
    subtitle: "Dedicated Transport Coordinators",
  },
  {
    icon: "/images/stat3.png",
    value: "100%",
    suffix: "",
    title: "Safety Focus",
    subtitle: "Under Motor Vehicles Act",
  },
  {
    icon: "/images/stat4.png",
    value: "2021",
    suffix: "",
    title: "Established in Pune",
    subtitle: "All India Fleet Operations",
  },
];

export default function StatisticsStrip() {
  return (
    <section
      className="relative z-20 py-16 lg:py-20 bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/stat-bg.jpg')",
        backgroundColor: "#020e28",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020e28]/90" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STAT_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="flex items-center gap-4 sm:gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/20 flex items-center justify-center p-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-none mb-1">
                  {item.value}
                  {item.suffix && <span className="text-primary">{item.suffix}</span>}
                </h3>
                <p className="text-sm font-heading font-semibold text-slate-200">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
