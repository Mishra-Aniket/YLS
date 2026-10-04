"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Truck, MapPin, Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function QuickEnquiryStrip() {
  const router = useRouter();
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [cargoType, setCargoType] = useState("Mini Truck / Pickup (1T - 3.5T)");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert("Please enter your Phone or WhatsApp number.");
      return;
    }

    const message = `Hello YES Logistics, I would like a freight quote:%0A- Pickup: ${encodeURIComponent(
      pickup || "Pune"
    )}%0A- Destination: ${encodeURIComponent(
      drop || "Pan-India"
    )}%0A- Vehicle/Cargo: ${encodeURIComponent(cargoType)}%0A- Phone: ${encodeURIComponent(phone)}`;

    // Open WhatsApp directly with pre-filled quote inquiry
    window.open(`https://wa.me/917020057149?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="relative z-30 bg-[#06112E] border-y border-white/10 text-white py-6 sm:py-8 shadow-xl">
      <div className="max-w-[1640px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          
          {/* Left Title & Assurance */}
          <div className="xl:max-w-xs shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-heading font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              Instant Commercial Rates
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight">
              Request Freight Quote
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Direct dispatch quotes for Pickups, Taurus Trucks &amp; Heavy ODC Trailers.
            </p>
          </div>

          {/* Form Strip */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white/[0.05] p-2.5 sm:p-3 rounded-2xl border border-white/10 backdrop-blur-md"
          >
            {/* Pickup Input */}
            <div className="relative flex items-center bg-white/[0.08] hover:bg-white/[0.12] rounded-xl px-3 py-2.5 border border-white/10 focus-within:border-primary transition">
              <MapPin className="w-4 h-4 text-primary shrink-0 mr-2" />
              <input
                type="text"
                placeholder="Pickup (e.g. Pune, Chakan)"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 outline-none font-body"
              />
            </div>

            {/* Drop Location */}
            <div className="relative flex items-center bg-white/[0.08] hover:bg-white/[0.12] rounded-xl px-3 py-2.5 border border-white/10 focus-within:border-primary transition">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mr-2" />
              <input
                type="text"
                placeholder="Destination (e.g. Bangalore)"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 outline-none font-body"
              />
            </div>

            {/* Cargo / Vehicle Type Selector */}
            <div className="relative flex items-center bg-white/[0.08] hover:bg-white/[0.12] rounded-xl px-3 py-2.5 border border-white/10 focus-within:border-primary transition">
              <Truck className="w-4 h-4 text-amber-400 shrink-0 mr-2" />
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white outline-none font-body cursor-pointer [&>option]:bg-dark [&>option]:text-white"
              >
                <option value="Mini Truck / Pickup (1T - 3.5T)">Mini Truck / Pickup (1T - 3.5T)</option>
                <option value="ODC Hydraulic Modular Trailer">ODC Hydraulic Modular Trailer</option>
                <option value="Multi-Axle Taurus (16T - 25T)">Multi-Axle Taurus (16T - 25T)</option>
                <option value="Closed Container (20ft - 32ft)">Closed Container (20ft - 32ft)</option>
                <option value="40ft / 50ft Flatbed Trailer">40ft / 50ft Flatbed Trailer</option>
                <option value="Covered Warehousing & Storage">Covered Warehousing & Storage</option>
                <option value="Convoy Pilot Escort & Cranes">Convoy Pilot Escort & Cranes</option>
              </select>
            </div>

            {/* Phone Number + Submit Button in single block or combined */}
            <div className="flex gap-2">
              <div className="relative flex-1 flex items-center bg-white/[0.08] hover:bg-white/[0.12] rounded-xl px-3 py-2.5 border border-white/10 focus-within:border-primary transition">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mr-2" />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 outline-none font-body"
                />
              </div>

              <button
                type="submit"
                className="shrink-0 px-4 sm:px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-heading font-bold shadow-glow flex items-center gap-1.5 transition-all transform active:scale-95 cursor-pointer"
              >
                <span>Get Rate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Reassurance Trust Pills below the strip */}
        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-y-2 text-[11px] sm:text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Govt Registered: <strong>UDYAM-MH-26-0145431</strong>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              GSTIN Verified &bull; Motor Vehicles Act 100% Compliant
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Quotes Dispatched within 10-15 Minutes
            </span>
          </div>

          <div className="text-slate-400 font-medium">
            Direct Dispatch: <strong className="text-white">+91 70200 57149</strong> / <strong className="text-white">+91 70212 77197</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
