"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TruckIcon from "./TruckIcon";
import { BLOG_POSTS } from "@/lib/constants";

const BLOG_IMAGES = [
  "/images/work/work-06.jpeg",
  "/images/work/work-09.jpeg",
  "/images/work/work-12.jpeg",
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
            const imgPath = BLOG_IMAGES[idx] || "/images/work/work-06.jpeg";

            return (
              <article
                key={post.id}
                className="group bg-white rounded-[30px] p-4 sm:p-5 pb-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Inset rounded thumbnail matching TransHub */}
                  <div className="relative w-full h-56 rounded-[24px] overflow-hidden bg-slate-100">
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
                  <div className="px-2 sm:px-3 pt-6">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-mute mb-3">
                      <span className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center text-[10px] font-heading font-bold shrink-0">
                        {post.author
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </span>
                      <span className="text-dark">By {post.author}</span>
                      <span>&bull;</span>
                      <span>{post.date}</span>
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

                {/* Footer link matching TransHub: text + dark circular arrow */}
                <div className="px-2 sm:px-3 pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={`/blog#${post.slug}`}
                    className="inline-flex items-center gap-3 text-base font-heading font-semibold text-dark group-hover:text-primary transition-colors"
                  >
                    <span>Read More</span>
                    <span className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center transition-colors">
                      <i className="fa fa-arrow-right text-xs"></i>
                    </span>
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
