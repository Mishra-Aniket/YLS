"use client";

import React from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/constants";

/**
 * Moveable client strip — sits in normal flow right below the fixed navbar.
 * Each pill pairs the client's logo chip with its name and links to the
 * company's Google profile. Seamless loop: the track renders two copies
 * of the list and slides -50%.
 */
export default function ClientMarquee() {
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div
      className="relative z-30 overflow-hidden border-y border-white/10 bg-[#020b1f] py-3 sm:py-4 shadow-inner"
      aria-label="Companies we work with"
    >
      <div className="flex w-max animate-marquee items-center gap-3.5 pl-3.5">
        {track.map((client, idx) => {
          const profileUrl = `https://www.google.com/search?q=${encodeURIComponent(
            client.name + " India"
          )}`;
          return (
            <a
              key={`${client.name}-${idx}`}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${client.name} — Google Profile`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] py-1.5 pl-1.5 pr-5 transition-colors duration-300 hover:border-primary/60 hover:bg-white/[0.1]"
            >
              <span className="flex h-9 w-14 shrink-0 items-center justify-center rounded-full bg-white px-2">
                <Image
                  src={client.logo}
                  alt=""
                  width={90}
                  height={30}
                  className="max-h-6 w-auto max-w-full object-contain"
                />
              </span>
              <span className="whitespace-nowrap pr-1 font-heading font-semibold text-[13px] tracking-wide text-white/90">
                {client.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Edge fades so pills dissolve into the band */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020e28] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#020e28] to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
