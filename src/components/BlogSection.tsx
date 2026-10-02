"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import { BLOG_POSTS } from "@/lib/constants";

const BLOG_IMAGES = [
  "/images/bl1-388x275.jpg",
  "/images/bl2-388x275.jpg",
  "/images/bl3-388x275.jpg",
];

export default function BlogSection() {
  return (
    <section className="blog-sec sec-padding bg-shade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="sec-intro text-center mx-auto mb-14">
          <span className="sub-title">
            <TruckIcon />
            BLOG &amp; NEWS
          </span>
          <h2 className="sec-title">Insights on Safer Freight &amp; ODC Movement</h2>
        </div>

        {/* 3 Blog Cards Grid matching TransHub .blog-entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => {
            const imgPath = BLOG_IMAGES[idx] || "/images/bl1-388x275.jpg";

            return (
              <article
                key={post.id}
                className="group bg-white rounded-[30px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative w-full h-60 overflow-hidden bg-slate-100">
                    <Image
                      src={imgPath}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full bg-dark text-white font-heading font-semibold text-xs uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs font-semibold text-mute mb-3">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-dark group-hover:text-primary transition-colors leading-snug mb-3">
                      <Link href={`/blog#${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-7 pb-7 pt-0 border-t border-slate-100 mt-2">
                  <Link
                    href={`/blog#${post.slug}`}
                    className="link-btn pt-4 text-sm font-heading font-semibold text-dark group-hover:text-primary inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Read Article</span>
                    <i className="fa fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
