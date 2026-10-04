"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YLSHeroBadge from "./YLSHeroBadge";
import { Search } from "lucide-react";

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
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [quickDocket, setQuickDocket] = useState("");

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

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const query = quickDocket.trim();
    if (query) {
      router.push(`/#tracking-section?docket=${encodeURIComponent(query)}`);
      const trackingEl = document.getElementById("tracking-section");
      if (trackingEl) {
        trackingEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const trackingEl = document.getElementById("tracking-section");
      if (trackingEl) {
        trackingEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full bg-[#020b1f] overflow-hidden select-none">
      {/* Background ambient glow accents */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="order-1 lg:col-span-7 xl:col-span-6 z-20 text-white flex flex-col justify-center">
            
            {/* Sub-Title Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md w-fit mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider font-heading">
                ODC &amp; Heavy Haulage Logistics
              </p>
            </div>

            {/* Main Heading — scales fluidly without awkward rigid line breaks */}
            <h1 className="font-heading font-black text-white leading-[1.08] tracking-tight text-3xl sm:text-5xl md:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] 2xl:text-[4.25rem] mb-5 sm:mb-6 uppercase">
              ODC Transport &amp; Hydraulic Trailer Services in Pune |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-300">
                YES Logistics Service
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-300 font-body text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl xl:max-w-2xl mb-6 sm:mb-8">
              Optimizing fleet, routes, technology, and experienced transport teams,{" "}
              <strong className="text-white font-semibold">YES Logistics Service</strong> delivers safe, on-time, and dependable cargo movement across India.
            </p>

            {/* Live Quick Consignment Tracking Bar */}
            <div className="mb-6 sm:mb-8 max-w-xl">
              <form
                onSubmit={handleQuickTrack}
                className="relative flex items-center bg-white/[0.08] hover:bg-white/[0.12] focus-within:bg-white/[0.15] border border-white/20 focus-within:border-primary rounded-2xl p-1.5 backdrop-blur-lg transition-all duration-300 shadow-xl"
              >
                <div className="pl-3.5 pr-2 text-slate-400">
                  <Search className="w-4 h-4 text-primary" />
                </div>
                <input
                  type="text"
                  value={quickDocket}
                  onChange={(e) => setQuickDocket(e.target.value)}
                  placeholder="Enter LR Docket No. (e.g. YLS-78421)"
                  className="w-full bg-transparent py-2.5 text-sm sm:text-base text-white placeholder-slate-400 outline-none font-body"
                />
                <button
                  type="submit"
                  className="shrink-0 px-4 sm:px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold font-heading transition-all shadow-glow flex items-center gap-2 cursor-pointer"
                >
                  <span>Track Now</span>
                  <i className="fa fa-arrow-right text-xs" aria-hidden="true"></i>
                </button>
              </form>
              <p className="text-[11px] text-slate-400 mt-2 pl-2">
                Instant Pan-India consignment tracking with GPS milestones &amp; dispatch updates.
              </p>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/quote"
                className="btn-primary text-sm sm:text-base py-3.5 px-7 shadow-glow inline-flex items-center gap-2 group"
              >
                <span>Get Instant Quote</span>
                <i
                  className="fa fa-turn-up text-xs sm:text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                ></i>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] font-heading font-bold text-sm sm:text-base text-white border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
              >
                <span>Explore Fleet &amp; Divisions</span>
                <i className="fa fa-arrow-right text-xs" aria-hidden="true"></i>
              </Link>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300/90 border-t border-white/10 mt-6 sm:mt-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                  ✓
                </div>
                <span>52m ODC Girder Specialists</span>
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

          {/* Right Column: High-Impact Fleet Showcase Card */}
          <div
            className="order-2 lg:col-span-5 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[600px] xl:max-w-[660px]">
              
              {/* Rotating Trust Badge — positioned gracefully in open space between columns */}
              <div className="hidden sm:block absolute -top-8 -left-8 lg:-top-10 lg:-left-12 z-30 pointer-events-none drop-shadow-2xl">
                <YLSHeroBadge className="scale-75 sm:scale-85 lg:scale-95 origin-center" />
              </div>

              {/* Main Photo Card Frame */}
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)] ring-1 ring-white/15 aspect-[16/10] bg-slate-900 group">
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

                {/* Top Subtle Pill Tag */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3.5 py-1.5 rounded-full bg-dark/75 backdrop-blur-md border border-white/20 text-white font-heading font-semibold text-[11px] sm:text-xs">
                    ODC Specialist &bull; Pune Hub
                  </span>
                </div>

                {/* Bottom dark vignette gradient for clear controls */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent pointer-events-none" />

                {/* Interactive Slide Arrows on the card */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-dark/70 hover:bg-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-105 border border-white/20 cursor-pointer shadow-lg"
                >
                  <i className="fa fa-arrow-left text-xs sm:text-sm" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-dark/70 hover:bg-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-105 border border-white/20 cursor-pointer shadow-lg"
                >
                  <i className="fa fa-arrow-right text-xs sm:text-sm" aria-hidden="true"></i>
                </button>

                {/* Slide indicator dots */}
                <div className="absolute bottom-5 left-6 z-20 flex items-center gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-white/70 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stat Badge overlapping bottom-right corner — compact, clean & responsive */}
              <div className="absolute -bottom-5 right-2 sm:-bottom-6 sm:right-4 z-20 flex items-center gap-3 sm:gap-4 bg-white px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl sm:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-slate-100">
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
