'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { ALL_SERVICES, COMPANY } from '@/lib/constants';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { trackEvent } from '@/components/GoogleAnalytics';

const EXTENDED_CAPABILITIES = [
  { title: 'Fleet Owner Services', desc: 'Company-owned modern fleet backed by direct workshop maintenance.' },
  { title: 'Truck Services', desc: 'Mini trucks, normal trucks, open body, and Taurus provided at short notice.' },
  { title: 'Trailer Services', desc: 'Mechanical trailers registered under Motor Vehicles Act in various capacities.' },
  { title: 'ODC Trailer Services', desc: 'Multi-axle hydraulic pullers and low-bed trailers for over-dimensional machinery.' },
  { title: 'ODC Consignment Transportation', desc: 'Turnkey route audits, bridge certifications, and nationwide heavy haulage.' },
  { title: 'Container Transportation', desc: 'Standard 20ft, 40ft, and high-cube container movement across dry ports.' },
  { title: 'LCV and LPT Transportation', desc: 'Light commercial vehicles and medium freight trucks for regional industrial feeder carting.' },
  { title: 'Escort Services', desc: 'Free pilot vehicles and traffic escorts by mutual agreement for sensitive routes.' },
  { title: 'Loading & Unloading Services', desc: 'Professional rigging, tandem lifting, and certified ground crews.' },
  { title: 'Crane Arrangement', desc: 'Mobile hydraulic cranes and Hydra cranes mobilized at loading & unloading sites.' },
  { title: 'Covered Warehousing', desc: 'Weather-tight covered staging and storage facilities in Pune industrial corridor.' },
  { title: 'Open Storage', desc: 'Heavy-duty concrete open yard storage for structural steel and equipment staging.' },
  { title: 'Transit Support', desc: '24/7 dedicated dispatch desks, GPS updates, and direct branch coordinator contacts.' },
  { title: 'All India Transport Services', desc: 'National permits covering Maharashtra, Gujarat, Karnataka, Odisha, UP, and beyond.' },
  { title: 'Export & Port Transportation', desc: 'Specialized port carting to JNPT Nhava Sheva, Mumbai, Mundra, and Kolkata.' },
];

export default function ServicesPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yeslogisticsservice.com';

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
        ]}
      />
      {ALL_SERVICES.map((srv) => (
        <ServiceJsonLd key={srv.id} name={srv.title} description={srv.fullDesc} />
      ))}

      <Navbar variant="floating" />

      <PageHeader
        title="Comprehensive Logistics & ODC Services"
        subtitle="End-to-end transportation capabilities from mini trucks to 50-ton hydraulic multi-axle trailers, covered warehousing, and pilot escorts across India."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary font-heading font-bold text-xs uppercase tracking-widest">
              CORE SPECIALIZATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#06112E] uppercase">
              Engineered for Industrial Freight
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our core capabilities tailored for heavy manufacturing, infrastructure projects, and engineering enterprises.
            </p>
          </div>

          <div className="space-y-12">
            {ALL_SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-card border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-card border-2 border-slate-100 ${
                    idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#06112E] text-[#F8C62E] font-heading font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    Service {srv.number}
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-5 ${
                    idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary">
                    YES LOGISTICS SERVICE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#06112E] uppercase">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {srv.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-heading font-bold text-xs sm:text-sm tracking-wide shadow-glow transition"
                    >
                      <span>Inquire This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, '')}`}
                      onClick={() => trackEvent('click', 'phone', 'service_page')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs sm:text-sm transition"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>{COMPANY.primaryPhone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-[#F8C62E] font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#06112E] inline-block">
              FULL SCOPE OF WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#06112E] uppercase">
              All 15 Specialized Logistics Capabilities
            </h2>
            <p className="text-slate-500 text-sm">
              From dock operations to remote project sites across India, we deploy certified equipment and skilled handlers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTENDED_CAPABILITIES.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-card hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-heading font-bold text-xs flex items-center justify-center">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-widest">
                      All-India
                    </span>
                  </div>
                  <h4 className="text-base font-heading font-black text-[#06112E] uppercase mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-heading font-bold text-slate-400 group-hover:text-primary transition-colors">
                    Certified Handler
                  </span>
                  <Link
                    href="/quote"
                    className="text-xs font-heading font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
