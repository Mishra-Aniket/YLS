"use client";

import React from "react";
import Image from "next/image";

export default function YLSHeroBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-[180px] h-[180px] select-none pointer-events-auto ${className}`}
      aria-label="YES LOGISTICS SERVICE - PUNE - ODC SPECIALIST"
    >
      {/* 1. Outer Rotating Circular Text Ring (TransHub text-rotate.png or exact SVG) */}
      <div className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
        <svg
          className="w-full h-full"
          viewBox="0 0 180 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="ylsCirclePath"
              d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              fill="none"
            />
          </defs>

          <text className="fill-white text-[11px] font-extrabold tracking-[0.24em] uppercase font-heading">
            <textPath href="#ylsCirclePath" startOffset="0%">
              ★ YES LOGISTICS SERVICE ★ PUNE ★ ODC SPECIALIST
            </textPath>
          </text>
        </svg>
      </div>

      {/* 2. Frosted Outer Ring (130px) */}
      <div className="absolute inset-0 m-auto w-[130px] h-[130px] rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl pointer-events-none" />

      {/* 3. Primary Center Circle (100px) with Boomark Ribbon Icon */}
      <div className="absolute inset-0 m-auto w-[100px] h-[100px] rounded-full bg-primary flex items-center justify-center shadow-glow transition-transform duration-300 hover:scale-105">
        <Image
          src="/images/boomark.png"
          alt="Award Medal Ribbon"
          width={44}
          height={44}
          className="object-contain brightness-0 invert drop-shadow-md"
        />
      </div>
    </div>
  );
}
