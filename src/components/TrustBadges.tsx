'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/imageLoader';

export function GstLogoMark({ className = 'h-8 sm:h-10 w-auto' }: { className?: string }) {
  return (
    <div className="inline-flex items-center shrink-0 bg-white/95 px-3.5 py-1.5 rounded-xl border border-white/20 shadow-sm hover:bg-white transition">
      <Image
        src={getAssetPath('/images/trust/gst-logo.svg')}
        alt="GST Goods and Services Tax Government of India Registered Firm Logo"
        width={180}
        height={50}
        className={`object-contain ${className}`}
      />
    </div>
  );
}

export function MsmeLogoMark({ className = 'h-8 sm:h-10 w-auto' }: { className?: string }) {
  return (
    <div className="inline-flex items-center shrink-0 bg-white/95 px-3.5 py-1.5 rounded-xl border border-white/20 shadow-sm hover:bg-white transition">
      <Image
        src={getAssetPath('/images/trust/msme-official.png')}
        alt="Ministry of MSME Government of India Official Logo"
        width={220}
        height={50}
        className={`object-contain ${className}`}
      />
    </div>
  );
}

export function GstBadge() {
  return <GstLogoMark />;
}

export function MsmeBadge() {
  return <MsmeLogoMark />;
}

export function TransportPermitBadge() {
  return null;
}
