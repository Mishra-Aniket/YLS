"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { saveQuoteRequest } from "@/lib/quotes";

const FREIGHT_TYPES = [
  "ODC Trailer",
  "Full Truckload (FTL)",
  "Mechanical Flatbed",
  "Covered Warehouse",
  "Crane & Loading",
];

const EMPTY_FORM = {
  fullName: "",
  email: "",
  phone: "",
  freightType: "ODC Trailer",
  goodsType: "Heavy Machinery",
  pickupCity: "Pune",
  deliveryCity: "",
  dimensions: "",
  notes: "",
};

const inputClass =
  "w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition";

const labelClass =
  "block text-sm font-heading font-bold text-dark mb-2";

export default function QuoteSection() {
  const [formData, setFormData] = useState(EMPTY_FORM);
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
    setTimeout(() => {
      try {
        const result = saveQuoteRequest({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          freightType: formData.freightType,
          pickupCity: formData.pickupCity,
          deliveryCity: formData.deliveryCity,
          goodsType: formData.goodsType,
          dimensions: formData.dimensions,
          notes: formData.notes,
        });

        setSuccessData({
          quoteId: result.quoteId,
          message: result.message,
        });
        setFormData(EMPTY_FORM);
      } catch (err) {
        console.error("Quote submission error:", err);
        setErrorMessage("An unexpected error occurred. Please contact our Pune office directly at +91 7021277197.");
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  const scrollToTracking = () => {
    document.getElementById("tracking-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="quote-section" className="bg-white pb-24 lg:pb-32 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* White tab card overlapping the dark tracking band, matching TransHub */}
        <div className="relative z-20 -mt-40 lg:-mt-44 bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 sm:p-10 lg:p-12">
          {/* Tab pills matching TransHub quote-card tabs */}
          <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-slate-200">
            <span className="btn-primary py-3 px-7 text-sm cursor-default">
              <span>Request Quote</span>
            </span>
            <button
              type="button"
              onClick={scrollToTracking}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-dark text-white font-heading font-semibold text-sm hover:bg-primary transition-colors cursor-pointer"
            >
              <span>Shipment Tracking</span>
            </button>
          </div>

          {/* Success Notification */}
          {successData && (
            <div className="mt-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 font-bold text-base text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Request Successfully Submitted!</span>
              </div>
              <p className="text-sm text-emerald-800">
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
            <div className="mt-8 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm animate-in fade-in">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <p className="font-semibold">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="pt-8 space-y-6">
            {/* Service type radios matching TransHub "Select Your Services Type*" */}
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-dark mb-4">
                Select Your Freight Type<span className="text-primary">*</span>
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {FREIGHT_TYPES.map((type) => (
                  <label
                    key={type}
                    className="inline-flex items-center gap-2.5 cursor-pointer text-slate-700 font-medium text-sm sm:text-base hover:text-dark transition-colors"
                  >
                    <input
                      type="radio"
                      name="freightType"
                      value={type}
                      checked={formData.freightType === type}
                      onChange={(e) => setFormData({ ...formData, freightType: e.target.value })}
                      className="w-4.5 h-4.5 accent-[#fd5523] cursor-pointer"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>
                  Full Name<span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Email<span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  placeholder="info@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Phone No<span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>Type Of Goods</label>
                <input
                  type="text"
                  placeholder="Heavy Machinery, Coils, Girders"
                  value={formData.goodsType}
                  onChange={(e) => setFormData({ ...formData, goodsType: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Pickup City</label>
                <input
                  type="text"
                  placeholder="Pune, Maharashtra"
                  value={formData.pickupCity}
                  onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Delivery City</label>
                <input
                  type="text"
                  placeholder="Bangalore, Vadodara, Jeypore"
                  value={formData.deliveryCity}
                  onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>Dimensions / Weight</label>
                <input
                  type="text"
                  placeholder="15m x 3m x 3.5m, 28T"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Special Requirements or Route Notes</label>
                <textarea
                  rows={3}
                  placeholder="Mention required crane capacity, pilot escort needs, transit dates..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-[24px] bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium outline-none focus:border-primary focus:bg-white transition resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <i className="fa fa-turn-up text-sm" aria-hidden="true"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
