'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/imageLoader';

export function GstLogoMark({ className = 'h-10 sm:h-12 w-auto' }: { className?: string }) {
  return (
    <div className="inline-flex items-center shrink-0">
      <Image
        src={getAssetPath('/images/trust/gst-logo.svg')}
        alt="GST Goods and Services Tax Government of India Registered Firm Logo"
        width={180}
        height={56}
        className={`object-contain ${className}`}
      />
    </div>
  );
}

export function MsmeLogoMark({ className = 'h-10 sm:h-12 w-auto' }: { className?: string }) {
  return (
    <div className="inline-flex items-center shrink-0">
      <Image
        src={getAssetPath('/images/trust/msme-logo.svg')}
        alt="Ministry of MSME Government of India Logo"
        width={200}
        height={56}
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
