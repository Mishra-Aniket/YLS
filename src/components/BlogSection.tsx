"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-0.5 bg-primary" />
            <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.2em] uppercase font-display">
              BLOG &amp; LOGISTICS NEWS
            </p>
            <span className="w-6 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06112E] font-display">
            Insights on Safer Freight &amp; ODC Movement
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Technical guides and operational analysis from our fleet coordinators and highway engineers.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-navy-dark text-brand-yellow font-bold text-xs uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Meta: Date and Read Time */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-black text-[#06112E] font-display group-hover:text-primary transition-colors leading-snug mb-3">
                    <Link href={`/blog#${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2">
                <Link
                  href={`/blog#${post.slug}`}
                  className="inline-flex items-center gap-2 pt-4 text-xs sm:text-sm font-bold text-primary group-hover:text-primary-hover transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
