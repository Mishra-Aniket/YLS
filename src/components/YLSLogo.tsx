"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface YLSLogoProps {
  variant?: "light" | "dark" | "pill" | "monogram" | "stacked";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function YLSLogo({
  variant = "light",
  size = "md",
  className = "",
}: YLSLogoProps) {
  const isDarkBg = variant === "dark";

  // Monogram dimensions (aspect ratio ~1.82:1)
  const dimensions = {
    sm: { width: 56, height: 31, title: "text-sm sm:text-base", sub: "text-[7px] sm:text-[7.5px]" },
    md: { width: 72, height: 40, title: "text-base sm:text-lg", sub: "text-[8px] sm:text-[8.5px]" },
    lg: { width: 90, height: 50, title: "text-lg sm:text-xl", sub: "text-[9px] sm:text-[10px]" },
  }[size];

  // If stacked variant is requested, use the authentic crop from uploaded sticker
  if (variant === "stacked") {
    const stackedSizes = {
      sm: { width: 150, height: 82 },
      md: { width: 210, height: 114 },
      lg: { width: 270, height: 147 },
    }[size];

    return (
      <Link
        href="/"
        className={`group inline-flex items-center justify-center select-none no-underline transition-transform hover:opacity-95 ${className}`}
        aria-label="YES LOGISTICS SERVICE - Home"
      >
        <Image
          src={isDarkBg ? "/logo/yls_full_logo_white.png" : "/logo/yls_full_logo_uploaded.png"}
          alt="YES LOGISTICS SERVICE Logo"
          width={stackedSizes.width}
          height={stackedSizes.height}
          priority
          className="object-contain drop-shadow-sm transition-transform group-hover:scale-105 duration-200"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 sm:gap-2.5 select-none no-underline transition-transform hover:opacity-95 ${className}`}
      aria-label="YES LOGISTICS SERVICE - Home"
    >
      {/* 1. Exact Red YLS Monogram with Curved Arrow Swoosh (from uploaded image) */}
      <div className="relative shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
        <Image
          src="/logo/yls_monogram_uploaded.png"
          alt="YLS Monogram Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* 2. Brand Typography matching uploaded emblem exactly */}
      {variant !== "monogram" && (
        <div className="flex flex-col justify-center leading-none">
          {/* '— YES —' in brand red */}
          <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
            <span className="w-2.5 sm:w-3 h-[1.5px] bg-[#c81010]" />
            <span className="text-[#c81010] font-black text-[10px] sm:text-xs tracking-widest uppercase">
              YES
            </span>
            <span className="w-2.5 sm:w-3 h-[1.5px] bg-[#c81010]" />
          </div>

          {/* 'LOGISTICS SERVICE' */}
          <div className="font-display font-black tracking-tight leading-tight">
            <span
              className={`${dimensions.title} transition-colors uppercase whitespace-nowrap ${
                isDarkBg ? "text-white" : "text-[#020e28]"
              }`}
            >
              LOGISTICS SERVICE
            </span>
          </div>

          {/* 'Transport & Logistics Solutions' */}
          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
            <span className="w-2 sm:w-2.5 h-[1px] bg-[#c81010]/80" />
            <span
              className={`${dimensions.sub} font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${
                isDarkBg ? "text-slate-300" : "text-[#64748b]"
              }`}
            >
              Transport &amp; Logistics Solutions
            </span>
            <span className="w-2 sm:w-2.5 h-[1px] bg-[#c81010]/80" />
          </div>
        </div>
      )}
    </Link>
  );
}
