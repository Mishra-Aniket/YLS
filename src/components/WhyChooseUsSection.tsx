"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY, WHY_CHOOSE_US_POINTS } from "@/lib/constants";

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-dark text-white relative overflow-hidden">
      {/* Background shape accent */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-15">
        <Image
          src="/images/choose-sh.png"
          alt="Choose shape"
          width={450}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
                WHY CHOOSE US
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display leading-[1.15]">
              Why We Are Considered the Best in Logistics
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              YES LOGISTICS SERVICE combines specialized fleet ownership, extensive interstate route expertise, and disciplined field supervision to guarantee total integrity for heavy, containerized, and ODC consignments.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {WHY_CHOOSE_US_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-100">{point}</span>
                </div>
              ))}
            </div>

            {/* Circular Progress & KPI Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              {/* Metric 1 */}
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-primary"
                      strokeDasharray="95, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-sm font-black text-white">95%</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">On-Time Delivery Rate</h4>
                  <p className="text-xs text-slate-400">All India verified transit record</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-brand-yellow"
                      strokeDasharray="98, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-sm font-black text-white">98%</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Safety Compliance</h4>
                  <p className="text-xs text-slate-400">Motor Vehicles Act & pilot protocol</p>
                </div>
              </div>
            </div>

            {/* Quick Call Box */}
            <div className="pt-2 flex items-center gap-3 text-sm">
              <span className="text-slate-400">Do you have any project on your mind?</span>
              <a
                href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                className="text-primary hover:text-brand-yellow font-bold underline flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: {COMPANY.primaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Right: Large Cargo or Container Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Cargo Container Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5]">
                <Image
                  src="/images/choose-img.png"
                  alt="Industrial Cargo and Container Logistics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80" />
                
                {/* Floating Overlay Badge on Cargo */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">ODC Heavy Consignments</p>
                      <p className="text-xs text-brand-yellow font-medium">Hydraulic Axle &amp; Puller Fleet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
