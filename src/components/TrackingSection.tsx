"use client";

import React, { useState } from "react";
import TruckIcon from "./TruckIcon";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Phone,
  MapPin,
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

    setLoading(true);
    try {
      const res = await fetch(`/api/track?trackingId=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (!res.ok || !data.found) {
        setNotFoundData({
          message: data.message || `No active shipment found matching reference "${query}".`,
          hint: data.hint || "Please verify your LR (Lorry Receipt) docket number with our Pune dispatch depot.",
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
    <section
      id="tracking-section"
      className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/tracking-bg.jpg')",
        backgroundColor: "#020e28",
      }}
    >
      {/* TransHub Parallax Overlay */}
      <div className="absolute inset-0 bg-[#020e28]/90" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Intro */}
        <div className="sec-intro text-center mx-auto mb-12">
          <span className="sub-title">
            <TruckIcon />
            REAL-TIME TRACKING
          </span>
          <h2 className="sec-title text-white">Track the Status of Your Shipment Instantly</h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4">
            Enter your tracking ID or Lorry Receipt (LR) number to view verified interstate dispatch status and delivery schedule.
          </p>
        </div>

        {/* Tracking Form Box matching TransHub styling */}
        <div className="bg-white rounded-[30px] p-6 sm:p-8 shadow-2xl text-dark">
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
              className="btn-primary py-4 px-8 text-base shadow-glow flex items-center justify-center gap-2 shrink-0 disabled:opacity-75"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>Track Now</span>
                  <i className="fa fa-arrow-right text-sm" aria-hidden="true"></i>
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
                className="px-3 py-1 rounded-full bg-slate-100 hover:bg-dark hover:text-white text-slate-700 font-semibold transition"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Validation Error */}
          {validationError && (
            <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm animate-in fade-in">
              <AlertTriangle className="w-5 h-5 shrink-0 text-red-500" />
              <p className="font-semibold">{validationError}</p>
            </div>
          )}

          {/* Not Found */}
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
            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                      {shipment.carrierType}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Docket #{shipment.consignmentNote}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-dark mt-1">
                    {shipment.trackingId}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">{shipment.cargoDescription}</p>
                </div>

                <div>
                  <span
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1.5"
                    style={{ backgroundColor: shipment.statusColor }}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {shipment.status}
                  </span>
                </div>
              </div>

              {/* Origin to Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Origin</p>
                  <p className="text-base font-bold text-dark mt-0.5">{shipment.origin}</p>
                  <p className="text-xs text-slate-500 mt-1">Dispatched: {shipment.dispatchDate}</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Destination</p>
                  <p className="text-base font-bold text-dark mt-0.5">{shipment.destination}</p>
                  <p className="text-xs text-primary font-bold mt-1">Estimated: {shipment.estimatedDelivery}</p>
                </div>
              </div>

              {/* Current Location */}
              <div className="p-4 rounded-xl bg-dark text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Current Verified Location
                    </span>
                    <p className="text-sm font-bold text-white">{shipment.currentLocation}</p>
                  </div>
                </div>
                <span className="hidden sm:inline px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                  GPS Active
                </span>
              </div>

              {/* Milestone steps */}
              <div className="space-y-2">
                {shipment.timeline.map((item, idx) => (
                  <div
                    key={item.step}
                    className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-100 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${item.completed ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-600"}`}>
                        {item.completed ? "✓" : idx + 1}
                      </span>
                      <span className="font-bold text-dark">{item.step}</span>
                      <span className="text-slate-500">({item.location})</span>
                    </div>
                    <span className="text-slate-400 font-medium">{item.time}</span>
                  </div>
                ))}
              </div>

              {/* Branch Handler */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400 font-bold uppercase">Route Coordinator:</span>
                  <p className="text-sm font-bold text-dark">{shipment.branchHandler}</p>
                </div>
                <a
                  href={`tel:${shipment.branchPhone.replace(/\s+/g, "")}`}
                  className="btn-primary py-2 px-4 text-xs"
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
