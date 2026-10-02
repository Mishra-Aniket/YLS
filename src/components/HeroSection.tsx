"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YLSHeroBadge from "./YLSHeroBadge";

const HERO_SLIDES = [
  {
    image: "/images/slide-m1.jpg",
    alt: "YES Logistics Service Heavy Transportation Fleet on Highway at Sunset",
  },
  {
    image: "/images/slide-m2.jpg",
    alt: "YES Logistics Service ODC Hydraulic Trailer on Golden Hour Highway",
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
    <section className="relative w-full bg-dark overflow-hidden select-none">
      {/* 1. TransHub Absolute Overlay Shape at Top-0: slide-sh1.png */}
      <div className="absolute top-0 -left-16 w-[235px] pointer-events-none z-10 opacity-70">
        <Image
          src="/images/slide-sh1.png"
          alt=""
          width={235}
          height={300}
          className="object-contain"
        />
      </div>

      {/* 2. TransHub Animated Truck Vector at Bottom-0: tranck-v.png */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-10 anim-moveXS opacity-40 sm:opacity-70">
        <Image
          src="/images/tranck-v.png"
          alt=""
          width={450}
          height={260}
          className="object-contain"
        />
      </div>

      {/* 3. Left-Half Background Pattern: hero-bg.png */}
      <div
        className="absolute top-0 left-0 w-full lg:w-1/2 h-full pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "0 0",
        }}
      />

      {/* 4. Full Fluid Split Row (matching TransHub container-fluid p-0 row g-0) */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[750px] lg:min-h-[920px]">
          {/* Left Column: Hero Content (.hero-content) */}
          <div className="order-2 lg:order-1 relative z-20 pt-28 pb-16 lg:py-32 px-6 sm:px-12 lg:pl-16 xl:pl-28 2xl:pl-36 lg:pr-8 text-white">
            {/* Rotating Trust Badge positioned at the column boundary */}
            <div className="hidden lg:block absolute -top-16 left-[calc(100%-65px)] z-30">
              <YLSHeroBadge />
            </div>

            {/* Mobile / Tablet Trust Badge */}
            <div className="lg:hidden mb-6">
              <YLSHeroBadge className="scale-75 origin-left" />
            </div>

            {/* Sub-Title */}
            <p className="sub-title text-primary font-bold text-lg sm:text-xl uppercase tracking-wider mb-3">
              Logistic Transportation
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-heading font-bold text-white leading-[1.12] tracking-tight mb-8">
              The Bridge to Your<br />
              Logistics Success
            </h1>

            {/* Slide Meta (Paragraph & Primary CTA) */}
            <div className="relative max-w-[460px] pt-4">
              {/* Decorative line matching TransHub .slide-meta:before */}
              <div className="hidden sm:block absolute left-0 top-0 w-28 h-[1px] bg-white/40" />

              <p className="text-slate-300 font-body text-base sm:text-lg leading-relaxed my-6">
                Optimizing fleet, routes, technology and experienced transport teams,{" "}
                <strong className="text-white font-semibold">YES Logistics Service</strong> delivers safe and dependable movement across India.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/quote"
                  className="btn-primary text-base"
                >
                  <span>Lets Get started</span>
                  <i className="fa fa-arrow-right text-sm" aria-hidden="true"></i>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-base backdrop-blur-sm border border-white/20 transition-all"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Slider Wrap (.hero-slider-wrap) */}
          <div className="order-1 lg:order-2 relative w-full h-[400px] sm:h-[500px] lg:h-[920px] overflow-hidden">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center"
                />
                {/* Subtle dark gradient overlay on mobile so text stands out if stacked */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent lg:hidden" />
              </div>
            ))}

            {/* TransHub Stat Card on bottom-right: .stat-card */}
            <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 z-20 hidden sm:flex items-center gap-4 bg-white px-7 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-slate-100">
              <div className="shrink-0 flex items-center">
                <Image
                  src="/images/clients-1.png"
                  alt="Clients"
                  width={90}
                  height={42}
                  className="object-contain"
                />
              </div>
              <div className="border-l border-slate-100 pl-4">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary block leading-none">
                  2021
                </span>
                <h2 className="text-sm font-heading font-bold text-dark leading-tight mt-0.5">
                  Established in Pune
                </h2>
                <p className="text-[11px] text-mute font-medium">
                  All India Operations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. TransHub Slider Navigation Arrows (.custom-nav) */}
        <div className="hidden lg:flex items-center justify-center gap-3 absolute bottom-9 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-[10px] bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-lg cursor-pointer"
          >
            <i className="fa fa-arrow-left text-sm" aria-hidden="true"></i>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-11 h-11 rounded-[10px] bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-lg cursor-pointer"
          >
            <i className="fa fa-arrow-right text-sm" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
