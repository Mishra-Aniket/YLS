"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import YLSLogo from "./YLSLogo";
import { X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface OffcanvasDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffcanvasDrawer({
  isOpen,
  onClose,
}: OffcanvasDrawerProps) {
  const [dragX, setDragX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const currentDragXRef = useRef<number>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setDragX(0);
      setIsDragging(false);
      isDraggingRef.current = false;
      currentDragXRef.current = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isOpen) return;

    // --- TOUCH EVENTS ---
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startXRef.current = e.touches[0].clientX;
      startYRef.current = e.touches[0].clientY;
      startTimeRef.current = Date.now();
      isDraggingRef.current = false;
      currentDragXRef.current = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = currentX - startXRef.current;
      const diffY = currentY - startYRef.current;

      // Check if user is attempting to drag rightwards
      if (!isDraggingRef.current) {
        if (diffX > 8 && diffX > Math.abs(diffY)) {
          isDraggingRef.current = true;
          setIsDragging(true);
        }
      }

      if (isDraggingRef.current) {
        if (e.cancelable) {
          e.preventDefault(); // Stop mobile browser native scrolling / gestures
        }
        const newDragX = Math.max(0, diffX);
        currentDragXRef.current = newDragX;
        setDragX(newDragX);
      }
    };

    const handleTouchEnd = () => {
      if (isDraggingRef.current) {
        const timeDiff = Date.now() - startTimeRef.current;
        const velocity = currentDragXRef.current / (timeDiff || 1); // px per ms

        // Close if dragged > 50px or fast swipe right (velocity > 0.15)
        if (currentDragXRef.current > 50 || velocity > 0.15) {
          onClose();
        }
      }
      setIsDragging(false);
      setDragX(0);
      isDraggingRef.current = false;
      currentDragXRef.current = 0;
    };

    // --- MOUSE EVENTS (for desktop trackpad/mouse drag testing) ---
    let isMouseDown = false;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Only left click
      isMouseDown = true;
      startXRef.current = e.clientX;
      startYRef.current = e.clientY;
      startTimeRef.current = Date.now();
      isDraggingRef.current = false;
      currentDragXRef.current = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const diffX = e.clientX - startXRef.current;
      const diffY = e.clientY - startYRef.current;

      if (!isDraggingRef.current) {
        if (diffX > 5 && diffX > Math.abs(diffY)) {
          isDraggingRef.current = true;
          setIsDragging(true);
        }
      }

      if (isDraggingRef.current) {
        const newDragX = Math.max(0, diffX);
        currentDragXRef.current = newDragX;
        setDragX(newDragX);
      }
    };

    const handleMouseUp = () => {
      if (isMouseDown) {
        isMouseDown = false;
        if (isDraggingRef.current) {
          const timeDiff = Date.now() - startTimeRef.current;
          const velocity = currentDragXRef.current / (timeDiff || 1);

          if (currentDragXRef.current > 50 || velocity > 0.15) {
            onClose();
          }
        }
        setIsDragging(false);
        setDragX(0);
        isDraggingRef.current = false;
        currentDragXRef.current = 0;
      }
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    el.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    el.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("touchcancel", handleTouchEnd);

      el.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isOpen, onClose]);

  // Dynamic backdrop opacity during drag
  const backdropOpacity = isDragging
    ? Math.max(0, 1 - dragX / 280)
    : isOpen
    ? 1
    : 0;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex justify-end ${
        isOpen ? "" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-dark/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isOpen ? "" : "pointer-events-none"
        }`}
        style={{ opacity: backdropOpacity }}
        onClick={onClose}
      />

      {/* Drawer matching TransHub .canvas-menu — slides in/out smoothly */}
      <div
        style={{
          transform: isOpen
            ? `translateX(${isDragging ? Math.max(0, dragX) : 0}px)`
            : "translateX(100%)",
          transition: isDragging
            ? "none"
            : "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto select-none"
      >
        {/* Left Edge Drag Catch Strip for easy thumb swiping */}
        <div
          className="absolute top-0 bottom-0 -left-6 w-10 flex items-center justify-center cursor-grab active:cursor-grabbing"
          aria-hidden="true"
        >
          <div className="w-1.5 h-16 bg-slate-300/80 rounded-full shadow-sm" />
        </div>

        <div>
          {/* Touch Drag Indicator Bar & Swipe Hint on Mobile */}
          <div className="flex items-center justify-between pb-3 sm:hidden border-b border-slate-100/80 mb-2">
            <div className="flex items-center gap-1 text-[11px] font-heading font-bold text-primary tracking-wide uppercase">
              <ChevronRight className="w-4 h-4 animate-pulse text-primary" />
              <span>Swipe right to hide menu</span>
            </div>
            <div className="w-12 h-1.5 rounded-full bg-slate-200" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <YLSLogo variant="light" size="sm" />
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-dark flex items-center justify-center transition active:scale-95 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <div className="py-6 border-b border-slate-100">
            <p className="text-slate-600 text-sm leading-relaxed">
              YES LOGISTICS SERVICE is a Pune-registered fleet owner and transport contractor (estd. 2021). We deliver safe, dependable ODC and trailer freight across India.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="py-6 border-b border-slate-100">
            <h5 className="text-xs font-heading font-bold text-dark uppercase tracking-wider mb-4">
              Navigation Menu
            </h5>
            <ul className="space-y-3 font-heading font-semibold text-base text-dark">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors py-1"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors py-1"
                >
                  Blog &amp; News
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors py-1"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  onClick={onClose}
                  className="block hover:text-primary transition-colors py-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details with both numbers and WhatsApp / Call buttons */}
          <div className="py-6 space-y-4 text-xs text-slate-600">
            <div className="space-y-2">
              <span className="text-[11px] font-heading font-bold text-slate-400 uppercase tracking-wider block">
                24/7 Dispatch Desk (Call / WhatsApp)
              </span>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-heading font-bold text-dark text-xs sm:text-sm">+91 70200 57149</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://wa.me/917020057149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition active:scale-95"
                    title="Chat on WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp text-xs"></i>
                  </a>
                  <a
                    href="tel:+917020057149"
                    className="p-2 rounded-lg bg-dark hover:bg-primary text-white transition active:scale-95"
                    title="Call Now"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-heading font-bold text-dark text-xs sm:text-sm">+91 70212 77197</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://wa.me/917021277197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition active:scale-95"
                    title="Chat on WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp text-xs"></i>
                  </a>
                  <a
                    href="tel:+917021277197"
                    className="p-2 rounded-lg bg-dark hover:bg-primary text-white transition active:scale-95"
                    title="Call Now"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary font-medium text-dark">
                {COMPANY.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{COMPANY.registeredOffice.full}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-6 border-t border-slate-100">
          <Link
            href="/quote"
            onClick={onClose}
            className="btn-primary w-full justify-center py-3.5 text-sm"
          >
            <span>Get a Free Quote</span>
            <i className="fa fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
