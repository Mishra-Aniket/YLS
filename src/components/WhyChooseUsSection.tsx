"use client";

import React from "react";
import Image from "next/image";
import TruckIcon from "./TruckIcon";
import { COMPANY, WHY_CHOOSE_US_POINTS } from "@/lib/constants";

export default function WhyChooseUsSection() {
  return (
    <section className="choose-sec bg-shade sec-padding position-relative overflow-hidden">
      {/* Decorative shape: choose-sh.png */}
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 anim-jumping">
        <Image
          src="/images/choose-sh.png"
          alt=""
          width={400}
          height={350}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Images matching TransHub .choose-media */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Primary Image: choose-img.png */}
              <div className="relative rounded-[30px] overflow-hidden shadow-card aspect-[4/5] w-10/12">
                <Image
                  src="/images/choose-img.png"
                  alt="Industrial Logistics"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Secondary Image: choose-img2.png */}
              <div className="absolute bottom-4 right-0 w-3/5 aspect-square rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/choose-img2.png"
                  alt="Cargo Fleet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content matching TransHub .choose-content */}
          <div className="space-y-6">
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

            {/* Checklist */}
            <ul className="check space-y-3 pt-2">
              {WHY_CHOOSE_US_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {/* Progress KPI Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-extrabold text-lg shrink-0">
                  95%
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-dark">On-Time Delivery</h4>
                  <p className="text-xs text-mute">Pan-India verified transit</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-14 h-14 rounded-full bg-brand-yellow/20 text-dark flex items-center justify-center font-heading font-extrabold text-lg shrink-0">
                  100%
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-dark">Safety Compliant</h4>
                  <p className="text-xs text-mute">Motor Vehicles Act protocol</p>
                </div>
              </div>
            </div>

            {/* Quick Call Box */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>Do you have any project on your mind?</span>
              <a
                href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                className="text-primary font-heading font-bold hover:underline inline-flex items-center gap-1.5"
              >
                <i className="fa-solid fa-phone text-xs"></i>
                <span>Call Us: {COMPANY.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
