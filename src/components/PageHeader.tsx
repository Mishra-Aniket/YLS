"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative bg-navy-dark text-white pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden border-b border-white/10 select-none">
      {/* Decorative truck vector pattern on background */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 hidden md:block">
        <Image
          src="/images/tranck-v.png"
          alt="Truck outline"
          width={380}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Decorative geometric accent */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-25">
        <Image
          src="/images/slide-sh1.png"
          alt="Shape"
          width={350}
          height={250}
          className="object-contain"
        />
      </div>

      {/* Subtle orange glow */}
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb Navigation */}
        <nav
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold text-slate-300 mb-6"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-brand-yellow transition flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={bc.label}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {bc.href ? (
                <Link href={bc.href} className="hover:text-brand-yellow transition">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-brand-yellow font-bold">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
