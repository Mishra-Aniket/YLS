"use client";

import React from "react";
import { ClipboardList, PackageCheck, Truck } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const PROCESS_ICONS = [ClipboardList, PackageCheck, Truck];

export default function WorkingProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-0.5 bg-primary" />
            <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
              WORKING PROCESS
            </p>
            <span className="w-6 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06112E] font-display">
            Logistics Solutions to Help Businesses Move
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            From initial consignment inquiry to final site handover, our transparent 3-step workflow ensures safe, time-critical transit.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Orange Connecting Line Accent for Desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-brand-yellow to-primary z-0 opacity-40" />

          {PROCESS_STEPS.map((step, idx) => {
            const Icon = PROCESS_ICONS[idx % PROCESS_ICONS.length];

            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-primary text-[#06112E] group-hover:text-white font-black text-sm flex items-center justify-center mb-4 transition-colors shadow-sm font-display">
                  {step.step}
                </div>

                {/* Step Icon Container with Orange Line Accent */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-slate-50 to-slate-100 border-4 border-white shadow-card flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  {/* Small orange accent badge */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full group-hover:w-12 transition-all duration-300" />
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-black text-[#06112E] font-display mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Step Explanation */}
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
