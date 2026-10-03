"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TruckIcon from "./TruckIcon";
import { TESTIMONIALS } from "@/lib/constants";

interface Testimonial {
  name: string;
  company?: string;
  location?: string;
  rating: number;
  quote: string;
}

interface SubmitState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}

function Stars({ value, size = "w-4 h-4" }: { value: number; size?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} star rating`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <i
          key={i}
          className={`fa-solid fa-star ${size} ${i <= value ? "text-brand-yellow" : "text-slate-300"}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function TestimonialSection() {
  const [dynamic, setDynamic] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({ name: "", company: "", rating: 5, quote: "" });
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });

  // Load visitor-submitted testimonials (newest first)
  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.testimonials)) {
          setDynamic(
            data.testimonials.map((t: Record<string, unknown>) => ({
              name: String(t.name || "Client"),
              company: t.company ? String(t.company) : undefined,
              location: t.createdAt
                ? new Date(String(t.createdAt)).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : undefined,
              rating: Number(t.rating) || 5,
              quote: String(t.quote || ""),
            }))
          );
        }
      })
      .catch(() => {
        /* defaults remain */
      });
  }, []);

  const all: Testimonial[] = [
    ...dynamic,
    ...TESTIMONIALS.map((t) => ({
      name: t.author,
      company: t.company,
      location: t.location,
      rating: t.rating,
      quote: t.quote,
    })),
  ];
  const safeIndex = Math.min(currentIndex, all.length - 1);
  const current = all[safeIndex];

  const prev = () => setCurrentIndex((c) => (c - 1 + all.length) % all.length);
  const next = () => setCurrentIndex((c) => (c + 1) % all.length);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit({ status: "loading" });
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmit({ status: "error", message: data.error || "Failed to submit feedback." });
        return;
      }
      // Prepend the saved testimonial so it shows immediately
      setDynamic((prevList) => [
        {
          name: data.testimonial.name,
          company: data.testimonial.company,
          location: new Date(data.testimonial.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          rating: data.testimonial.rating,
          quote: data.testimonial.quote,
        },
        ...prevList,
      ]);
      setCurrentIndex(0);
      setSubmit({ status: "success", message: data.message });
      setForm({ name: "", company: "", rating: 5, quote: "" });
      setShowForm(false);
    } catch {
      setSubmit({ status: "error", message: "Network error. Please try again." });
    }
  };

  return (
    <section className="review-sec sec-padding relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Real loading crew photo in arch frame */}
          <div className="lg:col-span-4">
            <div className="relative max-w-sm mx-auto pt-3 pl-3">
              {/* Offset orange outline decoration */}
              <div
                className="absolute top-0 left-0 w-full h-full border-2 border-primary rounded-t-[30px] rounded-b-[999px] pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-t-[30px] rounded-b-[999px] overflow-hidden shadow-card aspect-[4/5]">
                <Image
                  src="/images/yls/yls-heavy-loading.jpg"
                  alt="YES Logistics field team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial content matching TransHub .review-wrapper */}
          <div className="lg:col-span-8 space-y-6">
            <span className="sub-title">
              <TruckIcon />
              TESTIMONIAL
            </span>

            <h2 className="sec-title">Our Customers Share Their Success Stories</h2>

            {/* Divider under heading matching TransHub */}
            <div className="border-t border-slate-200" />

            {/* Big orange quote mark matching TransHub */}
            <i
              className="fa-solid fa-quote-right text-primary text-4xl leading-none"
              aria-hidden="true"
            />

            {/* Rating stars for the current story */}
            <Stars value={current.rating ?? 5} size="w-4 h-4" />

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl text-dark font-heading font-medium leading-relaxed italic pt-1 min-h-[110px] sm:min-h-[100px]">
              {current.quote}
            </blockquote>

            {/* Author info */}
            <div>
              <h4 className="text-lg font-heading font-bold text-dark">{current.name}</h4>
              {current.company && (
                <p className="text-sm font-semibold text-primary">{current.company}</p>
              )}
              {current.location && <p className="text-xs text-mute mt-0.5">{current.location}</p>}
            </div>

            {/* Slider controls + feedback toggle */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-[10px] bg-primary/90 hover:bg-dark text-white flex items-center justify-center transition shadow-md"
                  aria-label="Previous story"
                >
                  <i className="fa fa-arrow-left text-sm"></i>
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-[10px] bg-primary hover:bg-dark text-white flex items-center justify-center transition shadow-md"
                  aria-label="Next story"
                >
                  <i className="fa fa-arrow-right text-sm"></i>
                </button>
              </div>

              {/* Progress line */}
              <div className="hidden sm:block flex-1 max-w-[180px] h-[2px] bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${((safeIndex + 1) / all.length) * 100}%` }}
                />
              </div>

              {/* Feedback toggle */}
              <button
                type="button"
                onClick={() => {
                  setShowForm((s) => !s);
                  setSubmit({ status: "idle" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-dark text-dark font-heading font-semibold text-sm hover:bg-dark hover:text-white hover:border-dark transition-colors"
              >
                <i className="fa-solid fa-pen-to-square text-xs" aria-hidden="true"></i>
                {showForm ? "Close Form" : "Give Your Feedback"}
              </button>
            </div>

            {/* Collapsible feedback form */}
            {showForm && (
              <form
                onSubmit={handleSubmit}
                className="rounded-[30px] bg-shade border border-slate-200 p-6 sm:p-8 space-y-5 animate-in fade-in"
              >
                <h3 className="text-lg font-heading font-bold text-dark">
                  Share Your Experience
                </h3>

                {submit.status === "success" && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-sm font-semibold">
                    <i className="fa-solid fa-circle-check text-emerald-600" aria-hidden="true"></i>
                    {submit.message}
                  </div>
                )}
                {submit.status === "error" && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-2 text-red-700 text-sm font-semibold">
                    <i className="fa-solid fa-circle-exclamation text-red-500" aria-hidden="true"></i>
                    {submit.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-full bg-white border border-slate-200 text-sm font-medium outline-none focus:border-primary transition"
                  />
                  <input
                    type="text"
                    placeholder="Company / Organization"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-5 py-3 rounded-full bg-white border border-slate-200 text-sm font-medium outline-none focus:border-primary transition"
                  />
                </div>

                {/* Interactive star rating */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-heading font-semibold text-dark">
                    Your Rating:
                  </span>
                  <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
                    {[1, 2, 3, 4, 5].map((i) => {
                      const active = i <= (hoverRating || form.rating);
                      return (
                        <button
                          key={i}
                          type="button"
                          onMouseEnter={() => setHoverRating(i)}
                          onClick={() => setForm({ ...form, rating: i })}
                          aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
                          className="cursor-pointer transition-transform hover:scale-125"
                        >
                          <i
                            className={`fa-solid fa-star text-lg ${
                              active ? "text-brand-yellow" : "text-slate-300"
                            }`}
                            aria-hidden="true"
                          ></i>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="Write your feedback about our service (min. 10 characters) *"
                  value={form.quote}
                  onChange={(e) => setForm({ ...form, quote: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-[24px] bg-white border border-slate-200 text-sm font-medium outline-none focus:border-primary transition resize-none"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submit.status === "loading"}
                    className="btn-primary disabled:opacity-75"
                  >
                    {submit.status === "loading" ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Feedback</span>
                        <i className="fa fa-turn-up text-sm" aria-hidden="true"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
