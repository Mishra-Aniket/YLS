"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Award } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navbar */}
      <Navbar variant="floating" />

      {/* 2. Hero Banner */}
      <PageHeader
        title="Logistics Case Studies & Project Handover"
        subtitle="Explore documented execution blueprints of over-dimensional cargo (ODC), multi-state fleet coordination, and heavy mobile crane deployments."
        breadcrumbs={[{ label: "Case Studies" }]}
      />

      {/* 3. Case Studies Detailed Grid */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Thumbnail with Overlay Badge */}
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-100">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full bg-navy-dark text-brand-yellow font-bold text-xs uppercase tracking-wider shadow-sm">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {study.location}
                      </span>
                      <span className="bg-primary/90 px-2.5 py-1 rounded-full font-bold">
                        {study.stats.label}: {study.stats.value}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-black text-[#06112E] font-display group-hover:text-primary transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                      <span className="font-bold text-slate-500 uppercase block mb-1">
                        Cargo Specification:
                      </span>
                      <p className="font-bold text-slate-800">{study.cargo}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="text-slate-600 leading-relaxed">
                        <strong className="text-[#06112E]">The Challenge:</strong> {study.challenge}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong className="text-[#06112E]">YLS Solution:</strong> {study.solution}
                      </p>
                      <div className="pt-2 text-emerald-800 font-semibold flex items-start gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Outcome:</strong> {study.result}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-between w-full py-3 px-5 rounded-2xl bg-slate-100 hover:bg-primary hover:text-white text-xs font-bold text-slate-800 transition"
                  >
                    <span>Request Similar Project Logistics</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
