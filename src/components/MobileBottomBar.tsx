'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Phone, ChevronDown } from 'lucide-react';
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

  const [dragY, setDragY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const sheetRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef<number>(0);
  const startXRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const currentDragYRef = useRef<number>(0);

  const openModal = (type: 'call' | 'whatsapp') => {
    setActiveModal(type);
    setDragY(0);
    setIsDragging(false);
    isDraggingRef.current = false;
    currentDragYRef.current = 0;
    // Double rAF for fluid entrance animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  };

  const closeModal = () => {
    setIsVisible(false);
    setIsDragging(false);
    setDragY(0);
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

  // Touch & Mouse Drag-to-Dismiss Gesture Listener
  useEffect(() => {
    const el = sheetRef.current;
    if (!el || !activeModal) return;

    // --- TOUCH DRAG DOWN / RIGHT TO HIDE ---
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startXRef.current = e.touches[0].clientX;
      startYRef.current = e.touches[0].clientY;
      startTimeRef.current = Date.now();
      isDraggingRef.current = false;
      currentDragYRef.current = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const diffX = e.touches[0].clientX - startXRef.current;
      const diffY = e.touches[0].clientY - startYRef.current;

      if (!isDraggingRef.current) {
        // Dragging down or dragging right
        if ((diffY > 6 && diffY > Math.abs(diffX)) || (diffX > 8 && diffX > Math.abs(diffY))) {
          isDraggingRef.current = true;
          setIsDragging(true);
        }
      }

      if (isDraggingRef.current) {
        if (e.cancelable) {
          e.preventDefault();
        }
        const effectiveDrag = Math.max(0, Math.max(diffY, diffX));
        currentDragYRef.current = effectiveDrag;
        setDragY(effectiveDrag);
      }
    };

    const handleTouchEnd = () => {
      if (isDraggingRef.current) {
        const timeDiff = Date.now() - startTimeRef.current;
        const velocity = currentDragYRef.current / (timeDiff || 1);

        if (currentDragYRef.current > 45 || velocity > 0.15) {
          closeModal();
        }
      }
      setIsDragging(false);
      setDragY(0);
      isDraggingRef.current = false;
      currentDragYRef.current = 0;
    };

    // --- MOUSE DRAG DOWN TO HIDE ---
    let isMouseDown = false;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      isMouseDown = true;
      startXRef.current = e.clientX;
      startYRef.current = e.clientY;
      startTimeRef.current = Date.now();
      isDraggingRef.current = false;
      currentDragYRef.current = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const diffX = e.clientX - startXRef.current;
      const diffY = e.clientY - startYRef.current;

      if (!isDraggingRef.current) {
        if ((diffY > 5 && diffY > Math.abs(diffX)) || (diffX > 5 && diffX > Math.abs(diffY))) {
          isDraggingRef.current = true;
          setIsDragging(true);
        }
      }

      if (isDraggingRef.current) {
        const effectiveDrag = Math.max(0, Math.max(diffY, diffX));
        currentDragYRef.current = effectiveDrag;
        setDragY(effectiveDrag);
      }
    };

    const handleMouseUp = () => {
      if (isMouseDown) {
        isMouseDown = false;
        if (isDraggingRef.current) {
          const timeDiff = Date.now() - startTimeRef.current;
          const velocity = currentDragYRef.current / (timeDiff || 1);

          if (currentDragYRef.current > 45 || velocity > 0.15) {
            closeModal();
          }
        }
        setIsDragging(false);
        setDragY(0);
        isDraggingRef.current = false;
        currentDragYRef.current = 0;
      }
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    el.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    el.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener("touchcancel", handleTouchEnd);

      el.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeModal]);

  const backdropOpacity = isDragging
    ? Math.max(0, 1 - dragY / 250)
    : isVisible
    ? 1
    : 0;

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
          style={{ opacity: backdropOpacity }}
          onClick={closeModal}
        >
          <div
            ref={sheetRef}
            style={{
              transform: isVisible
                ? `translateY(${isDragging ? Math.max(0, dragY) : 0}px)`
                : 'translateY(100%)',
              transition: isDragging
                ? 'none'
                : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="w-full bg-white rounded-t-3xl p-6 shadow-2xl border-t border-slate-100 space-y-4 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Touch Swipe Down Indicator Bar */}
            <div className="flex flex-col items-center justify-center pt-1 pb-1">
              <div className="w-12 h-1.5 rounded-full bg-slate-300 hover:bg-slate-400 transition cursor-grab active:cursor-grabbing mb-1" />
              <div className="flex items-center gap-1 text-[10px] font-heading font-bold text-slate-400 tracking-wider uppercase">
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 animate-bounce" />
                <span>Swipe down to hide</span>
              </div>
            </div>

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
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer active:scale-95"
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
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-heading font-bold uppercase tracking-wider transition cursor-pointer active:scale-98"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
