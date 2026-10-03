"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import QuickContactModal from "./QuickContactModal";
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

export const CORE_DIVISIONS = [
  {
    id: "odc-heavy-haulage",
    badge: "SPECIALIZED DIVISION &bull; TURNKEY ODC",
    title: "Over Dimensional Cargo (ODC) & Hydraulic Modular Axles",
    subtitle: "Pan-India heavy lift transport for oversized industrial machinery, power equipment, and infrastructure girders.",
    description:
      "YES LOGISTICS SERVICE is recognized across India as an authoritative specialist in ODC movements. We handle complex structural steel, 52-meter girders, industrial transformers, boilers, and turbine equipment using heavy hydraulic modular pullers, drop-decks, and low-bed mechanical trailers with total statutory permit clearances.",
    points: [
      "Turnkey route feasibility studies, bridge capacity checks, and overhead clearance surveys",
      "Hydraulic modular multi-axles capable of handling up to 150+ Ton single-piece cargo",
      "Dedicated pilot escort vehicles with warning beacons and route escorts across state borders",
      "100% legal compliance under the Motor Vehicles Act with comprehensive transit insurance",
    ],
    image: "/images/yls/yls-odc-trailer.jpg",
    imageAlt: "YES Logistics ODC trailer fleet at an industrial facility",
    imageCaption: "ODC Heavy Modular Axle & Trailer Fleet",
    reverse: false,
  },
  {
    id: "ftl-taurus-fleet",
    badge: "FULL TRUCKLOAD (FTL) &bull; ALL INDIA",
    title: "Multi-Axle Taurus & Heavy Long-Haul Fleet",
    subtitle: "High-capacity open-body and 10/12-wheeler Taurus trucks for industrial raw materials and plant deliveries.",
    description:
      "Our multi-axle Taurus and standard heavy truck fleet operates on dedicated freight corridors linking Maharashtra, Gujarat, Karnataka, Odisha, and Uttar Pradesh. We guarantee swift vehicle placement at industrial hubs including Chakan, Bhosari, Talegaon, and Sanand.",
    points: [
      "16-Ton to 25-Ton multi-axle Taurus trucks with national interstate permits",
      "Specialized carriage for steel coils, industrial metals, pipes, and fabrication assemblies",
      "Experienced vetted drivers and continuous GPS transit tracking from origin to dock",
      "Rapid vehicle placement on short notice across all major industrial clusters",
    ],
    image: "/images/work/work-02.jpeg",
    imageAlt: "YES Logistics multi-axle truck fleet loaded and ready for dispatch",
    imageCaption: "Multi-Axle Taurus Fleet & Dedicated Long-Haul Carriers",
    reverse: true,
  },
  {
    id: "covered-warehousing",
    badge: "STORAGE & TRANSIT STAGING &bull; PUNE HUB",
    title: "Covered Warehousing & Industrial Yard Storage",
    subtitle: "Modern covered storage and open yard facilities in Chinchwad, Pune for inventory staging and cross-docking.",
    description:
      "Strategically situated in the Chinchwad industrial corridor of Pune, our facility provides secure, weather-protected storage for finished machinery, raw materials, and transit staging. Equipped with material handling systems, overhead cranes, and 24/7 security.",
    points: [
      "Heavy-duty industrial racking and weather-protected covered warehouse bays",
      "Expansive open yard for container holding, trailer parking, and large-footprint machinery",
      "Consignment consolidation, repacking, and cross-docking for onward pan-India transit",
      "Comprehensive storage and transit risk coverage under open marine insurance policy",
    ],
    image: "/images/yls/yls-warehouse-racks.jpg",
    imageAlt: "YES Logistics covered warehouse racks and storage facility in Pune",
    imageCaption: "15,000+ Sq. Ft. Covered Warehousing & Staging Yard",
    reverse: false,
  },
  {
    id: "express-pickups",
    badge: "SMALL & MEDIUM VEHICLES &bull; EXPRESS DELIVERY",
    title: "Mini Trucks & Mahindra Bolero Pickup Fleet",
    subtitle: "Point-to-point urban shuttles, factory-to-dock deliveries, and express regional cargo movements.",
    description:
      "Understanding that modern supply chains require agile, rapid transportation alongside heavy haulage, YES Logistics operates a versatile fleet of Mahindra Bolero Maxi Trucks, Tata 407s, and LCVs. Ideal for rapid parcel movements, emergency machine breakdown spares, and direct factory-to-airport/railhead logistics.",
    points: [
      "1.0-Ton to 3.5-Ton Mahindra Bolero pickups and LCVs for rapid same-day dispatches",
      "Quick loading and dock access in congested industrial zones without truck entry restrictions",
      "Dedicated transport for factory machine parts, precision electricals, and urgent components",
      "Seamless integration with our Pune central warehouse for local distribution and staging",
    ],
    image: "/images/work/work-12.jpeg", // The exact Bolero Pickup (GJ15AX0860) at warehouse dock
    imageAlt: "Mahindra Bolero Maxi Truck at YES Logistics warehouse loading dock",
    imageCaption: "Mahindra Bolero Pickup Fleet & LCV Urban Logistics",
    reverse: true,
  },
];

export default function CoreOperationsShowcase() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative bg-white sec-padding overflow-hidden">
      <div className="max-w-[1640px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-3">
            <TruckIcon />
            SPECIALIZED CORE OPERATIONS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark tracking-tight leading-[1.12]">
            Comprehensive Transport &amp; Heavy Lift Capabilities
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Examine our key operational divisions delivering dependable freight movement across Indian highways every single day.
          </p>
        </div>

        {/* Alternating Z-Pattern Showcase Rows (Inspired by omsaibpl's high-trust presentation) */}
        <div className="space-y-16 sm:space-y-24">
          {CORE_DIVISIONS.map((division) => (
            <div
              key={division.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center ${
                division.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  division.reverse ? "lg:col-start-7" : ""
                }`}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-heading font-bold text-[11px] uppercase tracking-wider">
                  {division.badge}
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight leading-tight">
                  {division.title}
                </h3>

                <p className="text-primary font-heading font-bold text-sm sm:text-base leading-snug">
                  {division.subtitle}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {division.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 pt-2">
                  {division.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(true)}
                    className="btn-primary py-3 px-6 text-sm flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>Inquire for This Fleet</span>
                  </button>

                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-dark hover:text-primary transition"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Photo Column */}
              <div
                className={`lg:col-span-6 ${
                  division.reverse ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_60px_rgba(2,14,40,0.15)] ring-1 ring-slate-200/80 aspect-[16/11] bg-slate-100 group">
                  <Image
                    src={division.image}
                    alt={division.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent pointer-events-none" />

                  {/* Caption Bar */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between bg-dark/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-white">
                    <span className="text-xs sm:text-sm font-heading font-bold drop-shadow">
                      {division.imageCaption}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified YLS Fleet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuickContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
