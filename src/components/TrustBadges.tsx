'use client';

import React from 'react';

export function GstBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition ${
        dark
          ? 'bg-white/5 border-white/15 hover:border-primary/50 text-white'
          : 'bg-white border-slate-200/80 shadow-xs hover:border-primary/50 text-dark'
      }`}
    >
      <div className="w-8 h-8 rounded-xl bg-[#06112E] flex items-center justify-center shrink-0 border border-amber-400/40 shadow-sm">
        <span className="font-heading font-black text-[11px] text-amber-400 tracking-tighter">
          GST
        </span>
      </div>
      <div>
        <span className="font-heading font-extrabold text-xs uppercase tracking-wider block leading-none">
          GST Registered
        </span>
        <span className="text-[10px] text-slate-400 font-semibold mt-1 block leading-none">
          Tax Compliant Invoicing
        </span>
      </div>
    </div>
  );
}

export function MsmeBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition ${
        dark
          ? 'bg-white/5 border-white/15 hover:border-emerald-500/50 text-white'
          : 'bg-white border-slate-200/80 shadow-xs hover:border-emerald-500/50 text-dark'
      }`}
    >
      <div className="w-8 h-8 rounded-xl bg-[#064E3B] flex items-center justify-center shrink-0 border border-emerald-400/40 shadow-sm">
        <span className="font-heading font-black text-[9px] text-emerald-300 tracking-tighter">
          MSME
        </span>
      </div>
      <div>
        <span className="font-heading font-extrabold text-xs uppercase tracking-wider block leading-none">
          MSME Udyam Certified
        </span>
        <span className="text-[10px] text-emerald-400 font-semibold mt-1 block leading-none">
          Govt. of India Enterprise
        </span>
      </div>
    </div>
  );
}

export function TransportPermitBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition ${
        dark
          ? 'bg-white/5 border-white/15 hover:border-blue-500/50 text-white'
          : 'bg-white border-slate-200/80 shadow-xs hover:border-blue-500/50 text-dark'
      }`}
    >
      <div className="w-8 h-8 rounded-xl bg-[#175A9D] flex items-center justify-center shrink-0 border border-blue-300/40 shadow-sm">
        <i className="fa-solid fa-truck-shield text-xs text-white" />
      </div>
      <div>
        <span className="font-heading font-extrabold text-xs uppercase tracking-wider block leading-none">
          M.V. Act Compliant
        </span>
        <span className="text-[10px] text-slate-400 font-semibold mt-1 block leading-none">
          National Permit Fleet
        </span>
      </div>
    </div>
  );
}
