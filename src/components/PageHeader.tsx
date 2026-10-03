"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import { getAssetPath } from "@/lib/imageLoader";

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
    <section
      className="relative bg-dark text-white pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden border-b border-white/10 select-none bg-cover bg-center"
      style={{
        backgroundImage: `url('${getAssetPath("/images/yls/yls-odc-trailer.jpg")}')`,
      }}
    >
      {/* Dark overlay so the real fleet photo reads as a subtle background */}
      <div className="absolute inset-0 bg-[#020e28]/85" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-heading font-semibold text-slate-300 mb-6"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-primary transition flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((bc) => (
            <React.Fragment key={bc.label}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {bc.href ? (
                <Link href={bc.href} className="hover:text-primary transition">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-primary font-bold">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-slate-300 font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
