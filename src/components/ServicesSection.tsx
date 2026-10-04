"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";

export interface FleetServiceCard {
  id: string;
  category: string;
  vehicleType: string;
  capacityTag: string;
  capacityColor: string;
  title: string;
  shortDesc: string;
  image: string;
  badges: string[];
  link: string;
}

export const FLEET_SERVICES: FleetServiceCard[] = [
  {
    id: "mini-trucks",
    category: "Small Commercial Vehicles (SCV / LCV)",
    vehicleType: "Bolero Pickup / Mini Truck",
    capacityTag: "1.0 Ton — 3.5 Ton",
    capacityColor: "bg-emerald-600 text-white",
    title: "Mini Trucks & Pickup Fleet",
    shortDesc: "Point-to-point intracity and regional dispatch with Mahindra Bolero Maxi Trucks, Tata 407, and LCVs for rapid factory delivery, dock handling, and urgent consignments.",
    image: "/images/work/work-12.jpeg", // Mahindra Bolero Maxi Truck (GJ15AX0860) at warehouse dock
    badges: ["Intracity Express", "Factory-to-Dock", "Fast Loading"],
    link: "/services#fleet-truck",
  },
  {
    id: "closed-container",
    category: "All-Weather Cargo Protection",
    vehicleType: "GPS Closed Container Truck",
    capacityTag: "20ft — 32ft Containers",
    capacityColor: "bg-blue-600 text-white",
    title: "Closed Container Fleet",
    shortDesc: "All-weather sealed container trucks for electronics, sensitive auto parts, FMCG, and high-value cargo with real-time GPS tracking and tamper-proof security.",
    image: "/images/work/work-03.jpeg",
    badges: ["Waterproof Sealed", "GPS Monitored", "Zero In-Transit Damage"],
    link: "/services#fleet-truck",
  },
  {
    id: "taurus-trucks",
    category: "Heavy Full Truck Load (FTL)",
    vehicleType: "Multi-Axle Taurus 10/12-Wheeler",
    capacityTag: "16 Ton — 25 Ton",
    capacityColor: "bg-amber-600 text-white",
    title: "Multi-Axle Taurus & Open Trucks",
    shortDesc: "High-capacity multi-axle Taurus trucks and open-body carriers for industrial metals, coils, construction supplies, and raw materials across state borders.",
    image: "/images/work/work-02.jpeg",
    badges: ["Full Truckload", "National Permit", "Heavy Capacity"],
    link: "/services#fleet-truck",
  },
  {
    id: "flatbed-trailers",
    category: "Machinery & Structural Haulage",
    vehicleType: "40ft & 50ft Mechanical Flatbed",
    capacityTag: "25 Ton — 45 Ton",
    capacityColor: "bg-purple-600 text-white",
    title: "Flatbed & Semi-Low Bed Trailers",
    shortDesc: "Heavy mechanical flatbed trailers engineered for long-length structural steel, heavy plates, industrial cranes, and machinery movement across national corridors.",
    image: "/images/work/work-10.jpeg",
    badges: ["40ft / 50ft Flatbed", "Low-Bed Deck", "Pan-India Route"],
    link: "/services#trailer-services",
  },
  {
    id: "odc-consignment",
    category: "Over Dimensional Cargo (ODC)",
    vehicleType: "Hydraulic Multi-Axle Trailer",
    capacityTag: "40 Ton — 150+ Ton",
    capacityColor: "bg-primary text-white",
    title: "ODC & Hydraulic Modular Axles",
    shortDesc: "Specialized hydraulic axle pullers, drop-deck and modular trailers for oversized transformers, boilers, structural girders, and heavy industrial machinery across India.",
    image: "/images/yls/yls-odc-trailer.jpg",
    badges: ["Route Permits", "Hydraulic Axles", "100% Safety"],
    link: "/services#odc-consignment",
  },
  {
    id: "escort-safety",
    category: "Pilot Convoy & Crane Handover",
    vehicleType: "Escort Vehicles & Cranes",
    capacityTag: "Dedicated Pilot & 50T Cranes",
    capacityColor: "bg-red-600 text-white",
    title: "Convoy Escorts & Mobile Cranes",
    shortDesc: "Dedicated escort pilot vehicles with warning beacons, road clearance coordinators, and on-site hydraulic mobile cranes for safe heavy loading & unloading.",
    image: "/images/work/work-11.jpeg",
    badges: ["Traffic Clearance", "Site Crane Rigging", "Emergency Support"],
    link: "/services#escort-safety",
  },
  {
    id: "warehousing-staging",
    category: "Storage & Logistics Staging",
    vehicleType: "Covered Warehouse Facility",
    capacityTag: "15,000+ Sq. Ft. Facility",
    capacityColor: "bg-teal-600 text-white",
    title: "Covered Warehousing & Storage",
    shortDesc: "Modern covered warehouse and open industrial yard in Chinchwad, Pune for safe consignment storage, material staging, and distribution management.",
    image: "/images/yls/yls-warehouse-racks.jpg",
    badges: ["Pune Industrial Hub", "Open & Covered Yard", "Transit Insurance"],
    link: "/services#warehousing",
  },
];

