'use client';

import React from 'react';
import TruckIcon from './TruckIcon';
import { Phone } from 'lucide-react';
import { getAssetPath } from '@/lib/imageLoader';
import { trackEvent } from './GoogleAnalytics';

export default function TrackingSection() {
  return (
    <section
      id="tracking-section"
      className="relative pt-24 lg:pt-32 pb-64 lg:pb-72 bg-cover bg-center bg-no-repeat overflow-hidden text-white scroll-mt-24"
      style={{
        backgroundImage: `url('${getAssetPath('/images/tracking-bg.jpg')}')`,
        backgroundColor: '#020e28',
      }}
    >
      <div className="absolute inset-0 bg-[#020e28]/90" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="sec-intro text-center mx-auto mb-12">
          <span className="sub-title">
            <TruckIcon />
            CONSIGNMENT STATUS
          </span>
          <h2 className="sec-title !text-white">
            Need Your Shipment Status?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Call our dispatch desk for real-time consignment updates, delivery
            ETAs, and route coordination across all Indian states.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+917020057149"
            onClick={() => trackEvent('click', 'phone', 'tracking_cta')}
            className="btn-primary py-[18px] px-9 text-base shadow-md hover:shadow-lg flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5" />
            <span>Call Dispatch: +91 70200 57149</span>
          </a>
          <a
            href="https://wa.me/917021277197?text=Hello%20YES%20Logistics%2C%20I%20need%20a%20shipment%20status%20update."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click', 'whatsapp', 'tracking_cta')}
            className="inline-flex items-center gap-3 px-9 py-[18px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-semibold text-base transition-colors shadow-lg"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            <span>WhatsApp Status Update</span>
          </a>
        </div>
      </div>
    </section>
  );
}
