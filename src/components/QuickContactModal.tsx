"use client";

import React, { useEffect } from "react";
import { X, Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CONTACT_NUMBERS = [
  {
    name: "Sandeep Ojha",
    label: "Central Dispatch Desk",
    rawNumber: "7020057149",
    displayNumber: "+91 70200 57149",
    handler: "Dispatch & Freight Quotation",
    whatsappUrl:
      "https://wa.me/917020057149?text=Hello%20Sandeep%20Ojha%2C%20I%20would%20like%20to%20inquire%20about%20freight%20and%20transport%20services.",
    callUrl: "tel:+917020057149",
  },
  {
    name: "R. K. Mishra",
    label: "Heavy Haulage Desk",
    rawNumber: "7021277197",
    displayNumber: "+91 70212 77197",
    handler: "ODC & Fleet Operations",
    whatsappUrl:
      "https://wa.me/917021277197?text=Hello%20R.%20K.%20Mishra%2C%20I%20would%20like%20to%20inquire%20about%20ODC%20and%20trailer%20movement.",
    callUrl: "tel:+917021277197",
  },
];

export default function QuickContactModal({ isOpen, onClose }: QuickContactModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Brand Gradient Accent */}
        <div className="relative bg-[#020e28] text-white p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs uppercase tracking-wider font-heading font-bold text-slate-300">
                24/7 Dispatch Control
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-3">
            Connect With YES Logistics
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-body mt-1">
            Choose a contact number below to directly <strong>Call</strong> or chat on <strong>WhatsApp</strong>:
          </p>
        </div>

        {/* Content with Both Numbers */}
        <div className="p-6 sm:p-7 space-y-5 bg-slate-50/50">
          {CONTACT_NUMBERS.map((contact, idx) => (
            <div
              key={contact.rawNumber}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-1">
                    {contact.name} &bull; {contact.handler}
                  </span>
                  <div className="text-lg sm:text-xl font-heading font-black text-dark tracking-tight">
                    {contact.displayNumber}
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Call */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {/* WhatsApp Button */}
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-heading font-bold shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-base sm:text-lg"></i>
                  <span>WhatsApp</span>
                </a>

                {/* Call Button */}
                <a
                  href={contact.callUrl}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#020e28] hover:bg-primary text-white text-xs sm:text-sm font-heading font-bold shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer reassurance */}
        <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Fast reply within 5-10 minutes on WhatsApp</span>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-semibold text-dark">Verified Desk</span>
          </div>
        </div>
      </div>
    </div>
  );
}
