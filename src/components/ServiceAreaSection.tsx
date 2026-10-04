'use client';

import React from 'react';
import Link from 'next/link';

export const CITIES = [
  {
    name: 'Pune',
    state: 'Maharashtra',
    role: 'Registered HQ & Primary Staging Hub',
    desc: 'Pune registered office, Chakan MIDC heavy equipment staging, covered warehousing, and central dispatch control desk.',
  },
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    role: 'Port Carting & Commercial Corridor',
    desc: 'JNPT / Nhava Sheva port carting, export cargo handling, customs checkpoint coordination, and Mumbai port transport.',
  },
  {
    name: 'Bangalore',
    state: 'Karnataka',
    role: 'South India Regional Branch',
    desc: 'Branch office at Himalaya Plaza, Peenya industrial haulage, multi-axle trailer dispatch, and Southern state logistics.',
  },
  {
    name: 'Vadodara',
    state: 'Gujarat',
    role: 'Western Industrial Hub',
    desc: 'Ranoli branch depot, Western corridor ODC transport, Gujarat plant freight, and heavy machinery transport.',
  },
  {
    name: 'Prayagraj',
    state: 'Uttar Pradesh',
    role: 'North & Central India Depot',
    desc: 'Naini branch office, UP highway transit monitoring, heavy consignment escort, and North India freight routes.',
  },
  {
    name: 'Jeypore',
    state: 'Odisha',
    role: 'Eastern & Mining Belt Depot',
    desc: 'Koraput branch facility, Odisha industrial freight, mining equipment movement, and Eastern corridor ODC transport.',
  },
];

export default function ServiceAreaSection() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sec-intro text-center mx-auto mb-12">
          <span className="sub-title">PAN-INDIA NETWORK</span>
          <h2 className="sec-title">Key Transport Hubs &amp; Service Areas</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            YES Logistics Service operates direct branch depots and dedicated transport coordinators across major industrial corridors in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-heading font-bold text-dark uppercase tracking-wide">
                  {city.name}
                </h3>
                <span className="text-xs font-heading font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase">
                  {city.state}
                </span>
              </div>
              <p className="text-xs font-heading font-bold text-[#175A9D] mb-2 uppercase tracking-wide">
                {city.role}
              </p>
              <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-4">
                {city.desc}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 text-xs font-bold text-primary">
                <Link href="/services" className="hover:underline">
                  View Services
                </Link>
                <span>&bull;</span>
                <Link href="/quote" className="hover:underline">
                  Get Quote
                </Link>
                <span>&bull;</span>
                <Link href="/case-studies" className="hover:underline">
                  Case Studies
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
