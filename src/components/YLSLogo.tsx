"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface YLSLogoProps {
  variant?: "light" | "dark" | "horizontal";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function YLSLogo({
  variant = "light",
  size = "md",
  className = "",
}: YLSLogoProps) {
  const isDark = variant === "dark";

  // Height configurations
  const heightMap = {
    sm: 42,
    md: 50,
    lg: 60,
  };
  const h = heightMap[size] || 50;
  // Aspect ratio of the authentic uploaded logo is 644/305 ~= 2.11
  const w = Math.round(h * 2.11);

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none no-underline transition-transform hover:opacity-95 duration-200 ${className}`}
      aria-label="YES LOGISTICS SERVICE - Home"
    >
      <div className="relative flex items-center justify-center">
        <Image
          src={isDark ? "/logo/yls_logo_dark.png" : "/logo/yls_logo_navbar.png"}
          alt="YES LOGISTICS SERVICE"
          width={w}
          height={h}
          priority
          className="object-contain drop-shadow-sm h-auto max-h-[56px] w-auto"
        />
      </div>
    </Link>
  );
}
