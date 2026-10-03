"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import YLSHeroBadge from "./YLSHeroBadge";

const HERO_SLIDES = [
  {
    image: "/images/yls/yls-odc-trailer.jpg",
    alt: "YES Logistics Service ODC trailer fleet at an industrial site",
    tag: "ODC Heavy Haulage Fleet",
  },
  {
    image: "/images/yls/yls-heavy-loading.jpg",
    alt: "YES Logistics Service crew loading consignment onto a truck",
    tag: "Safe Consignment Operations",
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

  // Auto-change slides; resets on interaction
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [isPaused, currentSlide, nextSlide]);

  return (
    <section className="relative w-full bg-dark overflow-hidden select-none">
      {/* Background glow accents for subtle depth and high-end feel */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20 min-h-[calc(100vh-140px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <div className="order-1 lg:col-span-6 xl:col-span-6 z-20 text-white flex flex-col justify-center">
            {/* Sub-Title Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm w-fit mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider font-heading">
                Logistic Transportation
              </p>
            </div>

            {/* Main Heading — fluid type scaling smoothly from mobile to wide screens */}
            <h1 className="font-heading font-black text-white leading-[1.1] tracking-tight text-3xl sm:text-5xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] 2xl:text-[4.25rem] mb-5 sm:mb-6">
              The Bridge to Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-300">
                Logistics Success
              </span>
            </h1>

            {/* Subtitle / Paragraph with generous breathing room */}
            <div className="relative max-w-xl xl:max-w-2xl">
              <div className="hidden sm:block w-20 h-[2px] bg-primary/80 mb-5 rounded-full" />

              <p className="text-slate-300 font-body text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Optimizing fleet, routes, technology, and experienced transport teams,{" "}
                <strong className="text-white font-semibold">YES Logistics Service</strong> delivers safe, on-time, and dependable movement across India.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/quote"
                  className="btn-primary text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-7 shadow-glow inline-flex items-center gap-2 group"
                >
                  <span>Let's Get Started</span>
                  <i
                    className="fa fa-turn-up text-xs sm:text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  ></i>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-[10px] font-heading font-bold text-sm sm:text-base text-white border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                >
                  <span>Explore Fleet</span>
                  <i className="fa fa-arrow-right text-xs" aria-hidden="true"></i>
                </Link>
              </div>

              {/* Trust Features Strip on Desktop / Tablet / Mobile */}
              <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300/90 border-t border-white/10 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                    ✓
                  </div>
                  <span>ODC Haulage Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                    ✓
                  </div>
                  <span>GPS-Tracked Modern Fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                    ✓
                  </div>
                  <span>24/7 Dispatch Control</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fleet Photo Card + Badges */}
          <div
            className="order-2 lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[580px] sm:max-w-[620px] xl:max-w-[660px]">
              {/* Rotating Trust Badge — positioned elegantly on top-left corner of the card frame */}
              <div className="absolute -top-7 -left-4 sm:-top-9 sm:-left-7 lg:-top-11 lg:-left-9 z-30 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                <YLSHeroBadge className="scale-[0.68] sm:scale-[0.82] lg:scale-100 origin-center" />
              </div>

              {/* Main Photo Card Frame */}
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.6)] ring-1 ring-white/15 aspect-[16/10] sm:aspect-[3/2] bg-slate-900 group">
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 660px"
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Bottom subtle gradient for clear controls */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent pointer-events-none" />

                {/* Interactive Slide Arrows on the card */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-dark/70 hover:bg-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-105 border border-white/20 cursor-pointer shadow-lg"
                >
                  <i className="fa fa-arrow-left text-xs sm:text-sm" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-dark/70 hover:bg-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-105 border border-white/20 cursor-pointer shadow-lg"
                >
                  <i className="fa fa-arrow-right text-xs sm:text-sm" aria-hidden="true"></i>
                </button>

                {/* Slide indicator dots */}
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? "w-7 bg-primary" : "w-2.5 bg-white/70 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stat Badge overlapping bottom-right corner — compact, clean & responsive */}
              <div className="absolute -bottom-5 right-2 sm:-bottom-6 sm:right-4 z-20 flex items-center gap-3 sm:gap-4 bg-white px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl sm:rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.35)] border border-slate-100">
                <div className="shrink-0 flex items-center">
                  <Image
                    src="/images/clients-1.png"
                    alt="Clients"
                    width={90}
                    height={42}
                    className="object-contain w-11 sm:w-16 h-auto"
                  />
                </div>
                <div className="border-l border-slate-200 pl-3 sm:pl-4">
                  <span className="text-xl sm:text-3xl font-heading font-extrabold text-primary block leading-none">
                    20+
                  </span>
                  <h2 className="text-xs sm:text-sm font-heading font-bold text-dark leading-tight mt-0.5">
                    Trusted Enterprises
                  </h2>
                  <p className="text-[10px] sm:text-xs text-mute font-medium">
                    Pan-India Network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
