"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, ShieldAlert, Warehouse, ShieldCheck } from "lucide-react";
import { PRIMARY_SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Truck: Truck,
  ShieldAlert: ShieldAlert,
  Warehouse: Warehouse,
  ShieldCheck: ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
                WHAT TO EXPECT
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06112E] font-display">
              Reliable Freight Services
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-primary text-slate-800 hover:text-white font-bold text-xs sm:text-sm shadow-soft transition-all duration-300 border border-slate-200"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRIMARY_SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Truck;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div>
                  {/* Card Header: Icon, Title & Number */}
                  <div className="p-6 pb-4 flex items-start justify-between gap-3 border-b border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-black text-[#06112E] font-display group-hover:text-primary transition-colors leading-tight">
                        <Link href={`/services#${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-brand-yellow font-display transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Card Visual / Thumbnail */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Short Description */}
                  <div className="p-6 pt-5">
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Footer: View Details Link */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center justify-between w-full pt-4 text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span>View Details</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">Learn More &rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white shadow-soft border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm font-medium text-slate-600">
            Our fleet capabilities do not end here. We engineer custom trailer and crane combinations for your exact cargo dimensions.
          </p>
          <Link
            href="/quote"
            className="shrink-0 px-6 py-2.5 rounded-full bg-navy-dark hover:bg-primary text-white text-xs font-bold transition"
          >
            Request Fleet Tailoring &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
