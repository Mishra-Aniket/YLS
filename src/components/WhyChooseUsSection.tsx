"use client";

import React from "react";
import Image from "next/image";
import TruckIcon from "./TruckIcon";
import { COMPANY } from "@/lib/constants";

// TransHub-style progress bar with % chip at the fill end
function ProgressBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div>
      <div className="relative h-1.5 rounded-full bg-primary/15">
        <div
          className="absolute left-0 top-0 h-1.5 rounded-full bg-primary"
          style={{ width: `${percent}%` }}
        />
        <span
          className="absolute -top-3.5 px-1.5 py-0.5 rounded-md bg-primary text-white text-[11px] font-heading font-bold leading-none -translate-x-1/2"
          style={{ left: `${percent}%` }}
        >
          {percent}%
        </span>
      </div>
      <h4 className="mt-3 text-base font-heading font-bold text-dark">{label}</h4>
    </div>
  );
}

// TransHub-style circular progress ring
function ProgressRing({ percent, label }: { percent: number; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="relative w-16 h-16 rounded-full shrink-0"
        style={{
          background: `conic-gradient(var(--primary) ${percent}%, rgba(253,85,35,0.15) 0)`,
        }}
      >
        <div className="absolute inset-[5px] rounded-full bg-shade flex items-center justify-center">
          <span className="text-sm font-heading font-bold text-dark">{percent}%</span>
        </div>
      </div>
      <h4 className="text-base sm:text-lg font-heading font-bold text-dark leading-snug max-w-[180px]">
        {label}
      </h4>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="choose-sec bg-shade sec-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real fleet photos in overlapping layout */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Primary Image: real ODC trailer on route */}
              <div className="relative rounded-[30px] overflow-hidden shadow-card aspect-[4/5] w-10/12">
                <Image
                  src="/images/yls/yls-odc-trailer.jpg"
                  alt="YES Logistics ODC trailer consignment on route"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Secondary Image: real loading crew */}
              <div className="absolute bottom-4 right-0 w-3/5 aspect-square rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/yls/yls-heavy-loading.jpg"
                  alt="YES Logistics field crew loading cargo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content matching TransHub .choose-content */}
          <div className="space-y-8">
            <span className="sub-title">
              <TruckIcon />
              WHY CHOOSE US
            </span>

            <h2 className="sec-title">
              Why We Are Considered the Best in Logistics
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              YES LOGISTICS SERVICE combines specialized fleet ownership, extensive interstate route expertise, and disciplined field supervision to guarantee total integrity for heavy, containerized, and ODC consignments.
            </p>

            {/* Progress bars matching TransHub skill bars */}
            <div className="space-y-9 pt-2">
              <ProgressBar label="On-Time Delivery Rate" percent={95} />
              <ProgressBar label="Safety & Compliance Rate" percent={100} />
            </div>

            {/* Circular rings matching TransHub counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <ProgressRing percent={100} label="Verified Pan-India Fleet Network" />
              <ProgressRing percent={95} label="ODC Handling Expertise" />
            </div>

            {/* Quick Call Box */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-base text-dark font-heading font-semibold">
              <span>Do you have any project on your mind? Call Us:</span>
              <a
                href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                className="text-primary font-heading font-bold hover:underline"
              >
                {COMPANY.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
