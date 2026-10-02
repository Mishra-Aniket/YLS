"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  ShieldCheck,
  Share2,
  Bookmark,
} from "lucide-react";
import { BLOG_POSTS, COMPANY } from "@/lib/constants";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navbar */}
      <Navbar variant="floating" />

      {/* 2. Hero Banner */}
      <PageHeader
        title="Logistics Insights &amp; Freight News"
        subtitle="Expert technical articles, regulatory updates, and field advice on ODC transport, fleet safety, and warehousing optimization across India."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* 3. Blog List & Detailed Articles */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                id={post.slug}
                className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-card border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Visual */}
                <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-card border border-slate-100 bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-navy-dark text-brand-yellow font-bold text-xs uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                    <span className="flex items-center gap-1.5 text-primary">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#06112E] font-display leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="space-y-3 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {post.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Consultation CTA */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      Need route advice on this topic?{" "}
                      <Link href="/contact-us" className="text-primary font-bold hover:underline">
                        Speak with our Pune transport desk &rarr;
                      </Link>
                    </div>

                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-glow transition"
                    >
                      <span>Inquire ODC Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
