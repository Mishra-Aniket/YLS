"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import BranchSection from "@/components/BranchSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  Compass,
  Award,
  Truck,
  Building,
  Calendar,
  Phone,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navbar */}
      <Navbar variant="floating" />

      {/* 2. Hero Banner */}
      <PageHeader
        title="About YES Logistics Service"
        subtitle="Pune-registered fleet owner & transport contractor dedicated to dependable freight, mechanical trailers, and ODC movements across India."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 3. Company Introduction & Overview */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-slate-100 aspect-[4/3]">
                <Image
                  src="/images/yls/yls-odc-trailer.jpg"
                  alt="YES Logistics Service ODC Consignment Trailer"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-navy-dark text-white p-6 rounded-3xl shadow-2xl border border-white/10 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-navy-dark flex items-center justify-center font-black text-xl">
                    ✓
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white font-display">2021</span>
                    <p className="text-xs text-brand-yellow font-bold uppercase tracking-wider">
                      Established 1 July 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>COMPANY INTRODUCTION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06112E] font-display leading-tight">
                One of India’s Dedicated Transport &amp; ODC Specialists
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                We introduce ourselves as one of the leading transport companies of the country with Pune. We are an established concern namely <strong>YES LOGISTICS SERVICE Pune (M.H.)</strong> registered in Pune on <strong>1st of July 2021</strong>, with the chief motive to cater to the needs and requirements of our customers with utmost sincerity and dedication.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We have competent staff to handle critical jobs at Docks Area, Field Area, and deliver perfectly in time within safety segments. We ensure transport procedures are strictly in line with respective Motor Vehicles Act legislation.
              </p>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Firm Type
                  </span>
                  <p className="text-sm font-bold text-[#06112E] mt-0.5">
                    Fleet Owner &amp; Contractor
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Geographic Reach
                  </span>
                  <p className="text-sm font-bold text-[#06112E] mt-0.5">
                    All Over India
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    UDYAM Regd
                  </span>
                  <p className="text-xs font-bold text-slate-700 font-mono mt-0.5">
                    {COMPANY.registration.udyam}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    GST Number
                  </span>
                  <p className="text-xs font-bold text-slate-700 font-mono mt-0.5">
                    {COMPANY.registration.gst}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision, Mission & Quality Promise */}
      <section className="py-20 bg-[#F5F7FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#06112E] font-display">
              Vision, Mission &amp; Quality Promise
            </h2>
            <p className="text-slate-500 text-sm">
              The fundamental pillars that govern our fleet operations, customer commitments, and safety records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#06112E] font-display">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Market leadership with effective systems and excellence in service standards for profitable, sustainable growth across Indian transportation.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Service Excellence
                </span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-navy-dark text-white rounded-3xl p-8 shadow-card border border-white/10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow text-[#06112E] flex items-center justify-center font-bold">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white font-display">
                  Our Mission
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We are committed to achieving customer delight and pursuit of excellence through continuous improvement in quality service, human resources enhancement, and customized corporate solutions as a trusted Business Partner.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="text-xs font-bold text-brand-yellow flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Customer Delight
                </span>
              </div>
            </div>

            {/* Quality Promise Card */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#175A9D]/10 text-[#175A9D] flex items-center justify-center font-bold">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#06112E] font-display">
                  Quality Promise
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The quality of service YES LOGISTICS SERVICE offers is the key factor in our continued success. Our commitment to quality is reflected in our highly trained team serving customers looking for the highest grade of safety and execution.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-[#175A9D] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  100% Quality Assurance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Branch Network */}
      <BranchSection />

      {/* 6. Corporate Clients */}
      <ClientsSection />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
