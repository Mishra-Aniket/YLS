"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import YLSHeroBadge from "./YLSHeroBadge";

const HERO_SLIDES = [
  {
    image: "/images/slide-m1.jpg",
    alt: "YES Logistics Service Heavy Transportation Fleet on Highway at Sunset",
    caption: "Taurus Multi-Axle Long Haul Carrier",
  },
  {
    image: "/images/slide-m2.jpg",
    alt: "YES Logistics Service ODC Hydraulic Trailer on Golden Hour Highway",
    caption: "Hydraulic Multi-Axle ODC Trailer",
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
    <section className="relative w-full min-h-[780px] lg:h-[840px] bg-[#020e28] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 lg:pb-16 select-none">
      {/* 1. Background Truck Line-Art Pattern on Lower-Left (from TransHub tranck-v.png) */}
      <div className="absolute left-0 bottom-0 pointer-events-none z-10 opacity-25 sm:opacity-35">
        <Image
          src="/images/tranck-v.png"
          alt="Truck vector pattern"
          width={450}
          height={280}
          className="object-contain"
        />
      </div>

      {/* 2. Geometric Overlay Shape from TransHub (slide-sh1.png) */}
      <div className="absolute top-0 right-0 pointer-events-none z-10 opacity-30">
        <Image
          src="/images/slide-sh1.png"
          alt="Shape overlay"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      {/* 3. Background Split: Right Image with Left Navy Gradient Overlay */}
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

            {/* Dark Navy Gradient Overlay: Deep solid #020e28 on the left, fading towards the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020e28] via-[#020e28]/95 to-[#020e28]/20 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e28] via-transparent to-[#020e28]/50 lg:hidden" />
          </div>
        ))}
      </div>

      {/* 4. Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Content Panel (Col 7 / 12) */}
          <div className="lg:col-span-7 xl:col-span-7 text-white relative pt-4 sm:pt-0">
            {/* Circular Rotating Trust Badge Positioned exactly at top-right seam (Desktop) */}
            <div className="hidden lg:block absolute -top-16 left-[calc(100%-75px)] z-30">
              <YLSHeroBadge />
            </div>

            {/* Mobile / Tablet Rotating Badge */}
            <div className="lg:hidden mb-4">
              <YLSHeroBadge className="scale-75 origin-left" />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[3px] bg-[#fd5523] rounded-full" />
              <p className="text-[#fd5523] font-extrabold text-xs sm:text-sm tracking-[0.22em] uppercase font-display">
                LOGISTIC TRANSPORTATION
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display leading-[1.08] tracking-tight mb-5">
              The Bridge to Your <br className="hidden sm:inline" />
              <span className="text-white">
                Logistics Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Optimizing fleet, routes, technology and experienced transport teams,{" "}
              <strong className="text-white font-bold">YES Logistics Service</strong> delivers safe and dependable movement across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fd5523] hover:bg-[#e04414] text-white font-bold text-base shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>Let’s Get Started</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              {/* Secondary Button */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-sm border border-white/20 transition-all duration-300 hover:border-[#fd5523]"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="pt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#fd5523]" />
                ODC Consignment Specialist
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#fd5523]" />
                All India Transport Network
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#fd5523]" />
                Pune HQ (Chinchwad)
              </span>
            </div>
          </div>

          {/* Right Side Spacer */}
          <div className="lg:col-span-5 xl:col-span-5 hidden lg:block" />
        </div>
      </div>

      {/* 5. TransHub Hero Bottom Elements */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Slider Navigation Arrows (TransHub Style) */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full bg-[#fd5523] hover:bg-white hover:text-[#020e28] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-12 h-12 rounded-full bg-[#fd5523] hover:bg-white hover:text-[#020e28] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* TransHub Stat Card on Bottom Right */}
        <div className="hidden sm:flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-2xl border border-slate-100 transition-all hover:scale-105">
          <div className="shrink-0 flex items-center">
            <Image
              src="/images/clients-1.png"
              alt="Happy Logistics Clients"
              width={95}
              height={44}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col border-l border-slate-100 pl-4">
            <span className="text-2xl sm:text-3xl font-black text-[#fd5523] font-display leading-none">
              2021
            </span>
            <h2 className="text-xs sm:text-sm font-bold text-[#020e28] leading-tight mt-0.5">
              Established in Pune
            </h2>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              All India Operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
