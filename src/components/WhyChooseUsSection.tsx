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
} from "lucide-react";

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
    desc: "Proud long-term logistics contractor for industry leaders including CEVA Logistics, Belden India, Wilo Pumps, KSH International, DVB Design Engineering, and Eagle Construction.",
    metric: "20+ Enterprise Clients",
    highlight: "High Retention Track Record",
  },
];

export default function WhyChooseUsSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="choose-sec bg-shade sec-padding relative overflow-hidden">
      {/* Decorative shape matching TransHub choose-sh.png */}
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-40 anim-jumping">
        <Image
          src="/images/choose-sh.png"
          alt=""
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Row: TransHub Split Layout (Media Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          
          {/* Left Column: Overlapping Media matching TransHub .choose-media */}
          <div className="lg:col-span-6 relative">
            <div className="choose-media relative max-w-lg mx-auto lg:max-w-none">
              {/* Primary Image: Real YES Logistics Fleet Lined Up */}
              <div className="relative rounded-[30px] overflow-hidden shadow-card aspect-[4/3] w-11/12 bg-slate-900 group">
                <Image
                  src="/images/work/work-02.jpeg"
                  alt="YES Logistics Service own fleet lined up ready for dispatch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Secondary Overlapping Image: Real Machinery Haulage on Low-Bed Trailer */}
              <div className="relative -mt-20 ml-auto w-3/5 aspect-[4/3] rounded-[30px] overflow-hidden shadow-2xl border-4 border-white z-10 bg-slate-900 group">
                <Image
                  src="/images/work/work-10.jpeg"
                  alt="YES Logistics low-bed trailer transporting heavy industrial machinery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Stat Pill on Media */}
              <div className="absolute bottom-6 left-2 sm:left-6 z-20 bg-dark text-white px-5 py-4 rounded-[20px] shadow-2xl flex items-center gap-3.5 border border-white/10">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xl font-heading font-extrabold text-white block leading-none">
                    100% Pan-India
                  </span>
                  <p className="text-xs text-slate-300 font-medium mt-1">Verified Fleet Readiness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: TransHub Content with Skill Bars & Circular Rates */}
          <div className="lg:col-span-6 choose-content space-y-6">
            <span className="sub-title">
              <TruckIcon />
              WHY CHOOSE US
            </span>

            <h2 className="sec-title">
              Why We Are Considered The Best in Transportation
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Established in Pune in 2021, <strong className="text-dark font-semibold">YES LOGISTICS SERVICE</strong> bridges industrial consignments with verified fleet ownership, legal compliance under the Motor Vehicles Act, multi-state branch hubs, and dedicated route escorts.
            </p>

            {/* TransHub Progress Bars */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between items-center text-sm font-heading font-bold text-dark mb-1.5">
                  <span>Warehousing &amp; Fleet Management</span>
                  <span className="text-primary font-extrabold">95%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: "95%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm font-heading font-bold text-dark mb-1.5">
                  <span>Safe &amp; Compliant Heavy Haulage</span>
                  <span className="text-primary font-extrabold">99%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: "99%" }}
                  />
                </div>
              </div>
            </div>

            {/* TransHub Circular Rate Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-2xl shadow-sm border border-slate-200/80">
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="text-base font-heading font-extrabold text-primary">99.4%</span>
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-dark leading-tight">
                    On-Time Delivery Rate
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Pan-India Express Tracking</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-2xl shadow-sm border border-slate-200/80">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center shrink-0">
                  <span className="text-base font-heading font-extrabold text-emerald-600">99.8%</span>
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-dark leading-tight">
                    Zero-Damage Record
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Open Marine Insurance Cover</p>
                </div>
              </div>
            </div>

            {/* Quick Call Box matching TransHub */}
            <div className="pt-2">
              <h3 className="text-base sm:text-lg font-heading font-bold text-dark">
                Do you have any project or consignment on your mind?{" "}
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="text-primary hover:text-emerald-600 underline font-bold cursor-pointer transition-colors"
                >
                  Call Us: +91 70200 57149 / 70212 77197
                </button>
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Section: 6 High-Trust Pillars Grid */}
        <div className="border-t border-slate-200/80 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="sub-title">
              <TruckIcon />
              BUILT ON PROVEN INTEGRITY
            </span>
            <h3 className="sec-title text-2xl sm:text-3xl lg:text-4xl">
              Engineered for Zero-Risk Heavy &amp; Express Cargo Movement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TRUST_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative bg-white hover:bg-white rounded-[26px] p-7 sm:p-8 border border-slate-200/80 hover:border-primary/40 shadow-sm hover:shadow-[0_20px_50px_rgba(2,14,40,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Number Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-100">
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
                    <h4 className="text-xl font-heading font-bold text-dark group-hover:text-primary transition-colors leading-snug mb-3">
                      {pillar.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Card Foot Metric */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
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
        </div>
      </div>

      <QuickContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}

