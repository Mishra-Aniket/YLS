'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TruckIcon from './TruckIcon';
import { FAQJsonLd } from './JsonLd';
import { ChevronDown } from 'lucide-react';

export const FAQS = [
  {
    question: 'What does ODC (Over Dimensional Cargo) mean in transport?',
    answer:
      'ODC refers to cargo that extends beyond the standard dimensions (length, width, or height) of conventional transport trucks. YES LOGISTICS SERVICE specializes in ODC movement using hydraulic axles, low-bed, and semi-low-bed trailers across all Indian states.',
  },
  {
    question: 'What trailer types are available in your Pune fleet?',
    answer:
      'Our fleet includes 40ft and 50ft mechanical flatbed trailers, semi-low-bed trailers, low-bed trailers, multi-axle hydraulic pullers (40T to 150T+ capacity), Taurus trucks (16T to 25T), open-body trucks, and mini trucks for quick urban/regional carting.',
  },
  {
    question: 'Does YES Logistics Service provide pan-India transport coverage?',
    answer:
      'Yes. Headquartered in Chinchwad, Pune (Maharashtra), we operate a nationwide network with dedicated branch offices and coordinators in Bangalore (Karnataka), Vadodara (Gujarat), Jeypore (Odisha), and Prayagraj (Uttar Pradesh).',
  },
  {
    question: 'How quickly can I get a freight quotation for my consignment?',
    answer:
      'You can submit a quote request online or call our dispatch desk directly at +91 70200 57149 / +91 70212 77197. Our transport engineers review your consignment parameters and call you within 2 hours with commercial rates.',
  },
  {
    question: 'Do you handle pilot escort vehicles and state route permits for heavy haulage?',
    answer:
      'Yes. For over-dimensional consignments and heavy machinery transport, we arrange turnkey route audits, bridge load assessments, pilot escort vehicles, civil coordination, and all necessary state highway permits under the Motor Vehicles Act.',
  },
  {
    question: 'What warehousing and staging facilities are available in Pune?',
    answer:
      'We operate modern covered warehousing and expansive open storage yards in the Pune industrial corridor (Chinchwad / Chakan). Facilities feature heavy crane loading/unloading support, inventory staging, and transit insurance options.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <FAQJsonLd faqs={FAQS} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="sec-intro text-center mx-auto mb-12">
          <span className="sub-title">
            <TruckIcon />
            FREIGHT FAQS
          </span>
          <h2 className="sec-title">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Common questions regarding ODC transport, trailer specifications, pan-India coverage, and freight booking with YES Logistics Service.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-lg text-dark hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 font-sans text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-slate-500">
          Have a question not answered here?{' '}
          <Link href="/contact-us" className="text-primary font-bold hover:underline">
            Contact our Pune dispatch desk
          </Link>{' '}
          or call <a href="tel:+917020057149" className="text-primary font-bold hover:underline">+91 70200 57149</a>.
        </div>
      </div>
    </section>
  );
}
