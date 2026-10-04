'use client';

import { trackEvent } from './GoogleAnalytics';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden flex border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <a
        href="tel:+917020057149"
        onClick={() => trackEvent('click', 'phone', 'mobile_bottom_bar')}
        className="flex-1 flex items-center justify-center gap-2 py-3 min-h-[56px] text-sm font-bold text-white bg-[#06112E] active:bg-[#175A9D] transition"
      >
        <i className="fa-solid fa-phone text-sm" />
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/917021277197?text=Hello%20YES%20Logistics%2C%20I%20need%20a%20transport%20quote."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('click', 'whatsapp', 'mobile_bottom_bar')}
        className="flex-1 flex items-center justify-center gap-2 py-3 min-h-[56px] text-sm font-bold text-white bg-[#25D366] active:bg-[#20bd5a] transition"
      >
        <i className="fa-brands fa-whatsapp text-lg" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
