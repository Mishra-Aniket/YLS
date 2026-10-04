'use client';

import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { trackEvent } from './GoogleAnalytics';

const NUMBERS = [
  {
    name: 'Sandeep Ojha',
    title: 'Dispatch & Quotation Desk',
    number: '+91 70200 57149',
    tel: 'tel:+917020057149',
    wa: 'https://wa.me/917020057149?text=Hello%20Sandeep%20Ojha%2C%20I%20would%20like%20to%20inquire%20about%20freight%20and%20transport%20services.',
  },
  {
    name: 'R. K. Mishra',
    title: 'Fleet & Heavy Haulage Desk',
    number: '+91 70212 77197',
    tel: 'tel:+917021277197',
    wa: 'https://wa.me/917021277197?text=Hello%20R.%20K.%20Mishra%2C%20I%20would%20like%20to%20inquire%20about%20ODC%20and%20trailer%20movement.',
  },
];

export default function MobileBottomBar() {
  const [activeModal, setActiveModal] = useState<'call' | 'whatsapp' | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (type: 'call' | 'whatsapp') => {
    setActiveModal(type);
    // Double rAF for fluid entrance animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveModal(null);
    }, 250);
  };

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  return (
    <>
      {/* Sticky Bottom Bar (Mobile Only - Rock Solid Chrome Viewport Buffer) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden flex border-t border-slate-800/80 shadow-[0_-6px_30px_rgba(0,0,0,0.3)] bg-[#06112E] select-none">
        <button
          type="button"
          onClick={() => {
            openModal('call');
            trackEvent('click', 'phone_menu_open', 'mobile_bottom_bar');
          }}
          className="relative flex-1 flex items-center justify-center gap-2 py-3.5 pb-[max(env(safe-area-inset-bottom),14px)] min-h-[58px] text-sm font-bold font-heading uppercase text-white bg-[#06112E] active:bg-[#175A9D] transition cursor-pointer border-r border-slate-700/50 after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-24 after:bg-[#06112E]"
        >
          <Phone className="w-4 h-4 text-white" />
          <span>Call Now</span>
        </button>

        <button
          type="button"
          onClick={() => {
            openModal('whatsapp');
            trackEvent('click', 'whatsapp_menu_open', 'mobile_bottom_bar');
          }}
          className="relative flex-1 flex items-center justify-center gap-2 py-3.5 pb-[max(env(safe-area-inset-bottom),14px)] min-h-[58px] text-sm font-bold font-heading uppercase text-white bg-[#25D366] active:bg-[#20bd5a] transition cursor-pointer after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-24 after:bg-[#25D366]"
        >
          <i className="fa-brands fa-whatsapp text-lg" />
          <span>WhatsApp</span>
        </button>
      </div>

      {/* Smooth Fluid Bottom Sheet Drawer */}
      {activeModal && (
        <div
          className={`fixed inset-0 z-50 sm:hidden flex flex-col justify-end bg-[#06112E]/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            className={`w-full bg-white rounded-t-3xl p-6 shadow-2xl border-t border-slate-100 transition-transform duration-300 ease-out transform space-y-4 ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    activeModal === 'whatsapp'
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-blue-100 text-[#06112E]'
                  }`}
                >
                  {activeModal === 'whatsapp' ? (
                    <i className="fa-brands fa-whatsapp text-lg" />
                  ) : (
                    <Phone className="w-4.5 h-4.5" />
                  )}
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-[#06112E]">
                    {activeModal === 'whatsapp' ? 'Select WhatsApp Contact' : 'Select Number to Call'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    24/7 YES Logistics Dispatch Desk
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Number Option Cards */}
            <div className="space-y-3 pt-1">
              {NUMBERS.map((item, idx) => (
                <a
                  key={idx}
                  href={activeModal === 'whatsapp' ? item.wa : item.tel}
                  target={activeModal === 'whatsapp' ? '_blank' : undefined}
                  rel={activeModal === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  onClick={() => {
                    closeModal();
                    trackEvent(
                      'click',
                      activeModal === 'whatsapp' ? 'whatsapp_number' : 'phone_number',
                      item.number
                    );
                  }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-primary">
                      {item.name} &bull; {item.title}
                    </span>
                    <div className="text-lg font-heading font-extrabold text-[#06112E] tracking-tight mt-0.5">
                      {item.number}
                    </div>
                  </div>

                  <span
                    className={`px-4 py-2.5 rounded-xl text-xs font-heading font-bold text-white flex items-center gap-1.5 shadow-sm shrink-0 ${
                      activeModal === 'whatsapp'
                        ? 'bg-[#25D366] group-hover:bg-[#20bd5a]'
                        : 'bg-[#06112E] group-hover:bg-[#175A9D]'
                    }`}
                  >
                    {activeModal === 'whatsapp' ? (
                      <>
                        <i className="fa-brands fa-whatsapp text-sm" />
                        <span>Chat</span>
                      </>
                    ) : (
                      <>
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </>
                    )}
                  </span>
                </a>
              ))}
            </div>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={closeModal}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
