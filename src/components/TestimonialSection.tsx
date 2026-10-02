"use client";

import React, { useState } from "react";
import Image from "next/image";
import TruckIcon from "./TruckIcon";
import { Star } from "lucide-react";
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
    <section className="review-sec sec-padding position-relative overflow-hidden bg-white">
      {/* TransHub Decorative Animated Shapes: plane-sh.png & trolly-sh.png */}
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 anim-jumping">
        <Image
          src="/images/plane-sh.png"
          alt=""
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 anim-moveXS">
        <Image
          src="/images/trolly-sh.png"
          alt=""
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Photo matching TransHub .review-thumb */}
          <div className="lg:col-span-4">
            <div className="relative rounded-[30px] overflow-hidden shadow-card aspect-[4/5] max-w-sm mx-auto">
              <Image
                src="/images/testimonial-ft.jpg"
                alt="Logistics Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Testimonial content matching TransHub .review-wrapper */}
          <div className="lg:col-span-8 space-y-6">
            <span className="sub-title">
              <TruckIcon />
              TESTIMONIALS
            </span>

            <h2 className="sec-title">
              Our Customers Share Their Success Stories
            </h2>

            {/* Stars in #F8C62E */}
            <div className="flex items-center gap-1.5 text-brand-yellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl text-dark font-heading font-medium leading-relaxed italic pt-2">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author info & Slider controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div>
                <h4 className="text-lg font-heading font-bold text-dark">
                  {current.author}
                </h4>
                <p className="text-sm font-semibold text-primary">{current.company}</p>
                <p className="text-xs text-mute mt-0.5">{current.location}</p>
              </div>

              {/* TransHub Prev / Next buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-[10px] bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-md"
                  aria-label="Previous story"
                >
                  <i className="fa fa-arrow-left text-sm"></i>
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-[10px] bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-md"
                  aria-label="Next story"
                >
                  <i className="fa fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
