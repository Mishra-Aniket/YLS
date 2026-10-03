"use client";

import React from "react";
import Image from "next/image";
import TruckIcon from "./TruckIcon";
import { PROCESS_STEPS } from "@/lib/constants";

const PROCESS_IMAGES = [
  "/images/yls/yls-warehouse-racks.jpg",
  "/images/yls/yls-heavy-loading.jpg",
  "/images/yls/yls-odc-trailer.jpg",
];

// Triple chevron outline between process circles (TransHub-style connector)
function ChevronConnector() {
  return (
    <div className="hidden lg:flex items-center justify-center gap-2 opacity-60" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          width="26"
          height="52"
          viewBox="0 0 26 52"
          fill="none"
          className="text-primary"
          style={{ opacity: 0.25 + i * 0.2 }}
        >
          <path
            d="M2 4l20 22L2 48"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function WorkingProcessSection() {
  return (
    <section
      id="process-section"
      className="process-sec sec-padding relative overflow-hidden bg-white scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro */}
        <div className="sec-intro text-center mx-auto mb-20">
          <span className="sub-title">
            <TruckIcon />
            WORKING PROCESS
          </span>
          <h2 className="sec-title">
            Logistics Solutions to Help Businesses Move
          </h2>
        </div>

        {/* Open process flow: dashed line + numbered chips + circular thumbs (no cards) */}
        <div className="relative">
          {/* Dashed connector line behind the number chips */}
          <div
            className="hidden lg:block absolute left-[8%] right-[8%] top-[23px] border-t-2 border-dashed border-slate-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-y-12 lg:gap-x-4">
            {PROCESS_STEPS.map((step, idx) => {
              const imgPath = PROCESS_IMAGES[idx] || "/images/yls/yls-odc-trailer.jpg";

              return (
                <React.Fragment key={step.step}>
                  {/* Step */}
                  <div className="group relative flex flex-col items-center text-center">
                    {/* Step count badge on the dashed line */}
                    <span className="relative z-10 w-12 h-12 rounded-full bg-shade ring-8 ring-white group-hover:bg-primary group-hover:text-white text-dark font-heading font-bold text-sm flex items-center justify-center shadow-sm transition-colors">
                      {step.step}
                    </span>

                    {/* Circular process thumb with double ring */}
                    <div className="relative mt-14 mb-8">
                      <div className="w-40 h-40 rounded-full border-2 border-slate-200 p-3 bg-white group-hover:border-primary/40 transition-colors duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden bg-primary/5 ring-1 ring-primary/20 group-hover:ring-2 group-hover:ring-primary/50 transition-all duration-300">
                          <Image
                            src={imgPath}
                            alt={step.title}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-dark group-hover:text-primary transition-colors mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>

                  {/* Connector chevrons between steps */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center pt-[230px]">
                      <ChevronConnector />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
