"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight, Truck, MapPin, FileText } from "lucide-react";
import Link from "next/link";
import { PRIMARY_SERVICES, BRANCHES, BLOG_POSTS } from "@/lib/constants";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = query.trim()
    ? PRIMARY_SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.shortDesc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredBranches = query.trim()
    ? BRANCHES.filter(
        (b) =>
          b.city.toLowerCase().includes(query.toLowerCase()) ||
          b.state.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 ${
        isOpen ? "" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#06112E]/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full max-w-2xl bg-white rounded-3xl shadow-card overflow-hidden z-10 border border-slate-100 transition-all duration-200 ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-3 scale-95"
        }`}
      >
        {/* Header / Input */}
        <div className="flex items-center px-6 py-5 border-b border-slate-100">
          <Search className="w-5 h-5 text-primary mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search transport services, ODC cargo, branches, or routes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-slate-800 placeholder-slate-400 text-base sm:text-lg outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-5">
          {query.trim() === "" ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Quick Suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "ODC Trailer Services",
                  "Pune Covered Warehouse",
                  "Bangalore Branch",
                  "Vadodara Route",
                  "Crane Arrangement",
                  "Track Consignment",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {filteredServices.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Services
                  </p>
                  <div className="space-y-2">
                    {filteredServices.map((srv) => (
                      <Link
                        key={srv.id}
                        href="/services"
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                            {srv.number}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{srv.title}</p>
                            <p className="text-xs text-slate-500 line-clamp-1">{srv.shortDesc}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredBranches.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Branch Offices
                  </p>
                  <div className="space-y-2">
                    {filteredBranches.map((br) => (
                      <Link
                        key={br.city}
                        href="/contact-us"
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-brand-yellow" />
                          <div>
                            <p className="text-sm font-bold text-slate-800">
                              {br.city}, {br.state} ({br.coordinators.map((c) => c.name).join(', ')})
                            </p>
                            <p className="text-xs text-slate-500">
                              {br.coordinators.map((c) => c.phone).join(' / ')}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-primary">Call Now</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredServices.length === 0 && filteredBranches.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-sm text-slate-500">
                    No results found for &ldquo;{query}&rdquo;.
                  </p>
                  <Link
                    href="/quote"
                    onClick={onClose}
                    className="inline-block mt-3 text-xs font-bold text-primary hover:underline"
                  >
                    Request a Custom Quote &rarr;
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
