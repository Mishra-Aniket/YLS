"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface YLSLogoProps {
  variant?: "light" | "dark" | "horizontal";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

// Emblem display heights and matching wordmark typography per size
const SIZES: Record<string, { emblem: number; name: number; sub: number; gap: string }> = {
  sm: { emblem: 38, name: 15, sub: 10, gap: "gap-2" },
  md: { emblem: 48, name: 18, sub: 11, gap: "gap-2.5" },
  lg: { emblem: 58, name: 21, sub: 12, gap: "gap-3" },
  xl: { emblem: 72, name: 26, sub: 14, gap: "gap-3.5" },
};

// Aspect ratio of the cleaned transparent emblem asset (w/h)
const EMBLEM_AR = 1036 / 692;

export default function YLSLogo({
  variant = "light",
  size = "md",
  className = "",
}: YLSLogoProps) {
  const isDark = variant === "dark";
  const s = SIZES[size] || SIZES.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none no-underline ${s.gap} ${className}`}
      aria-label="YES LOGISTICS SERVICE - Home"
    >
      <Image
        src="/logo/yls_emblem.png"
        alt=""
        width={Math.round(s.emblem * EMBLEM_AR)}
        height={s.emblem}
        priority
        className="object-contain shrink-0"
        style={{ height: s.emblem, width: "auto" }}
      />

      {/* Wordmark: bold name on top, letterspaced tagline below (TransHub-style lockup) */}
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`font-heading font-extrabold whitespace-nowrap ${
            isDark ? "text-white" : "text-dark"
          }`}
          style={{ fontSize: s.name, letterSpacing: "0.01em" }}
        >
          YES LOGISTICS
        </span>
        <span
          className="font-heading font-bold text-primary leading-none mt-[3px]"
          style={{ fontSize: s.sub, letterSpacing: "0.42em" }}
        >
          SERVICE
        </span>
      </span>
    </Link>
  );
}
