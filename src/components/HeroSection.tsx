'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import YLSHeroBadge from './YLSHeroBadge';
import { Search, ShieldCheck } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: '/images/yls/yls-odc-trailer.jpg',
    alt: 'YES Logistics Service transport fleet at an industrial site in Pune',
    tag: 'All-Capacity Transport Fleet',
    title: 'Full-Spectrum Transport & Freight Contractor',
    location: 'Chakan MIDC & All India Highways',
  },
  {
    image: '/images/work/work-04.jpeg',
    alt: 'YES Logistics 52-meter long girder ODC transport at night',
    tag: '52m Long Girder Convoy',
    title: '52-Meter Structure Transit & Escort Convoy',
    location: 'Interstate Highway Route Audit',
  },
  {
    image: '/images/yls/yls-heavy-loading.jpg',
    alt: 'YES Logistics Service heavy machinery loading with mobile crane',
    tag: 'Heavy Machinery & Crane Operations',
    title: 'Precision Heavy Lift & Mobile Crane Operations',
    location: 'Industrial Dock & Staging Yard',
  },
  {
    image: '/images/work/work-06.jpeg',
    alt: 'YES Logistics cable reels on multi-axle mechanical trailer',
    tag: 'Multi-Axle Trailer Fleet',
    title: 'Industrial Cable Reels & Raw Material Transport',
    location: 'Pan-India Freight Corridor',
  },
  {
    image: '/images/yls/yls-warehouse-racks.jpg',
    alt: 'YES Logistics covered warehouse and storage facility in Pune',
    tag: 'Covered Warehousing & Storage Yard',
    title: '15,000+ Sq Ft Covered Storage & Staging',
    location: 'Chinchwad & Chakan Industrial Hub',
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroSection() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [quickDocket, setQuickDocket] = useState('');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [isPaused, currentSlide, nextSlide]);

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingEl = document.getElementById('tracking-section');
    if (trackingEl) {
      trackingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full bg-[#06112E] overflow-hidden select-none">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="order-1 lg:col-span-7 xl:col-span-6 z-20 text-white flex flex-col justify-center">
            
            <h1 className="font-heading font-black text-white leading-[1.08] tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-5 uppercase">
              Moving India:{' '}
              <span className="text-primary font-black">
                Any Size, Any Weight, Anywhere
              </span>
            </h1>

            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8">
              Your single pan-India transport partner for every requirement. Whether you need a quick Pickup for local dispatch, a Taurus for bulk freight, or a Multi-Axle Trailer for heavy haulage, YES Logistics ensures safe and timely delivery across the nation.
            </p>

            <div className="mb-6 sm:mb-8 max-w-xl">
              <form
                onSubmit={handleQuickTrack}
                className="relative flex items-center bg-slate-900/80 hover:bg-slate-900 border border-slate-700 focus-within:border-primary rounded-2xl p-1.5 transition-all duration-300 shadow-lg"
              >
                <div className="pl-3.5 pr-2 text-slate-400">
                  <Search className="w-4 h-4 text-primary" />
                </div>
                <input
                  type="text"
                  value={quickDocket}
                  onChange={(e) => setQuickDocket(e.target.value)}
                  placeholder="Enter LR Docket No. (e.g. YLS-78421)"
                  className="w-full bg-transparent py-2.5 text-sm sm:text-base text-white placeholder-slate-400 outline-none font-sans"
                />
                <button
                  type="submit"
                  className="shrink-0 px-4 sm:px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold font-heading uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Track Status</span>
                  <i className="fa fa-arrow-right text-xs" aria-hidden="true" />
                </button>
              </form>
              <p className="text-[11px] text-slate-400 mt-2 pl-2">
                Instant Pan-India consignment status with dispatch support &amp; route assistance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/quote"
                className="btn-primary text-sm sm:text-base py-3.5 px-7 shadow-md hover:shadow-lg inline-flex items-center gap-2 group uppercase tracking-wider"
              >
                <span>Get Instant Quote</span>
                <i
                  className="fa fa-turn-up text-xs sm:text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[100px] font-heading font-bold text-sm sm:text-base text-white border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 uppercase tracking-wider"
              >
                <span>Explore Services</span>
                <i className="fa fa-arrow-right text-xs" aria-hidden="true" />
              </Link>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-300/90 border-t border-white/10 mt-6 sm:mt-8 font-heading font-semibold uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                  ✓
                </div>
                <span>Pickups to Multi-Axle Trailers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                  ✓
                </div>
                <span>Pan-India Transport Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                  ✓
                </div>
                <span>24/7 Dispatch Control</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Real Fleet Showcase Slider */}
          <div
            className="order-2 lg:col-span-5 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[580px] xl:max-w-[620px]">
              <div className="hidden sm:block absolute -top-6 -left-6 z-30 pointer-events-none drop-shadow-2xl">
                <YLSHeroBadge className="scale-75 origin-center" />
              </div>

              {/* Slider Image Container */}
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.75)] ring-1 ring-white/20 aspect-[16/10] bg-slate-950 group">
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 620px"
                      className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                ))}

                {/* Top Badge: Verified Tag & Slide Counter */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#06112E]/85 backdrop-blur-md border border-white/20 text-white font-heading font-semibold text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{activeSlideData.tag}</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-primary/90 text-white font-heading font-bold text-xs">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-5 bg-gradient-to-t from-[#06112E] via-[#06112E]/80 to-transparent pointer-events-none z-10">
                  <h4 className="text-white font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase line-clamp-1 drop-shadow-md">
                    {activeSlideData.title}
                  </h4>
                  <p className="text-slate-300 text-[11px] sm:text-xs font-sans line-clamp-1 mt-0.5">
                    📍 {activeSlideData.location}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#06112E]/80 hover:bg-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 border border-white/20 cursor-pointer shadow-lg"
                >
                  <i className="fa fa-arrow-left text-xs sm:text-sm" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#06112E]/80 hover:bg-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 border border-white/20 cursor-pointer shadow-lg"
                >
                  <i className="fa fa-arrow-right text-xs sm:text-sm" aria-hidden="true" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 right-5 z-20 flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? 'w-7 bg-primary' : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Verified Fleet Floating Card */}
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
                  <h2 className="text-xs sm:text-sm font-heading font-bold text-dark leading-tight mt-0.5 uppercase">
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
