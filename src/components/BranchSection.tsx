"use client";

import React from "react";
import TruckIcon from "./TruckIcon";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
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
            With registered branch managers across five strategic states, YES Logistics Service ensures seamless route management and immediate ground assistance.
          </p>
        </div>

        {/* 5 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.city}
              className={`group p-6 rounded-[26px] transition-all duration-300 flex flex-col justify-between ${
                branch.isHeadquarter
                  ? "bg-dark text-white shadow-xl hover:-translate-y-2 border-2 border-primary"
                  : "bg-shade text-dark shadow-sm hover:shadow-xl hover:-translate-y-2 border border-slate-100"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider ${
                      branch.isHeadquarter
                        ? "bg-primary text-white"
                        : "bg-white text-dark"
                    }`}
                  >
                    {branch.stateCode} &bull; {branch.isHeadquarter ? "Headquarters" : "Branch"}
                  </span>
                  <a
                    href={`tel:${branch.phoneRaw}`}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                      branch.isHeadquarter
                        ? "bg-white/10 hover:bg-primary text-white"
                        : "bg-white hover:bg-primary text-dark hover:text-white"
                    }`}
                    aria-label={`Call ${branch.city}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* City & State */}
                <h3 className="text-xl font-heading font-bold mb-1">
                  {branch.city}
                </h3>
                <p
                  className={`text-xs font-medium mb-4 ${
                    branch.isHeadquarter ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {branch.state}
                </p>

                {/* Contact Person */}
                <div className="mb-4">
                  <p
                    className={`text-[11px] uppercase tracking-wider font-bold ${
                      branch.isHeadquarter ? "text-primary" : "text-mute"
                    }`}
                  >
                    Branch Coordinator
                  </p>
                  <p className="text-sm font-heading font-bold mt-0.5">
                    {branch.contactPerson}
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-xs mb-4">
                  <MapPin
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      branch.isHeadquarter ? "text-primary" : "text-primary"
                    }`}
                  />
                  <span
                    className={`leading-relaxed ${
                      branch.isHeadquarter ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {branch.address}, {branch.pincode}
                  </span>
                </div>
              </div>

              {/* Call button */}
              <div className="pt-4 border-t border-slate-200/40">
                <a
                  href={`tel:${branch.phoneRaw}`}
                  className={`inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full text-xs font-heading font-bold transition ${
                    branch.isHeadquarter
                      ? "bg-primary hover:bg-[#eb3802] text-white"
                      : "bg-white hover:bg-primary text-dark hover:text-white shadow-sm"
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{branch.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
