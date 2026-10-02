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

  // Monogram dimensions (uploaded monogram aspect ratio: 324 / 178 ≈ 1.82)
  const dimensions = {
    sm: { width: 62, height: 34, title: "text-base sm:text-lg", sub: "text-[7.5px] tracking-[0.14em]" },
    md: { width: 76, height: 42, title: "text-lg sm:text-xl", sub: "text-[8.5px] tracking-[0.16em]" },
    lg: { width: 95, height: 52, title: "text-xl sm:text-2xl", sub: "text-[10px] tracking-[0.18em]" },
  }[size];

  // If stacked variant is requested, use the full authentic crop from uploaded sticker
  if (variant === "stacked") {
    const stackedSizes = {
      sm: { width: 160, height: 87 },
      md: { width: 220, height: 120 },
      lg: { width: 280, height: 153 },
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
      className={`group inline-flex items-center gap-2.5 sm:gap-3 select-none no-underline transition-transform hover:opacity-95 ${className}`}
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

      {/* 2. Brand Typography matching the uploaded emblem exactly */}
      {variant !== "monogram" && (
        <div className="flex flex-col justify-center leading-none">
          {/* '— YES —' in brand red */}
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-3.5 h-[1.5px] bg-[#c81010]" />
            <span className="text-[#c81010] font-black text-[11px] sm:text-xs tracking-widest uppercase">
              YES
            </span>
            <span className="w-3.5 h-[1.5px] bg-[#c81010]" />
          </div>

          {/* 'LOGISTICS SERVICE' */}
          <div className="font-display font-black tracking-tight leading-tight">
            <span
              className={`${dimensions.title} transition-colors uppercase ${
                isDarkBg ? "text-white" : "text-[#020e28]"
              }`}
            >
              LOGISTICS SERVICE
            </span>
          </div>

          {/* 'Transport & Logistics Solutions' */}
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-2.5 h-[1px] bg-[#c81010]/80" />
            <span
              className={`${dimensions.sub} font-bold tracking-wider uppercase transition-colors ${
                isDarkBg ? "text-slate-300" : "text-[#535353]"
              }`}
            >
              Transport &amp; Logistics Solutions
            </span>
            <span className="w-2.5 h-[1px] bg-[#c81010]/80" />
          </div>
        </div>
      )}
    </Link>
  );
}
