"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import YLSHeroBadge from "./YLSHeroBadge";
import ClientMarquee from "./ClientMarquee";

const HERO_SLIDES = [
  {
    image: "/images/yls/yls-odc-trailer.jpg",
    alt: "YES Logistics Service ODC trailer fleet at an industrial site",
  },
  {
    image: "/images/yls/yls-heavy-loading.jpg",
    alt: "YES Logistics Service crew loading consignment onto a truck",
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-change slides; timer resets after every manual interaction
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [isPaused, currentSlide, nextSlide]);

  return (
    <section className="relative w-full bg-dark overflow-hidden select-none">
        {/* 4. Full Fluid Split Row — aligned with the site container */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[calc(100vh-144px)] mx-auto max-w-[1365px]">
          {/* Left Column: Hero Content (.hero-content) */}
          <div className="order-2 lg:order-1 relative z-20 pt-6 pb-10 sm:pt-24 lg:pt-40 lg:pb-32 px-6 sm:px-8 text-white">
            {/* Rotating Trust Badge positioned at the column boundary, TransHub height */}
            <div className="hidden lg:block absolute top-20 left-[calc(100%+8px)] z-30">
              <YLSHeroBadge />
            </div>

            {/* Mobile / Tablet Trust Badge */}
            <div className="lg:hidden mb-4">
              <YLSHeroBadge className="scale-[0.72] origin-center" />
            </div>

            {/* Sub-Title */}
            <p className="sub-title text-primary font-bold text-lg sm:text-xl uppercase tracking-wider mb-3">
              Logistic Transportation
            </p>

            {/* Main Heading — fluid type that scales smoothly from mobile to desktop */}
            <h1
              className="font-heading font-bold text-white leading-[1.1] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.15rem, 8vw, 4.5rem)" }}
            >
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
                  <i className="fa fa-turn-up text-sm" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Real fleet photos in a framed card (full photo visible) */}
          <div
            className="order-1 lg:order-2 relative w-full px-4 pb-4 sm:px-8 lg:px-0 lg:py-16 lg:pr-8 flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[580px]">
              <div className="relative rounded-[30px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/10 aspect-[3/2]">
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
                      sizes="(max-width: 1024px) 90vw, 580px"
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Slide indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? "w-6 bg-primary" : "w-2 bg-white/80 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stat Card overlapping the frame corner — shows work credibility, compact on mobile */}
              <div className="absolute -bottom-4 -right-1 sm:-bottom-6 sm:-right-4 z-20 flex items-center gap-2.5 sm:gap-4 bg-white px-3 py-2 sm:px-6 sm:py-3.5 rounded-full sm:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.25)] border border-slate-100">
                <div className="shrink-0 flex items-center">
                  <Image
                    src="/images/clients-1.png"
                    alt="Clients"
                    width={90}
                    height={42}
                    className="object-contain w-12 sm:w-auto h-auto"
                  />
                </div>
                <div className="border-l border-slate-100 pl-2.5 sm:pl-4">
                  <span className="text-lg sm:text-3xl font-heading font-bold text-primary block leading-none">
                    20+
                  </span>
                  <h2 className="text-[11px] sm:text-sm font-heading font-bold text-dark leading-tight mt-0.5">
                    Trusted Enterprises
                  </h2>
                  <p className="text-[9px] sm:text-[11px] text-mute font-medium">
                    Pan-India Network
                  </p>
                </div>
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
