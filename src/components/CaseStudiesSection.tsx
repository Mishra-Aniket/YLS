"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const step = first ? first.offsetWidth + 24 : 360;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="case-sec relative overflow-hidden bg-white">
      {/* Orange side panel on the right, matching TransHub case-study section */}
      <div
        className="absolute top-0 right-0 h-full w-[68%] sm:w-[45%] lg:w-[32%] bg-primary pointer-events-none"
        aria-hidden="true"
      />

      {/* Header: title left, arrows over the orange panel */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 pt-20 lg:pt-24 pb-10">
          <div className="sec-intro mb-0">
            <span className="sub-title">
              <TruckIcon />
              WHAT TO EXPECT
            </span>
            <h2 className="sec-title">Reliable Top Case Study</h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous case study"
              className="w-12 h-12 rounded-[10px] bg-white hover:bg-dark hover:text-white text-dark flex items-center justify-center transition shadow-md cursor-pointer"
            >
              <i className="fa fa-arrow-left text-sm" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next case study"
              className="w-12 h-12 rounded-[10px] bg-white hover:bg-dark hover:text-white text-dark flex items-center justify-center transition shadow-md cursor-pointer"
            >
              <i className="fa fa-arrow-right text-sm" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed carousel aligned with the container gutter */}
      <div className="relative z-10 pb-20 lg:pb-24">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-2 pl-4 pr-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-1288px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="group relative shrink-0 snap-start w-[78%] sm:w-[46%] lg:w-[31%] xl:w-[calc((100vw-1288px)/3.55)] max-w-[360px] min-w-[280px]"
            >
              <div className="relative rounded-[20px] overflow-hidden h-[420px] shadow-lg">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>

              {/* White title bar with orange chip, matching TransHub card foot */}
              <div className="absolute bottom-6 left-4 right-4">
                <span className="absolute -top-3.5 left-3 z-10 px-3 py-1 rounded-md bg-primary text-white text-xs font-heading font-semibold">
                  {study.category}
                </span>
                <span
                  className="absolute -left-2 bottom-3 w-7 h-7 rounded-lg bg-primary"
                  aria-hidden="true"
                />
                <h3 className="relative bg-white rounded-xl px-5 py-4 text-lg font-heading font-bold text-dark leading-tight group-hover:text-primary transition-colors">
                  <Link href="/case-studies">{study.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
