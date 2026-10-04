'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/imageLoader';

export function GstLogoMark({ className = 'h-9 sm:h-11 w-auto' }: { className?: string }) {
  return (
    <div className="inline-flex items-center shrink-0 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition">
      <Image
        src={getAssetPath('/images/trust/gst-logo.svg')}
        alt="GST Goods and Services Tax Government of India Registered Firm Logo"
        width={190}
        height={52}
        className={`object-contain ${className}`}
      />
    </div>
  );
}

export function MsmeLogoMark({ className = 'h-9 sm:h-11 w-auto' }: { className?: string }) {
  return (
    <div className="inline-flex items-center shrink-0 bg-white px-3.5 py-2 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition">
      <Image
        src={getAssetPath('/images/trust/msme-official.png')}
        alt="Ministry of MSME Government of India Official Logo"
        width={566}
        height={440}
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
