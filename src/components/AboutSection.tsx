"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function AboutSection() {
  const checklist = [
    "Fleet Owner & Transport Contractor",
    "ODC Consignment Specialist",
    "Experienced Field Staff",
    "All India Operations",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle shape decorative background */}
      <div className="absolute left-0 top-1/4 pointer-events-none opacity-20">
        <Image
          src="/images/about-sh.png"
          alt="Abstract shape"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Overlapping Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image: Fleet ODC Trailer */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/3] w-11/12">
                <Image
                  src="/images/about-1.png"
                  alt="YES Logistics Service Fleet"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                    Pune Established
                  </span>
                  <p className="font-bold text-sm">Industrial Fleet & Heavy Transport</p>
                </div>
              </div>

              {/* Secondary Overlapping Image: Logistics Yard */}
              <div className="absolute -bottom-10 right-0 w-3/5 aspect-[4/3] rounded-3xl overflow-hidden shadow-card border-4 border-white z-10 hidden sm:block">
                <Image
                  src="/images/about-2.png"
                  alt="YES Logistics Yard and Loading"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Yellow YLS Badge */}
              <div className="absolute -top-6 -right-2 sm:right-6 z-20 w-28 h-28 rounded-full bg-gradient-to-tr from-brand-yellow to-[#ffdc60] p-3 text-[#06112E] shadow-card border-4 border-white flex flex-col items-center justify-center text-center transform rotate-6 hover:rotate-0 transition-transform">
                <Award className="w-6 h-6 text-primary mb-1" />
                <span className="text-xl font-black font-display leading-none">
                  2021
                </span>
                <span className="text-[9px] font-black uppercase tracking-tight leading-tight mt-0.5">
                  ESTABLISHED IN PUNE
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
                WHO WE ARE
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06112E] font-display leading-[1.15]">
              The Advantages of Our Logistics Service
            </h2>

            {/* Copy */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              YES LOGISTICS SERVICE is a Pune-registered fleet owner and transport contractor established in 2021. We provide dependable fleet, trailer, ODC, warehouse and loading support across India.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-[#06112E]">{item}</span>
                </div>
              ))}
            </div>

            {/* Footer with Button and Quick Call Box */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100">
              {/* Button: About Our Company */}
              <Link
                href="/about-us"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base shadow-glow transition-all duration-200 hover:scale-105 active:scale-95 group"
              >
                <span>About Our Company</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Call Box */}
              <div className="flex items-center gap-3.5">
                <a
                  href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                  className="w-12 h-12 rounded-full bg-navy-dark hover:bg-primary text-brand-yellow hover:text-white flex items-center justify-center transition shadow-sm"
                  aria-label="Call YLS HQ"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Call Us Any Time:</p>
                  <a
                    href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                    className="text-base sm:text-lg font-black text-primary hover:underline font-display"
                  >
                    {COMPANY.primaryPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
