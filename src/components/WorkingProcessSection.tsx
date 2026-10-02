"use client";

import React from "react";
import Image from "next/image";
import TruckIcon from "./TruckIcon";
import { PROCESS_STEPS } from "@/lib/constants";

const PROCESS_IMAGES = [
  "/images/st1.png",
  "/images/st2.png",
  "/images/st3.png",
];

export default function WorkingProcessSection() {
  return (
    <section
      id="process-section"
      className="process-sec sec-padding position-relative overflow-hidden bg-white"
    >
      {/* Top right decorative shape matching TransHub */}
      <div className="absolute right-0 top-0 pointer-events-none opacity-50">
        <Image
          src="/images/slide-sh1.png"
          alt=""
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro */}
        <div className="sec-intro text-center mx-auto mb-16">
          <span className="sub-title">
            <TruckIcon />
            WORKING PROCESS
          </span>
          <h2 className="sec-title">Logistics Solutions to Help Businesses Move</h2>
        </div>

        {/* 3 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const imgPath = PROCESS_IMAGES[idx] || "/images/st1.png";

            return (
              <div
                key={step.step}
                className="group relative flex flex-col items-center text-center p-8 rounded-[30px] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step Count Badge matching TransHub .count */}
                <span className="w-12 h-12 rounded-full bg-shade group-hover:bg-primary group-hover:text-white text-dark font-heading font-bold text-sm flex items-center justify-center mb-6 shadow-sm transition-colors">
                  {step.step}
                </span>

                {/* Circular Process Thumb matching TransHub .process-thumb */}
                <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mb-6 p-5 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={imgPath}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-dark group-hover:text-primary transition-colors mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
