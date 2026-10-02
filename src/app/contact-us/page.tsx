"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import BranchSection from "@/components/BranchSection";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { COMPANY, BRANCHES } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Business Transportation Enquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Submit as quote / general enquiry to /api/quote
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          freightType: formData.subject,
          goodsType: "General Commercial Inquiry",
          notes: formData.message,
        }),
      });
      setSentSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "Business Transportation Enquiry", message: "" });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navbar */}
      <Navbar variant="floating" />

      {/* 2. Hero Banner */}
      <PageHeader
        title="Contact YES Logistics Service"
        subtitle="Reach out to our Pune headquarters or connect directly with our branch managers across Maharashtra, Karnataka, Gujarat, Odisha, and Uttar Pradesh."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* 3. Primary Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Registered Office */}
            <div className="p-8 rounded-3xl bg-[#F5F7FA] border border-slate-200/80 hover:bg-white hover:shadow-card transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#06112E] font-display mb-2">
                  Registered Office
                </h3>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Pune, Maharashtra
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {COMPANY.registeredOffice.full}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-500 font-mono">
                Pin: 411033 &bull; Chinchwad Gaon
              </div>
            </div>

            {/* Card 2: Dispatch Hotlines */}
            <div className="p-8 rounded-3xl bg-navy-dark text-white shadow-card border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-navy-dark flex items-center justify-center font-bold mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white font-display mb-2">
                  Central Dispatch Phones
                </h3>
                <p className="text-xs font-bold text-brand-yellow uppercase tracking-wider mb-2">
                  24/7 Response Support
                </p>
                <div className="space-y-1.5 text-slate-200 text-sm">
                  <p>
                    Primary:{" "}
                    <a
                      href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, "")}`}
                      className="font-bold text-white hover:text-brand-yellow"
                    >
                      {COMPANY.primaryPhone}
                    </a>
                  </p>
                  <p>
                    Additional:{" "}
                    <a
                      href={`tel:${COMPANY.additionalPhone.replace(/\s+/g, "")}`}
                      className="font-bold text-white hover:text-brand-yellow"
                    >
                      {COMPANY.additionalPhone}
                    </a>
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400">
                Direct route assistance &amp; driver dispatch
              </div>
            </div>

            {/* Card 3: Corporate Email */}
            <div className="p-8 rounded-3xl bg-[#F5F7FA] border border-slate-200/80 hover:bg-white hover:shadow-card transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#175A9D]/10 text-[#175A9D] flex items-center justify-center font-bold mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#06112E] font-display mb-2">
                  Corporate Email
                </h3>
                <p className="text-xs font-bold text-[#175A9D] uppercase tracking-wider mb-2">
                  Documentation &amp; Quotes
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-base font-bold text-[#06112E] hover:text-primary transition"
                >
                  {COMPANY.email}
                </a>
                <p className="text-slate-500 text-xs mt-2">
                  Send tender documents, bill of materials, and CAD drawings for ODC surveys.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-500">
                Response within 2 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Form & Business Enquiry CTA */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-100">
            <div className="max-w-xl mx-auto text-center mb-10 space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">
                SEND DIRECT ENQUIRY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#06112E] font-display">
                How Can We Support Your Transportation?
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Drop your message below and our Pune transport manager will get back to you immediately.
              </p>
            </div>

            {sentSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-black text-emerald-900 font-display">
                  Enquiry Transmitted to Dispatch!
                </h3>
                <p className="text-sm text-emerald-800">
                  Thank you for contacting YES LOGISTICS SERVICE. A fleet coordinator is reviewing your message and will reach out shortly.
                </p>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="px-6 py-2.5 rounded-full bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Kulkarni"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="amit@industry.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98220 54321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-primary focus:bg-white transition"
                    >
                      <option value="ODC Trailer Requirement">ODC Trailer Requirement</option>
                      <option value="Mechanical Flatbed Trailer">Mechanical Flatbed Trailer</option>
                      <option value="Covered Warehousing (Pune)">Covered Warehousing (Pune)</option>
                      <option value="Crane & Loading Service">Crane &amp; Loading Service</option>
                      <option value="Vendor Registration Inquiry">Vendor Registration Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Your Message / Consignment Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your freight origin, destination, cargo dimensions, weight, or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-primary focus:bg-white transition resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-10 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base shadow-glow transition-all active:scale-95 disabled:opacity-75"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. Branch Locations */}
      <BranchSection />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
