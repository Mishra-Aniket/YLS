'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { AlertCircle, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { submitQuoteRequest } from '@/lib/quotes';
import { trackEvent } from '@/components/GoogleAnalytics';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    freightType: 'ODC Multi-Axle Hydraulic Trailer',
    goodsType: 'Heavy Machinery & Structural Equipment',
    approxWeight: '',
    pickupCity: 'Pune, Maharashtra',
    deliveryCity: '',
    dimensions: '',
    shipmentDate: '',
    deliveryDeadline: '',
    requiresEscort: false,
    requiresCrane: false,
    notes: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (formData.honeypot) return;

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please complete all required fields (Full Name and Mobile Phone Number).');
      return;
    }

    setLoading(true);
    try {
      const result = await submitQuoteRequest({
        fullName: formData.fullName,
        email: formData.email || undefined,
        phone: formData.phone,
        freightType: formData.freightType,
        goodsType: formData.goodsType,
        pickupCity: formData.pickupCity,
        deliveryCity: formData.deliveryCity,
        dimensions: `${formData.dimensions ? `Dimensions: ${formData.dimensions}; ` : ''}${formData.approxWeight ? `Weight: ${formData.approxWeight}; ` : ''}${formData.requiresCrane ? 'Requires Crane Loading; ' : ''}${formData.requiresEscort ? 'Requires Pilot Escort; ' : ''}`,
        shipmentDate: formData.shipmentDate,
        notes: `${formData.companyName ? `Company: ${formData.companyName}; ` : ''}${formData.notes || ''}`,
      });

      setSuccessMessage(result.message);
      trackEvent('form_submit', 'quote', 'quote_page');
    } catch {
      setErrorMessage(
        'Unable to submit request. Please call our Pune dispatch desk at +91 70200 57149 or +91 70212 77197.'
      );
    } finally {
      setLoading(false);
    }
  };

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yeslogisticsservice.com';

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Free Quote', url: `${SITE_URL}/quote` },
        ]}
      />
      <Navbar variant="floating" />

      <PageHeader
        title="Request a Freight Quotation"
        subtitle="Submit detailed specifications for full truckload, mechanical trailer, or over-dimensional consignment (ODC) movements across all Indian states."
        breadcrumbs={[{ label: 'Free Quote' }]}
      />

      <section className="py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-card border border-slate-100 p-8 sm:p-12">
            <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  COMMERCIAL FLEET PROPOSAL
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#06112E] mt-0.5 uppercase tracking-wide">
                  Consignment &amp; Transport Details
                </h2>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Direct Pune Dispatch: <strong className="text-primary">+91 70200 57149 / +91 70212 77197</strong>
              </div>
            </div>

            {successMessage && (
              <div className="mb-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-black text-emerald-900 uppercase">
                      Quote Request Received!
                    </h3>
                    <p className="text-xs text-emerald-700">
                      Our transport engineer is reviewing your consignment parameters.
                    </p>
                  </div>
                </div>
                <p className="text-base font-semibold text-emerald-800 leading-relaxed pt-2">
                  {successMessage}
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                <p className="font-semibold">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              {/* Part 1: Personal / Company Information */}
              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#175A9D] mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#175A9D]/10 flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span>Personal &amp; Company Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Rajesh Patil"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Precision Engineering Works Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Corporate Email Address <span className="text-slate-400 text-[10px] normal-case">(optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="rajesh@company.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Contact Mobile / Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98200 12345"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              {/* Part 2: Freight Type & Goods Information */}
              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#175A9D] mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#175A9D]/10 flex items-center justify-center text-[10px]">
                    2
                  </span>
                  <span>Freight Type &amp; Goods Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Freight Category
                    </label>
                    <select
                      value={formData.freightType}
                      onChange={(e) => setFormData({ ...formData, freightType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    >
                      <option value="ODC Multi-Axle Hydraulic Trailer">ODC Multi-Axle Hydraulic Trailer</option>
                      <option value="Mechanical Flatbed Trailer (40ft/50ft)">Mechanical Flatbed Trailer (40ft/50ft)</option>
                      <option value="Taurus Multi-Axle Truck (16T - 25T)">Taurus Multi-Axle Truck (16T - 25T)</option>
                      <option value="Normal / Open Body Truck">Normal / Open Body Truck</option>
                      <option value="Mini Truck / LCV / LPT">Mini Truck / LCV / LPT</option>
                      <option value="Covered Warehousing & Staging">Covered Warehousing &amp; Staging (Pune)</option>
                      <option value="Crane Loading / Rigging Only">Crane Loading / Tandem Rigging Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Description of Goods
                    </label>
                    <input
                      type="text"
                      placeholder="Boilers, Girders, Heavy Machinery, Steel Coils"
                      value={formData.goodsType}
                      onChange={(e) => setFormData({ ...formData, goodsType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Consignment Dimensions (L &times; W &times; H in meters)
                    </label>
                    <input
                      type="text"
                      placeholder="18.5m x 3.8m x 4.2m"
                      value={formData.dimensions}
                      onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Approximate Weight (Tonnes or Kg)
                    </label>
                    <input
                      type="text"
                      placeholder="35 Tonnes"
                      value={formData.approxWeight}
                      onChange={(e) => setFormData({ ...formData, approxWeight: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              {/* Part 3: Origin & Destination */}
              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#175A9D] mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#175A9D]/10 flex items-center justify-center text-[10px]">
                    3
                  </span>
                  <span>Origin &amp; Destination Corridors</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Pickup Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="Chakan MIDC, Pune"
                      value={formData.pickupCity}
                      onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Delivery Destination / City
                    </label>
                    <input
                      type="text"
                      placeholder="Peenya, Bangalore (or any destination across India)"
                      value={formData.deliveryCity}
                      onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              {/* Part 4: Timeline & Special Handling */}
              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#175A9D] mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#175A9D]/10 flex items-center justify-center text-[10px]">
                    4
                  </span>
                  <span>Timeline &amp; Special Handling Requirements</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Expected Date of Dispatch
                    </label>
                    <input
                      type="date"
                      value={formData.shipmentDate}
                      onChange={(e) => setFormData({ ...formData, shipmentDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                      Target Delivery Deadline
                    </label>
                    <input
                      type="date"
                      value={formData.deliveryDeadline}
                      onChange={(e) => setFormData({ ...formData, deliveryDeadline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <label className="flex items-center gap-2 text-xs font-heading font-bold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requiresCrane}
                      onChange={(e) => setFormData({ ...formData, requiresCrane: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                    />
                    <span>Loading / Unloading Crane Arrangement Needed</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-heading font-bold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requiresEscort}
                      onChange={(e) => setFormData({ ...formData, requiresEscort: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                    />
                    <span>Dedicated Pilot Escort Vehicle Needed</span>
                  </label>
                </div>
              </div>

              {/* Part 5: Notes & Submit */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                  Route Restrictions, Special Handling or Comments
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail any height obstacles, plant entry gates, transit insurance requirements, or bridge clearances..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-base font-medium outline-none focus:border-primary focus:bg-white transition resize-none"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-heading font-bold text-base shadow-glow flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-75"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Commercial Request</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