export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Manual dot scroll
  const handleDotScroll = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }, []);

  // Manual arrow scroll
  const scrollByCard = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const step = first ? first.offsetWidth + 24 : 380;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Sync active dot with scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      setActiveDot(Math.min(FLEET_SERVICES.length - 1, Math.max(0, Math.round(ratio * (FLEET_SERVICES.length - 1)))));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth Auto-scroll with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const firstCard = track.children[0] as HTMLElement | undefined;
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 380;
      const maxScroll = track.scrollWidth - track.clientWidth;

      // If at or near the end, loop smoothly back to start
      if (track.scrollLeft >= maxScroll - 20) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="services-section"
      className="services-sec overflow-hidden relative bg-[#f6f8fb] sec-padding scroll-mt-24"
    >
      <div className="max-w-[1640px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section Intro: Title Left, Carousel Controls Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="sec-intro mb-0 max-w-2xl">
            <span className="sub-title flex items-center gap-2 text-primary font-heading font-bold text-xs uppercase tracking-wider mb-2">
              <TruckIcon />
              ALL-CAPACITY FLEET &bull; SMALL TO HEAVY ODC
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark tracking-tight leading-[1.15] uppercase">
              Specialized Heavy Haulage, Hydraulic Trailers &amp; Warehousing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              From compact pickup mini-trucks for city shuttles to 150-ton hydraulic multi-axle trailers for mega ODC cargo, we operate vehicles of every scale across India.
            </p>
          </div>

          {/* Carousel Arrows + Auto-play status */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 mr-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-medium">
              <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"}`} />
              <span>{isPaused ? "Paused" : "Auto-scrolling"}</span>
            </div>

            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous vehicles"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white hover:bg-primary text-dark hover:text-white flex items-center justify-center transition shadow-md border border-slate-200/80 cursor-pointer"
            >
              <i className="fa fa-arrow-left text-sm" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next vehicles"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-md cursor-pointer"
            >
              <i className="fa fa-arrow-right text-sm" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Scrollable Card Track with Hover Pause */}
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto overflow-y-hidden pt-2 pb-6 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {FLEET_SERVICES.map((fleet) => (
            <div
              key={fleet.id}
              className="group relative shrink-0 snap-start w-[88%] sm:w-[48%] lg:w-[32%] xl:w-[28.5%] 2xl:w-[24%] bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(2,14,40,0.06)] hover:shadow-[0_20px_45px_rgba(2,14,40,0.12)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-slate-100/80"
            >
              <div>
                {/* Photo with Vehicle Capacity Pill */}
                <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden mb-5 bg-slate-100">
                  <Image
                    src={fleet.image}
                    alt={fleet.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Capacity Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-heading font-extrabold uppercase tracking-wide shadow-md ${fleet.capacityColor}`}>
                      {fleet.capacityTag}
                    </span>
                  </div>

                  {/* Vehicle Type subtitle on image bottom */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 z-10">
                    <span className="text-white text-xs font-heading font-bold drop-shadow">
                      {fleet.vehicleType}
                    </span>
                  </div>
                </div>

                {/* Category kicker */}
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-primary block mb-1">
                  {fleet.category}
                </span>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-heading font-bold text-dark leading-snug mb-3 group-hover:text-primary transition-colors">
                  <Link href={fleet.link}>
                    {fleet.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {fleet.shortDesc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {fleet.badges.map((b, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[10px] sm:text-[11px] font-medium"
                    >
                      &bull; {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={fleet.link}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-dark group-hover:text-primary transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-primary group-hover:text-white text-dark flex items-center justify-center transition-colors">
                    <i className="fa fa-arrow-right text-xs"></i>
                  </span>
                  <span>View Details</span>
                </Link>

                <Link
                  href="/quote"
                  className="text-xs font-heading font-bold text-primary hover:underline"
                >
                  Get Rate &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots + Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs sm:text-sm text-slate-600">
          <p className="font-medium max-w-xl">
            Operating all fleet categories: <strong>Pickups, LCVs, Taurus Trucks, Containers, Flatbeds, &amp; 150T Hydraulic ODC Pullers</strong> across India.
          </p>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {FLEET_SERVICES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Jump to vehicle ${idx + 1}`}
                onClick={() => handleDotScroll(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeDot ? "w-6 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
