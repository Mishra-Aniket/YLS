"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((c) => (c + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Navy Rounded Container matching TransHub */}
        <div className="bg-navy-dark rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative shadow-2xl overflow-hidden border border-white/10">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Col: Photo / Graphic */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-card border-4 border-white/10">
                <Image
                  src="/images/testimonial-ft.jpg"
                  alt="Industrial Transport Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">
                    Verified Logistics Partner
                  </span>
                  <p className="text-white text-xs font-semibold">All India Fleet Operations</p>
                </div>
              </div>
            </div>

            {/* Right Col: Testimonial Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-primary" />
                <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
                  TESTIMONIALS
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display leading-tight">
                Our Customers Share Their Success Stories
              </h2>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-brand-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author & Route Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    {current.author}
                  </h4>
                  <p className="text-xs text-brand-yellow font-semibold">{current.company}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{current.location}</p>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition shadow-sm"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition shadow-sm"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
