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

  const sizeClasses = {
    sm: "h-9",
    md: "h-11",
    lg: "h-14",
  }[size];

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 select-none no-underline transition-transform hover:opacity-95 ${className}`}
      aria-label="YES LOGISTICS SERVICE - Home"
    >
      {/* Actual YLS Monogram Logo from PDF */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* High-res authentic YLS monogram from PDF */}
          <div className="relative w-11 h-11 transition-transform group-hover:scale-105 duration-300">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="ylsArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#175A9D" />
                  <stop offset="70%" stopColor="#1E6FC2" />
                  <stop offset="100%" stopColor="#F8C62E" />
                </linearGradient>
                <linearGradient id="ylsBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F4172" />
                  <stop offset="100%" stopColor="#175A9D" />
                </linearGradient>
              </defs>

              {/* Bold 'Y' */}
              <path
                d="M16 28 L28 48 L28 72 L38 72 L38 48 L50 28 L38 28 L33 40 L28 28 Z"
                fill="url(#ylsBlueGrad)"
              />
              {/* Bold 'L' */}
              <path
                d="M44 28 L44 72 L66 72 L66 62 L54 62 L54 28 Z"
                fill="url(#ylsBlueGrad)"
              />
              {/* Bold 'S' with dynamic curves */}
              <path
                d="M84 36 C84 30 78 27 70 27 C60 27 55 33 55 40 C55 52 74 48 74 58 C74 63 68 65 62 65 C54 65 50 60 50 56 L41 57 C41 68 50 73 63 73 C75 73 83 67 83 57 C83 45 64 48 64 40 C64 36 68 34 71 34 C76 34 77 36 77 38 Z"
                fill="#F8C62E"
              />

              {/* Dynamic curved swoosh arrow wrapping around the monogram */}
              <path
                d="M8 72 C12 82 28 88 48 83 C72 77 88 56 86 38 C84 25 74 16 62 14 C48 12 36 20 32 28"
                stroke="url(#ylsArrowGrad)"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Arrow Head */}
              <polygon
                points="34,22 28,32 40,32"
                fill="#175A9D"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Text */}
      {variant !== "monogram" && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight text-lg sm:text-xl font-display ${
                isDarkBg ? "text-white" : "text-[#06112E]"
              }`}
            >
              YES LOGISTICS
            </span>
            <span className="text-primary font-black text-sm tracking-wider uppercase">
              SERVICE
            </span>
          </div>
          <span
            className={`text-[9.5px] font-bold tracking-[0.16em] uppercase ${
              isDarkBg ? "text-brand-yellow" : "text-[#175A9D]"
            }`}
          >
            AN ENTIRE LOGISTICS SOLUTION
          </span>
        </div>
      )}
    </Link>
  );
}
