'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Search, Menu } from 'lucide-react';
import YLSLogo from './YLSLogo';
import SearchModal from './SearchModal';
import OffcanvasDrawer from './OffcanvasDrawer';
import QuickContactModal from './QuickContactModal';
import { PRIMARY_SERVICES } from '@/lib/constants';

interface NavbarProps {
  variant?: 'floating' | 'solid';
}

export default function Navbar({ variant = 'floating' }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current + 5) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        onMouseEnter={() => setIsVisible(true)}
        className={`w-full z-40 transition-transform duration-300 ease-in-out ${
          variant === 'floating' ? 'fixed top-0 inset-x-0' : 'sticky top-0'
        } ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className={`w-full bg-white transition-all duration-300 ease-out ${
            isScrolled || variant === 'solid'
              ? 'shadow-[0_10px_30px_rgba(6,17,46,0.12)] border-b border-slate-100'
              : 'shadow-[0_4px_20px_rgba(6,17,46,0.04)]'
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16">
            <nav className="flex items-center justify-between h-[76px] sm:h-[82px] gap-2 sm:gap-4">
              
              {/* Left: Logo */}
              <div className="flex items-center shrink-0">
                <YLSLogo variant="light" size="md" />
              </div>

              {/* Center: Nav Menu (Centered in available space) */}
              <div className="hidden lg:flex flex-1 items-center justify-center px-2 xl:px-4">
                <ul className="flex items-center gap-1 xl:gap-2.5 2xl:gap-5 font-heading font-bold text-xs xl:text-sm 2xl:text-base text-dark uppercase tracking-wider">
                  <li>
                    <Link
                      href="/"
                      className={`px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        pathname === '/'
                          ? 'text-primary font-extrabold bg-primary/5'
                          : 'text-dark/90 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about-us"
                      className={`px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        pathname === '/about-us'
                          ? 'text-primary font-extrabold bg-primary/5'
                          : 'text-dark/90 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href="/services"
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        pathname.startsWith('/services')
                          ? 'text-primary font-extrabold bg-primary/5'
                          : 'text-dark/90 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-primary" />
                    </Link>

                    <div
                      className={`absolute top-full left-0 w-72 pt-2 z-50 transition-all duration-200 ${
                        activeDropdown === 'services'
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-100 space-y-1 normal-case font-sans">
                        {PRIMARY_SERVICES.map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/services#${srv.id}`}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-primary text-sm font-medium transition"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {srv.title}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400">{srv.number}</span>
                          </Link>
                        ))}
                        <div className="pt-2 mt-1 border-t border-slate-100 font-heading uppercase">
                          <Link
                            href="/services"
                            className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-primary hover:text-white text-xs font-bold text-slate-700 transition"
                          >
                            <span>View All Services</span>
                            <i className="fa fa-arrow-right text-[10px]" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link
                      href="/case-studies"
                      className={`px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        pathname.startsWith('/case-studies')
                          ? 'text-primary font-extrabold bg-primary/5'
                          : 'text-dark/90 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      Case Studies
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/gallery"
                      className={`px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        pathname.startsWith('/gallery')
                          ? 'text-primary font-extrabold bg-primary/5'
                          : 'text-dark/90 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      Fleet Gallery
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blog"
                      className={`px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        pathname.startsWith('/blog')
                          ? 'text-primary font-extrabold bg-primary/5'
                          : 'text-dark/90 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact-us"
                      className={`px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        pathname === '/contact-us'
                          ? 'text-primary font-extrabold bg-primary/5'
                          : 'text-dark/90 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition shadow-sm cursor-pointer"
                  aria-label="Call or WhatsApp"
                  title="Call or WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-lg text-emerald-600" />
                </button>

                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-dark flex items-center justify-center transition cursor-pointer"
                  aria-label="Search website"
                >
                  <Search className="w-4 h-4 text-dark" />
                </button>

                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="hidden sm:flex w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-dark items-center justify-center transition cursor-pointer"
                  aria-label="Open detailed menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none" viewBox="0 0 14 12">
                    <path fill="#06112E" d="M0 .75Q.063.063.75 0h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 1.437 0 .75m0 5Q.063 5.063.75 5h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 6.437 0 5.75m13.25 5.75H.75q-.687-.063-.75-.75.063-.687.75-.75h12.5q.687.063.75.75-.063.687-.75.75" />
                  </svg>
                </button>

                <Link href="/quote" className="btn-primary py-2.5 px-5 text-xs font-bold hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span>Free Quote</span>
                  <i className="fa fa-turn-up text-xs" aria-hidden="true" />
                </Link>

                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-100 text-dark text-xs font-bold hover:bg-primary hover:text-white transition cursor-pointer"
                  aria-label="Toggle Navigation"
                >
                  <Menu className="w-4 h-4" />
                  <span className="hidden xs:inline">Menu</span>
                </button>
              </div>

            </nav>
          </div>
        </div>
      </header>

      <div className="hidden sm:flex fixed bottom-6 right-5 sm:right-6 z-40 items-center">
        <button
          type="button"
          onClick={() => setIsContactOpen(true)}
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 group"
          aria-label="Quick Connect via WhatsApp or Call"
          title="WhatsApp or Call Dispatch Desk"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <i className="fa-brands fa-whatsapp text-xl" />
          <span className="font-heading font-bold text-xs sm:text-sm tracking-wide uppercase">
            Call / WhatsApp
          </span>
        </button>
      </div>

      <QuickContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <OffcanvasDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
