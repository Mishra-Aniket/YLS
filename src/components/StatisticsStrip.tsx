"use client";

import React from "react";
import Image from "next/image";

// Exact TransHub stat section (.stat-sec): stat icons + purecounter text + label
const STAT_ITEMS = [
  {
    img: "/images/stat1.png",
    count: "120",
    unit: "K",
    label: "Successful Transportation",
  },
  {
    img: "/images/sta2.png",
    count: "500",
    unit: "+",
    label: "Expert Fleet & Team Network",
  },
  {
    img: "/images/stat3.png",
    count: "15",
    unit: "+",
    label: "Years of Operational Excellence",
  },
  {
    img: "/images/stat4.png",
    count: "22",
    unit: "K",
    label: "Satisfied Enterprise Clients",
  },
];

export default function StatisticsStrip() {
  return (
    <section className="stat-sec relative z-20 py-16 lg:py-24 bg-[#020e28] text-white overflow-hidden border-y border-white/10">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STAT_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center gap-5 p-4 sm:p-6 ${
                idx > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 p-3 shadow-inner">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="stat-info">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-none">
                  {item.count}{" "}
                  <span className="text-primary font-bold">{item.unit}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
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

