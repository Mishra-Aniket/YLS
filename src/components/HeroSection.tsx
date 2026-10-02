"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import YLSHeroBadge from "./YLSHeroBadge";

const HERO_SLIDES = [
  {
    image: "/images/slide-m1.jpg",
    alt: "YES Logistics Service Heavy Transportation Fleet on Highway at Sunset",
    truckModel: "Taurus Multi-Axle Long Haul Carrier",
  },
  {
    image: "/images/slide-m2.jpg",
    alt: "YES Logistics Service ODC Hydraulic Trailer on Golden Hour Highway",
    truckModel: "Hydraulic Multi-Axle ODC Trailer",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full min-h-[780px] lg:h-[820px] bg-navy-dark overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 lg:pb-16 select-none">
      {/* Background Truck Line-Art Pattern on Lower-Left */}
      <div className="absolute left-0 bottom-0 pointer-events-none z-10 opacity-20 sm:opacity-30">
        <Image
          src="/images/tranck-v.png"
          alt="Truck vector pattern"
          width={450}
          height={280}
          className="object-contain"
        />
      </div>

      {/* Geometric Overlay Shape from TransHub */}
      <div className="absolute top-0 right-0 pointer-events-none z-10 opacity-30">
        <Image
          src="/images/slide-sh1.png"
          alt="Shape overlay"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Background Split: Right Image with Left Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Right side large truck image */}
            <div className="absolute inset-0 lg:left-1/3">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover object-center lg:object-right"
              />
            </div>

            {/* Dark Navy Gradient Overlay: Deep solid on the left, fading towards the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06112E] via-[#06112E]/90 to-[#06112E]/30 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06112E] via-transparent to-[#06112E]/50 lg:hidden" />
          </div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Content Panel (7 Cols) */}
          <div className="lg:col-span-7 xl:col-span-8 text-white space-y-6 pt-4 sm:pt-0">
            {/* Center-Top Circular Badge Area */}
            <div className="flex items-center gap-4">
              <YLSHeroBadge />
              <div className="hidden sm:block">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-xs font-bold tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                  Fleet Owner &amp; Transport Contractor
                </span>
              </div>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
                LOGISTIC TRANSPORTATION
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-display leading-[1.08] tracking-tight">
              The Bridge to Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Logistics Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Optimizing fleet, routes, technology and experienced transport teams,{" "}
              <strong className="text-white font-bold">YES Logistics Service</strong> delivers safe and dependable movement across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Button */}
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-base shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>Let’s Get Started</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              {/* Secondary Button */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-sm border border-white/20 transition-all duration-300 hover:border-brand-yellow"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Fast Highlights Checklist */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                ODC Consignment Specialist
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                All India Transport Network
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                Pune HQ (Chinchwad)
              </span>
            </div>
          </div>

          {/* Right Side Spacer / Interactive Truck Info */}
          <div className="lg:col-span-5 xl:col-span-4 hidden lg:flex flex-col items-end justify-end h-full">
            {/* White Rounded Statistics Card on Bottom-Right */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-slate-100 max-w-sm w-full transform transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-[#06112E] font-display">
                      2021
                    </span>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Established in Pune
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-yellow/20 text-[#06112E] text-[11px] font-black tracking-wider uppercase">
                  Verified
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <p className="text-base font-black text-[#06112E]">
                    All India Operations
                  </p>
                  <p className="text-xs text-slate-500">
                    5 Major Branch Hubs across 5 States
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-navy-dark text-brand-yellow flex items-center justify-center font-bold text-xs">
                  5★
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar with Slider Buttons & Mobile Stats */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="flex items-center justify-between">
          {/* Two Orange-Red Slider Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-glow transition-all active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-glow transition-all active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="ml-3 text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">
              Fleet Slide 0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Mobile view of the 2021 Established stats card */}
          <div className="lg:hidden flex items-center gap-3 bg-white/95 rounded-2xl px-4 py-2 shadow-card text-[#06112E]">
            <div>
              <span className="text-lg font-black leading-none block">2021</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Pune Established
              </span>
            </div>
            <span className="w-px h-6 bg-slate-200" />
            <span className="text-xs font-bold text-primary">All India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
