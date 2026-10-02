"use client";

import React from "react";
import Image from "next/image";

export default function YLSHeroBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 select-none group ${className}`}
      aria-label="YES LOGISTICS SERVICE PUNE ODC SPECIALIST Badge"
    >
      {/* Rotating Circular Text Ring */}
      <svg
        className="w-full h-full animate-spin-slow"
        viewBox="0 0 160 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="ylsCirclePath"
            d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            fill="none"
          />
        </defs>

        {/* Text along circular path */}
        <text className="fill-white text-[10.5px] font-bold tracking-[0.19em] uppercase">
          <textPath href="#ylsCirclePath" startOffset="0%">
            ★ YES LOGISTICS SERVICE ★ PUNE ★ ODC SPECIALIST
          </textPath>
        </text>
      </svg>

      {/* Center Circle with Yellow & Blue Emblem */}
      <div className="absolute inset-0 m-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-brand-yellow to-[#ffe066] border-2 border-white shadow-glow flex flex-col items-center justify-center text-center transition-transform group-hover:scale-105 duration-300">
        <span className="text-[#06112E] font-black text-xs sm:text-sm tracking-tight leading-none font-display">
          YLS
        </span>
        <span className="text-[#175A9D] font-extrabold text-[8px] tracking-wider uppercase leading-none mt-0.5">
          PUNE
        </span>
        <span className="text-[7px] text-[#06112E] font-bold tracking-tighter opacity-80">
          ESTD 2021
        </span>
      </div>
    </div>
  );
}
