"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Building,
} from "lucide-react";
import { COMPANY, BRANCHES } from "@/lib/constants";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    freightType: "ODC Trailer",
    goodsType: "Heavy Machinery",
    pickupCity: "Pune",
    deliveryCity: "",
    dimensions: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    quoteId: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessData(null);

    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMessage("Please complete all required fields (Name, Email, and Phone).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Failed to submit quote. Please try again.");
      } else {
        setSuccessData({
          quoteId: data.quoteId,
          message: data.message,
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          freightType: "ODC Trailer",
          goodsType: "Heavy Machinery",
          pickupCity: "Pune",
          deliveryCity: "",
          dimensions: "",
          notes: "",
        });
      }
    } catch (err) {
      console.error("Quote submission error:", err);
      setErrorMessage("An unexpected error occurred. Please contact our Pune office directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote-section" className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Side: Contact Information & Office Details */}
            <div className="lg:col-span-5 bg-navy-dark text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-yellow text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>TRANSPARENT QUOTATIONS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white font-display leading-tight">
                  Do You Have Any Project on Your Mind?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect directly with our fleet coordinators in Pune for specialized ODC freight rates, crane deployments, and nationwide transit planning.
                </p>

                {/* Primary Contacts */}
                <div className="space-y-5 pt-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <a
                      href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                      className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-primary text-brand-yellow hover:text-white flex items-center justify-center shrink-0 transition"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Central Dispatch Phone
                      </p>
                      <a
                        href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                        className="text-base sm:text-lg font-black text-white hover:text-brand-yellow transition"
                      >
                        {COMPANY.primaryPhone}
                      </a>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Additional: {COMPANY.additionalPhone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-primary text-brand-yellow hover:text-white flex items-center justify-center shrink-0 transition"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Official Inquiry Email
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-base sm:text-lg font-bold text-white hover:text-brand-yellow transition"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  {/* Registered Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-yellow flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Registered Office
                      </p>
                      <p className="text-sm font-semibold text-slate-200 mt-0.5 leading-relaxed">
                        {COMPANY.registeredOffice.full}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Network Indicator */}
              <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow mb-2">
                  5 Interstate Branch Hubs
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {BRANCHES.map((b) => (
                    <span
                      key={b.city}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-medium"
                    >
                      {b.city} ({b.stateCode})
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Quote Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
              <div className="max-w-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-[#06112E] font-display">
                    Request an Instant Quote
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Fill out your consignment specifications to receive an accurate, competitive proposal.
                  </p>
                </div>

                {/* Success Notification */}
                {successData && (
                  <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-in fade-in">
                    <div className="flex items-center gap-2 font-bold text-base text-emerald-800">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Request Successfully Submitted!</span>
                    </div>
                    <p className="text-sm text-emerald-800 leading-relaxed">
                      {successData.message}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-700">
                      <span className="font-bold">Quote Reference ID (UUID):</span>
                      <span className="bg-white px-2 py-0.5 rounded border border-emerald-200">
                        {successData.quoteId}
                      </span>
                    </div>
                  </div>
                )}

                {/* Error Notification */}
                {errorMessage && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm animate-in fade-in">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                    <p className="font-semibold">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Freight Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Freight Service Type
                      </label>
                      <select
                        value={formData.freightType}
                        onChange={(e) => setFormData({ ...formData, freightType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      >
                        <option value="ODC Trailer">ODC Trailer Service (Heavy Haulage)</option>
                        <option value="Full Truckload (FTL)">Full Truckload (Taurus / Open Body)</option>
                        <option value="Mechanical Flatbed">Mechanical Flatbed Trailer</option>
                        <option value="Covered Warehouse">Covered Warehousing &amp; Storage</option>
                        <option value="Crane & Loading">Loading, Unloading &amp; Crane Escort</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Goods Type & Pickup City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Type of Goods
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Heavy Machinery, Coils, Girders"
                        value={formData.goodsType}
                        onChange={(e) => setFormData({ ...formData, goodsType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Pickup City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Pune, Maharashtra"
                        value={formData.pickupCity}
                        onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Row 4: Delivery City & Dimensions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Delivery City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bangalore, Vadodara, Jeypore"
                        value={formData.deliveryCity}
                        onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Dimensions / Weight
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15m x 3m x 3.5m, 28T"
                        value={formData.dimensions}
                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Notes / Special Requirements */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Special Requirements or Route Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention required crane capacity, pilot escort needs, transit dates..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-base shadow-glow flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing Quote Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      By submitting, you agree to receive a direct call or email from our transport coordinator.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
