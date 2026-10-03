"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import { PRIMARY_SERVICES } from "@/lib/constants";

// Real YLS operations photos for the service cards
const SERVICE_IMAGES = [
  "/images/work/work-02.jpeg",
  "/images/work/work-06.jpeg",
  "/images/yls/yls-warehouse-racks.jpg",
  "/images/work/work-11.jpeg",
];

export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleDotScroll = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }, []);

  const scrollByCard = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const step = first ? first.offsetWidth + 24 : 360;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      setActiveDot(Math.round(ratio * (PRIMARY_SERVICES.length - 1)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="services-section"
      className="services-sec overflow-hidden relative bg-shade sec-padding scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro matching TransHub header row: title left, carousel arrows right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="sec-intro mb-0">
            <span className="sub-title">
              <TruckIcon />
              WHAT TO EXPECT
            </span>
            <h2 className="sec-title">Reliable Freight Services</h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous services"
              className="w-12 h-12 rounded-[10px] bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-md cursor-pointer"
            >
              <i className="fa fa-arrow-left text-sm" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next services"
              className="w-12 h-12 rounded-[10px] bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-md cursor-pointer"
            >
              <i className="fa fa-arrow-right text-sm" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Scrollable card track — overflow-y hidden so the page keeps scrolling over it */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden pt-3 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PRIMARY_SERVICES.map((service, idx) => {
            const thumbImg = SERVICE_IMAGES[idx % SERVICE_IMAGES.length];

            return (
              <div
                key={service.id}
                className="group relative shrink-0 snap-start w-[85%] sm:w-[46%] lg:w-[31.5%] xl:w-[calc((100%-3rem)/3.42)] bg-white rounded-[30px] p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{
                  background:
                    "radial-gradient(circle 26px at calc(100% - 14px) calc(100% - 14px), var(--shade) 99%, transparent 100%), #fff",
                }}
              >

                {/* Title on top matching TransHub card head */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-dark leading-tight mb-6 group-hover:text-primary transition-colors">
                  <Link href={`/services#${service.id}`}>
                    {service.title}
                  </Link>
                </h3>

                {/* Thumb */}
                <div className="relative w-full h-44 sm:h-48 rounded-[24px] overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={thumbImg}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Divider */}
                <div className="border-t border-slate-200/80 mb-5" />

                {/* Footer row: arrow square left + View Details, matching TransHub */}
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-4 text-base font-heading font-bold text-dark group-hover:text-primary transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-shade group-hover:bg-primary group-hover:text-white text-dark flex items-center justify-center transition-colors">
                    <i className="fa fa-arrow-right text-sm"></i>
                  </span>
                  <span>View Details</span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Strip Note + pagination dots matching TransHub */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left text-sm text-slate-600">
          <p className="font-medium max-w-xl">
            Our list of services does not end here. We&rsquo;ll adapt to your particular heavy haulage and trailer needs across India.
          </p>

          <div className="flex items-center gap-2.5">
            {PRIMARY_SERVICES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to service ${idx + 1}`}
                onClick={() => handleDotScroll(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                  idx === activeDot ? "bg-primary" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
