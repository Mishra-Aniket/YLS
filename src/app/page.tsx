"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickEnquiryStrip from "@/components/QuickEnquiryStrip";
import ClientMarquee from "@/components/ClientMarquee";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CoreOperationsShowcase from "@/components/CoreOperationsShowcase";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import StatisticsStrip from "@/components/StatisticsStrip";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TrackingSection from "@/components/TrackingSection";
import QuoteSection from "@/components/QuoteSection";
import BranchSection from "@/components/BranchSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. White Pill Navigation Header with Call/WhatsApp quick dialog */}
      <Navbar variant="floating" />

      {/* 2. Dark Navy Split Hero Section with live LR Tracking Bar */}
      <HeroSection />

      {/* 3. Instant Freight Enquiry & Booking Strip (like omsaibpl front enquiry) */}
      <QuickEnquiryStrip />

      {/* 4. Moveable Client Partner Strip (20+ Industry Titans) */}
      <ClientMarquee />

      {/* 5. Why India Trusts YES Logistics — 6 High-Trust Pillars right in front! */}
      <WhyChooseUsSection />

      {/* 6. All-Capacity Fleet Carousel (Auto-scrolling: Pickups, Containers, Taurus, ODC Trailers) */}
      <ServicesSection />

      {/* 7. About Our Company Section (Foundation, Ownership & Experience) */}
      <AboutSection />

      {/* 8. Core Operations Alternating Showcase (Z-pattern with real operational photos) */}
      <CoreOperationsShowcase />

      {/* 9. Working Process Section */}
      <WorkingProcessSection />

      {/* 10. Dark Counter Band */}
      <StatisticsStrip />

      {/* 11. Case Studies Carousel */}
      <CaseStudiesSection />

      {/* 12. Instant Shipment Tracking Band */}
      <TrackingSection />

      {/* 13. Quote Tab Card */}
      <QuoteSection />

      {/* 14. All-India Branch Network (Pune, Bangalore, Vadodara, Jeypore, Prayagraj) */}
      <BranchSection />

      {/* 15. Customer Testimonials */}
      <TestimonialSection />

      {/* 16. Blog & Logistics Insights */}
      <BlogSection />

      {/* 17. Client Brand Strip */}
      <ClientsSection />

      {/* 18. Newsletter Band + Dark Rounded Footer */}
      <Footer />
    </main>
  );
}
