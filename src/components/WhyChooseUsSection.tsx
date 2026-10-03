"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import QuickContactModal from "./QuickContactModal";
import {
  ShieldCheck,
  Building2,
  Truck,
  Compass,
  PhoneCall,
  Award,
  CheckCircle,
  ArrowRight,
  FileText,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const TRUST_PILLARS = [
  {
    id: "govt-registered",
    icon: ShieldCheck,
    tag: "UDYAM & GST REGISTERED",
    title: "100% Statutory Compliance",
    desc: "Officially registered MSME enterprise (UDYAM-MH-26-0145431), GSTIN 27AYYPM*****1ZH, and Shop Act certified operating under the Motor Vehicles Act with open transit insurance coverage.",
    metric: "100% Legal Integrity",
    highlight: "Zero Compliance Defect",
  },
  {
    id: "branch-network",
    icon: Building2,
    tag: "5 STATE HUBS",
    title: "Pan-India Branch Network",
    desc: "Physical operational offices and field handlers in Pune (HQ), Bangalore (Karnataka), Vadodara (Gujarat), Jeypore (Odisha), and Prayagraj (UP) ensuring local coordination at every loading dock.",
    metric: "5 Multi-State Hubs",
    highlight: "Nationwide Route Access",
  },
  {
    id: "multi-scale-fleet",
    icon: Truck,
    tag: "1.0T TO 150T FLEET",
    title: "Multi-Capacity Vehicle Range",
    desc: "Operating all fleet sizes: nimble Mahindra Bolero pickups for express city dispatch, multi-axle 16T-25T Taurus trucks, 32ft closed containers, and 150-ton hydraulic modular trailers.",
    metric: "Complete Vehicle Range",
    highlight: "From Pickups to Modular Axles",
  },
  {
    id: "odc-route-clearance",
    icon: Compass,
    tag: "TURNKEY ODC PERMITS",
    title: "Route Surveys & Convoy Escorts",
    desc: "Turnkey road feasibility surveys, bridge load assessments, power line shutdowns, civil traffic coordination, dedicated pilot escort vehicles, and 50-ton mobile cranes for heavy machinery.",
    metric: "52m Girder Clearance",
    highlight: "Specialized Heavy Lift",
  },
  {
    id: "dual-dispatch-desk",
    icon: PhoneCall,
    tag: "24/7 HUMAN ASSISTANCE",
    title: "Live Dispatch Helpline & WhatsApp",
    desc: "Direct access to central dispatch controllers via dedicated Phone and WhatsApp hotlines (+91 70200 57149 & +91 70212 77197) with live milestone GPS consignment updates.",
    metric: "10-Min Fast Reply",
    highlight: "Always-On Support",
  },
  {
    id: "tier1-clientele",
    icon: Award,
    tag: "20+ INDUSTRIAL CLIENTS",
    title: "Trusted by Tier-1 Enterprises",
    desc: "Proud long-term logistics contractor for industry titans including CEVA Logistics, Belden India, Wilo Pumps, KSH International, DVB Design Engineering, and Eagle Construction.",
    metric: "20+ Enterprise Clients",
    highlight: "High Retention Track Record",
  },
];

export default function WhyChooseUsSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="choose-sec bg-white sec-padding relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[130px]"
        aria-hidden="true"
      />

      <div className="max-w-[1640px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-3">
              <TruckIcon />
              WHY INDUSTRY LEADERS CHOOSE YES LOGISTICS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark tracking-tight leading-[1.12]">
              Engineered for Zero-Risk Heavy &amp; Express Cargo Movement
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Established in Pune in 2021, <strong className="text-dark font-semibold">YES LOGISTICS SERVICE</strong> bridges industrial consignments with verified fleet ownership, legal compliance under the Motor Vehicles Act, multi-state branch hubs, and dedicated route escorts.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="shrink-0 flex items-center gap-4 bg-[#020e28] text-white px-6 py-4 rounded-2xl shadow-xl border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xl font-bold">
              ✓
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-heading font-black text-white block leading-none">
                100% Insured
              </span>
              <p className="text-xs text-slate-300 font-medium mt-1">
                Motor Vehicles Act &bull; Pan-India Coverage
              </p>
            </div>
          </div>
        </div>

        {/* 6 High-Trust Pillars Grid (Like omsaibpl's trust layout, elevated to world-class enterprise standards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-[#f8fafc] hover:bg-white rounded-[26px] p-7 sm:p-8 border border-slate-200/80 hover:border-primary/40 shadow-sm hover:shadow-[0_20px_50px_rgba(2,14,40,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Number Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md border border-slate-100">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-heading font-black text-slate-200 group-hover:text-primary/20 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Tag Pill */}
                  <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-2">
                    {pillar.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-dark group-hover:text-primary transition-colors leading-snug mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Card Foot Metric */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="font-heading font-bold text-dark">
                    {pillar.metric}
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Operational Reassurance Banner with Direct Call Action */}
        <div className="mt-12 sm:mt-16 rounded-[28px] bg-gradient-to-r from-[#020e28] via-[#041945] to-[#020e28] text-white p-6 sm:p-10 shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase font-heading font-bold text-primary tracking-wider">
              READY FOR RAPID DEPLOYMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              Have a Consignment or Factory Route Inquiry?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Speak directly with our central dispatch controllers in Pune or connect on WhatsApp for immediate vehicle availability and all-India freight estimates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="btn-primary py-3.5 px-6 sm:px-8 text-sm flex items-center gap-2 cursor-pointer shadow-glow"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Call / WhatsApp Dispatch</span>
            </button>

            <Link
              href="/quote"
              className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/10 text-white font-heading font-bold text-sm transition"
            >
              Get Detailed Quote &rarr;
            </Link>
          </div>
        </div>
      </div>

      <QuickContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
