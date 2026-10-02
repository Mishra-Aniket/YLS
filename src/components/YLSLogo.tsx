"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface YLSLogoProps {
  variant?: "light" | "dark" | "pill" | "monogram";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function YLSLogo({
  variant = "light",
  size = "md",
  className = "",
}: YLSLogoProps) {
  const isDarkBg = variant === "dark";

  // Monogram dimensions based on size (aspect ratio: 256 / 172 ≈ 1.488)
  const dimensions = {
    sm: { width: 50, height: 34, text: "text-lg", sub: "text-[8px] tracking-[0.16em]" },
    md: { width: 62, height: 42, text: "text-xl", sub: "text-[9px] tracking-[0.18em]" },
    lg: { width: 76, height: 51, text: "text-2xl", sub: "text-[10.5px] tracking-[0.2em]" },
  }[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 select-none no-underline transition-transform hover:opacity-95 ${className}`}
      aria-label="YES LOGISTICS SERVICE - Home"
    >
      {/* Authentic YLS Monogram Extracted from PDF with Red Colorway */}
      <div className="relative shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
        <Image
          src="/logo/yls-monogram-red.png"
          alt="YLS Monogram Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* Brand Typography */}
      {variant !== "monogram" && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5 font-display font-black tracking-tight">
            <span
              className={`${dimensions.text} transition-colors ${
                isDarkBg ? "text-white" : "text-[#020e28]"
              }`}
            >
              YES
            </span>
            <span className={`${dimensions.text} text-[#fd5523]`}>
              LOGISTICS
            </span>
          </div>

          <span
            className={`${dimensions.sub} font-bold uppercase mt-1 transition-colors ${
              isDarkBg ? "text-slate-300" : "text-[#535353]"
            }`}
          >
            AN ENTIRE LOGISTICS SOLUTION
          </span>
        </div>
      )}
    </Link>
  );
}
