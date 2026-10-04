"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import QuickContactModal from "./QuickContactModal";
import { GstLogoMark, MsmeLogoMark } from "./TrustBadges";
import { COMPANY } from "@/lib/constants";

export default function AboutSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <section className="about-section relative sec-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Images matching TransHub .about-media */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Primary Image: real loading operations, rounded 30px */}
              <div className="relative rounded-[30px] overflow-hidden shadow-card aspect-[4/3] w-11/12">
                <Image
                  src="/images/yls/yls-heavy-loading.jpg"
                  alt="YES Logistics crew loading a consignment onto a truck"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stat 1: .ab-stat matching TransHub — compact on mobile */}
              <div className="absolute top-4 right-1 sm:top-8 sm:right-6 z-20 w-36 sm:w-64 bg-primary text-white p-3 sm:p-5 rounded-[18px] sm:rounded-[24px] shadow-2xl text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl sm:text-4xl font-heading font-extrabold leading-none">
                    2021
                  </span>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-amber-200">
                    Estd
                  </span>
                </div>
                <p className="text-[9px] sm:text-xs font-medium text-white/90 mt-1">
                  Established in Pune &bull; Pan-India
                </p>
              </div>

              {/* Secondary Image: real warehouse facility photo, rounded 30px */}
              <div className="relative -mt-16 ml-auto w-3/5 aspect-[4/3] rounded-[30px] overflow-hidden shadow-card border-4 border-white z-10 hidden sm:block">
                <Image
                  src="/images/yls/yls-warehouse-racks.jpg"
                  alt="YES Logistics modern covered warehouse and distribution facility"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stat 2: .ab-stat2 matching TransHub */}
              <div className="absolute bottom-4 left-4 z-20 bg-dark text-white px-5 py-4 rounded-[20px] shadow-2xl flex items-center gap-3 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-shield-halved text-primary"></i>
                </div>
                <div>
                  <span className="text-lg font-heading font-bold text-white block leading-none">
                    100%
                  </span>
                  <p className="text-xs text-slate-300 font-medium">Safety Focus</p>
                </div>
              </div>

              {/* Official YLS Emblem Badge (clean transparent mark) */}
              <div className="absolute -bottom-6 right-8 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl border-2 border-slate-100 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
                <Image
                  src="/logo/yls_emblem.png"
                  alt="YES LOGISTICS SERVICE Emblem"
                  width={96}
                  height={64}
                  className="object-contain w-[82%] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content matching TransHub .about-content */}
          <div className="space-y-6">
            {/* Sub-Title */}
            <span className="sub-title">
              <TruckIcon />
              WHO WE ARE
            </span>

            {/* Sec-Title */}
            <h2 className="sec-title">
              ODC Consignment Specialist &amp; Fleet Owner in Chinchwad, Pune
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              YES LOGISTICS SERVICE is a Pune-registered fleet owner and transport contractor established in 2021. We provide dependable fleet, trailer, ODC, warehouse and loading support across India.
            </p>

            {/* Features Strip (.about-feat) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center p-2.5 shrink-0">
                  <Image
                    src="/images/ab-icon1.png"
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-heading font-bold text-dark leading-tight">
                  Fleet Owner &amp; Transport Contractor
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center p-2.5 shrink-0">
                  <Image
                    src="/images/ab-icon2.png"
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-heading font-bold text-dark leading-tight">
                  ODC Consignment Specialist
                </h3>
              </div>
            </div>

            {/* Statutory Registrations & Official Logo Badges */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-5 my-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#06112E] flex items-center gap-1.5">
                  <i className="fa-solid fa-shield-check text-emerald-600" />
                  <span>Statutory Compliance &amp; Government Registrations</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase">
                  Verified Transport Firm
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <GstLogoMark className="h-8 sm:h-9 w-auto" />
                <MsmeLogoMark className="h-8 sm:h-9 w-auto" />
              </div>
            </div>

            {/* Checklist matching TransHub ul.check */}
            <ul className="check space-y-3">
              <li>Fleet Owner &amp; Transport Contractor with verified pan-India network</li>
              <li>ODC Consignment Specialist with heavy hydraulic axle trailers</li>
              <li>Experienced field staff and route escort coordinators</li>
              <li>All India operations across Maharashtra, Karnataka, Gujarat, Odisha, and UP</li>
            </ul>

            {/* Footer with Button and Quick Call Box */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/about-us"
                className="btn-primary"
              >
                <span>About Our Company</span>
                <i className="fa fa-turn-up text-xs" aria-hidden="true"></i>
              </Link>

              {/* Quick Call / WhatsApp */}
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-12 h-12 rounded-full bg-dark hover:bg-emerald-600 text-white flex items-center justify-center transition shadow-sm cursor-pointer group"
                  aria-label="Call or WhatsApp YLS Dispatch"
                  title="Click to Call or WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
                </button>
                <div>
                  <p className="text-xs text-mute font-medium flex items-center gap-1.5">
                    <span>Call or WhatsApp:</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(true)}
                    className="text-sm sm:text-base font-heading font-bold text-primary hover:text-emerald-600 transition text-left cursor-pointer"
                  >
                    +91 70200 57149 / 70212 77197
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
