"use client";

import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Truck,
  MapPin,
  Calendar,
  Phone,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

interface TimelineStep {
  step: string;
  location: string;
  time: string;
  completed: boolean;
}

interface ShipmentData {
  trackingId: string;
  consignmentNote: string;
  origin: string;
  destination: string;
  carrierType: string;
  cargoDescription: string;
  status: "In Transit" | "Dispatched" | "Arrived at Hub" | "Delivered";
  statusColor: string;
  currentLocation: string;
  dispatchDate: string;
  estimatedDelivery: string;
  branchHandler: string;
  branchPhone: string;
  timeline: TimelineStep[];
}

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [notFoundData, setNotFoundData] = useState<{ message: string; hint?: string } | null>(null);
  const [shipment, setShipment] = useState<ShipmentData | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setNotFoundData(null);
    setShipment(null);

    const query = trackingNumber.trim();
    if (!query) {
      setValidationError("Please enter a tracking number or LR docket number.");
      return;
    }

    if (query.length < 4) {
      setValidationError("Tracking reference must be at least 4 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/track?trackingId=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (!res.ok || !data.found) {
        setNotFoundData({
          message: data.message || `No active shipment found matching reference "${query}".`,
          hint: data.hint || "Please verify your LR (Lorry Receipt) docket number with the dispatch depot.",
        });
      } else {
        setShipment(data.shipment);
      }
    } catch (err) {
      console.error("Tracking request failed:", err);
      setNotFoundData({
        message: "Network request failed. Please check your connection or contact our Pune headquarters.",
      });
    } finally {
      setLoading(false);
    }
  };

  const setSampleTracking = (sampleId: string) => {
    setTrackingNumber(sampleId);
    setValidationError(null);
    setNotFoundData(null);
  };

  return (
    <section id="tracking-section" className="py-20 lg:py-24 bg-brand-yellow relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-dark text-white text-xs font-black tracking-widest uppercase shadow-sm">
            <Truck className="w-3.5 h-3.5 text-primary" />
            <span>REAL-TIME FLEET MONITORING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06112E] font-display">
            Track the Status of Your Shipment Instantly
          </h2>
          <p className="text-[#06112E]/80 text-sm sm:text-base font-medium">
            Enter your tracking ID or Lorry Receipt (LR) number to view verified interstate dispatch status and delivery schedule.
          </p>
        </div>

        {/* Tracking Form Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-amber-300 max-w-3xl mx-auto">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 items-stretch">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Enter tracking or LR docket (e.g. YLS-ODC-8819)"
                value={trackingNumber}
                onChange={(e) => {
                  setTrackingNumber(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 font-semibold text-sm sm:text-base outline-none focus:border-primary focus:bg-white transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base tracking-wide shadow-glow flex items-center justify-center gap-2 shrink-0 transition-all active:scale-95 disabled:opacity-75"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>Track Now</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500">Active Consignment Samples:</span>
            {["YLS-ODC-8819", "YLS-PN-7021", "YLS-OD-9337"].map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => setSampleTracking(chip)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-navy-dark hover:text-white text-slate-700 font-semibold transition"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Validation Error State */}
          {validationError && (
            <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm animate-in fade-in">
              <AlertTriangle className="w-5 h-5 shrink-0 text-red-500" />
              <p className="font-semibold">{validationError}</p>
            </div>
          )}

          {/* Not-Found State */}
          {notFoundData && (
            <div className="mt-6 p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 animate-in fade-in">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 text-base">Consignment Not Found</h4>
                  <p className="text-amber-800 text-sm mt-1">{notFoundData.message}</p>
                  {notFoundData.hint && (
                    <p className="text-amber-700 text-xs mt-2 italic">{notFoundData.hint}</p>
                  )}
                </div>
              </div>
              <div className="pt-3 border-t border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-amber-900 font-medium">Need immediate assistance?</span>
                <a
                  href="tel:+917021277197"
                  className="px-4 py-2 rounded-full bg-amber-600 text-white font-bold hover:bg-amber-700 transition"
                >
                  Call Pune HQ: +91 7021277197
                </a>
              </div>
            </div>
          )}

          {/* Success State */}
          {shipment && (
            <div className="mt-6 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 animate-in fade-in">
              {/* Top Banner: Docket Info & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-black uppercase tracking-wider">
                      {shipment.carrierType}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Docket #{shipment.consignmentNote}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#06112E] font-display mt-1">
                    {shipment.trackingId}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">{shipment.cargoDescription}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-sm flex items-center gap-1.5"
                    style={{ backgroundColor: shipment.statusColor }}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {shipment.status}
                  </span>
                </div>
              </div>

              {/* Origin to Destination Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Origin
                  </p>
                  <p className="text-base font-bold text-[#06112E] mt-0.5">{shipment.origin}</p>
                  <p className="text-xs text-slate-500 mt-1">Dispatched: {shipment.dispatchDate}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Destination
                  </p>
                  <p className="text-base font-bold text-[#06112E] mt-0.5">{shipment.destination}</p>
                  <p className="text-xs text-primary font-bold mt-1">
                    Estimated: {shipment.estimatedDelivery}
                  </p>
                </div>
              </div>

              {/* Current Transit Milestone */}
              <div className="p-4 rounded-2xl bg-navy-dark text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow text-[#06112E] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-yellow">
                      Current Verified Location
                    </span>
                    <p className="text-sm font-bold text-white">{shipment.currentLocation}</p>
                  </div>
                </div>
                <span className="hidden sm:inline px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                  GPS Active
                </span>
              </div>

              {/* Step Timeline */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Consignment Milestone History
                </h4>
                <div className="space-y-3">
                  {shipment.timeline.map((item, idx) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          item.completed
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {item.completed ? "✓" : idx + 1}
                      </div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <p className="text-sm font-bold text-slate-800">{item.step}</p>
                          <p className="text-xs text-slate-500">{item.location}</p>
                        </div>
                        <span className="text-xs font-semibold text-slate-400">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branch Handler Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400 font-bold uppercase">Route Coordinator:</span>
                  <p className="text-sm font-bold text-[#06112E]">{shipment.branchHandler}</p>
                </div>
                <a
                  href={`tel:${shipment.branchPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-hover text-white font-bold transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Handler: {shipment.branchPhone}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
