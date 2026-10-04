"use client";

import React from "react";
import TruckIcon from "./TruckIcon";
import { Phone, MapPin } from "lucide-react";
import { BRANCHES } from "@/lib/constants";

export default function BranchSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sec-intro text-center mx-auto mb-16">
          <span className="sub-title">
            <TruckIcon />
            ALL-INDIA NETWORK
          </span>
          <h2 className="sec-title">5 Key Interstate Branch Hubs</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            With registered branch coordinators across five strategic states, YES Logistics Service ensures seamless route management and immediate ground assistance.
          </p>
        </div>

        {/* 5 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.city}
              className={`group p-5 sm:p-6 rounded-[26px] transition-all duration-300 flex flex-col justify-between ${
                branch.isHeadquarter
                  ? "bg-[#06112E] text-white shadow-xl hover:-translate-y-1.5 border-2 border-primary"
                  : "bg-slate-50 text-[#06112E] shadow-sm hover:shadow-xl hover:-translate-y-1.5 border border-slate-200/80"
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider ${
                      branch.isHeadquarter
                        ? "bg-primary text-white"
                        : "bg-white text-[#06112E] border border-slate-200"
                    }`}
                  >
                    {branch.stateCode} &bull; {branch.isHeadquarter ? "Headquarters" : "Branch"}
                  </span>
                </div>

                {/* City & State */}
                <h3 className="text-2xl font-heading font-black mb-0.5 uppercase tracking-tight">
                  {branch.city}
                </h3>
                <p
                  className={`text-xs font-semibold mb-5 ${
                    branch.isHeadquarter ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {branch.state}
                </p>

                {/* Coordinators List */}
                <div className="space-y-4 mb-5">
                  <p
                    className={`text-[11px] uppercase tracking-wider font-extrabold ${
                      branch.isHeadquarter ? "text-primary" : "text-slate-400"
                    }`}
                  >
                    {branch.coordinators.length > 1 ? "Branch Coordinators" : "Branch Coordinator"}
                  </p>

                  {branch.coordinators.map((c, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl ${
                        branch.isHeadquarter
                          ? "bg-white/10 border border-white/10"
                          : "bg-white border border-slate-200/80 shadow-xs"
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-heading font-extrabold tracking-wide">
                        {c.name}
                      </p>
                      <p
                        className={`text-xs font-mono font-bold mt-0.5 ${
                          branch.isHeadquarter ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {c.phone}
                      </p>

                      {/* Dual Action Buttons: Call & WhatsApp */}
                      <div className="grid grid-cols-2 gap-1.5 mt-2.5">
                        <a
                          href={`tel:${c.phoneRaw}`}
                          className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl text-[11px] font-heading font-bold transition ${
                            branch.isHeadquarter
                              ? "bg-primary hover:bg-primary-hover text-white"
                              : "bg-[#06112E] hover:bg-primary text-white"
                          }`}
                          aria-label={`Call ${c.name}`}
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </a>

                        <a
                          href={`https://wa.me/${c.phoneRaw.replace(/\+/g, "")}?text=Hello%20${encodeURIComponent(
                            c.name
                          )}%2C%20I%20need%20a%20transport%20quote.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl text-[11px] font-heading font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white transition"
                          aria-label={`WhatsApp ${c.name}`}
                        >
                          <i className="fa-brands fa-whatsapp text-xs" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-xs pt-2 border-t border-slate-200/30">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                  <span
                    className={`leading-relaxed ${
                      branch.isHeadquarter ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {branch.address}, {branch.pincode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
