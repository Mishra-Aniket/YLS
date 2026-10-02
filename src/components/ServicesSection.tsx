"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import { PRIMARY_SERVICES } from "@/lib/constants";

// Map TransHub service images
const SERVICE_IMAGES = [
  "/images/serv-n3-328x172.png",
  "/images/serv2-1-328x172.png",
  "/images/serv-n2-328x172.png",
  "/images/dd1-328x172.jpg",
];

const SERVICE_ICONS = [
  "fa-solid fa-truck-moving",
  "fa-solid fa-trailer",
  "fa-solid fa-warehouse",
  "fa-solid fa-shield-halved",
];

export default function ServicesSection() {
  return (
    <section
      id="services-section"
      className="services-sec overflow-hidden position-relative bg-shade sec-padding"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro matching TransHub */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="sec-intro mb-0">
            <span className="sub-title">
              <TruckIcon />
              WHAT TO EXPECT
            </span>
            <h2 className="sec-title">Reliable Freight Services</h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="btn-primary py-3 px-6 text-sm"
            >
              <span>Explore All Services</span>
              <i className="fa fa-arrow-right text-xs" aria-hidden="true"></i>
            </Link>
          </div>
        </div>

        {/* 4 Service Cards Grid matching TransHub .service-card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRIMARY_SERVICES.map((service, idx) => {
            const thumbImg = SERVICE_IMAGES[idx % SERVICE_IMAGES.length];
            const iconClass = SERVICE_ICONS[idx % SERVICE_ICONS.length];

            return (
              <div
                key={service.id}
                className="group bg-white rounded-[30px] p-7 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Service Head */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <i className={`${iconClass} text-lg`}></i>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-mute uppercase tracking-wider block">
                        Service {service.number}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                        <Link href={`/services#${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                    </div>
                  </div>

                  {/* Service Thumb */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    <Image
                      src={thumbImg}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Service Footer matching TransHub .service-footer */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center justify-between w-full text-sm font-heading font-semibold text-dark group-hover:text-primary transition-colors"
                  >
                    <span>View Details</span>
                    <span className="w-9 h-9 rounded-xl bg-shade group-hover:bg-primary group-hover:text-white text-dark flex items-center justify-center transition-colors">
                      <i className="fa fa-arrow-right text-xs"></i>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strip Note */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-sm text-slate-600">
          <p className="font-medium">
            Our list of services does not end here. We’ll adapt to your particular heavy haulage and trailer needs across India.
          </p>
          <Link
            href="/quote"
            className="shrink-0 text-primary font-heading font-bold hover:underline inline-flex items-center gap-1.5"
          >
            <span>Request Custom Solution</span>
            <i className="fa fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
