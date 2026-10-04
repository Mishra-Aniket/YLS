'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TruckIcon from './TruckIcon';
import QuickContactModal from './QuickContactModal';
import { ShieldCheck, ArrowRight, Camera } from 'lucide-react';

const REAL_OPERATIONS = [
  {
    image: '/images/work/work-01.jpeg',
    title: 'Warehouse Dockside ODC Loading',
    category: 'ODC & Warehousing',
    location: 'Chinchwad Staging Yard, Pune',
    badge: 'DOCK OPERATIONS',
  },
  {
    image: '/images/work/work-02.jpeg',
    title: 'Multi-Axle Taurus Fleet Ready for Dispatch',
    category: 'Interstate Fleet',
    location: 'Chakan MIDC Freight Terminal',
    badge: 'INTERSTATE FLEET',
  },
  {
    image: '/images/work/work-05.jpeg',
    title: 'Weatherproof Tarpaulin Covered Highway Freight',
    category: 'Full Truckload',
    location: 'National Highway Corridor',
    badge: 'WEATHERPROOF CARGO',
  },
  {
    image: '/images/work/work-08.jpeg',
    title: 'Mechanical Flatbed Trailer Container Movement',
    category: 'Port Freight',
    location: 'JNPT & Nhava Sheva Port Carting',
    badge: 'PORT CARTING',
  },
  {
    image: '/images/work/work-10.jpeg',
    title: 'Low-Bed Trailer Machinery Transport',
    category: 'Heavy Haulage',
    location: 'Western Industrial Belt',
    badge: 'HEAVY HAULAGE',
  },
  {
    image: '/images/work/work-11.jpeg',
    title: 'Pilot Escort & Convoy Safety Operations',
    category: 'Route Safety',
    location: 'Pan-India Highway Escort',
    badge: 'PILOT ESCORT',
  },
];

export default function FleetGallerySection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="sec-intro text-center mx-auto mb-14 max-w-3xl">
          <span className="sub-title inline-flex items-center gap-2">
            <TruckIcon />
            AUTHENTIC GROUND OPERATIONS
          </span>
          <h2 className="sec-title text-3xl sm:text-4xl lg:text-5xl">
            Real Fleet &amp; Transport in Action
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Direct ground photographs of <strong className="text-dark font-semibold">YES Logistics Service</strong> fleet, hydraulic trailers, dock loading, and highway escort operations across Indian states.
          </p>
        </div>

        {/* 6 Grid Cards with Uncropped Framing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REAL_OPERATIONS.map((op, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Photo Box with 16:11 Uncropped Aspect Ratio */}
              <div className="relative aspect-[16/11] bg-slate-900 overflow-hidden">
                <Image
                  src={op.image}
                  alt={op.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent pointer-events-none" />

                {/* Badge Top Left */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#06112E]/85 backdrop-blur-md text-white font-heading font-bold text-[10px] uppercase tracking-wider border border-white/20">
                    {op.badge}
                  </span>
                </div>

                {/* Camera Icon Top Right */}
                <div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-heading font-bold text-primary uppercase tracking-wider">
                    {op.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-dark mt-1 leading-snug group-hover:text-primary transition-colors">
                    {op.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1.5 flex items-center gap-1">
                    <span>📍</span>
                    <span>{op.location}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Operation
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsContactOpen(true)}
                    className="text-xs font-heading font-bold text-dark hover:text-primary transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="btn-primary py-3.5 px-8 inline-flex items-center gap-2 text-sm shadow-md uppercase tracking-wider"
          >
            <span>Explore Full Fleet Gallery (16+ Photos)</span>
            <i className="fa fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <QuickContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
