"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatisticsStrip from "@/components/StatisticsStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TrackingSection from "@/components/TrackingSection";
import QuoteSection from "@/components/QuoteSection";
import BranchSection from "@/components/BranchSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. White Pill Navigation Header */}
      <Navbar variant="floating" />

      {/* 2. Dark Navy Split Hero Section */}
      <HeroSection />

      {/* 3. Statistics Strip */}
      <StatisticsStrip />

      {/* 4. About Our Company Section */}
      <AboutSection />

      {/* 5. Services Cards Section */}
      <ServicesSection />

      {/* 6. Working Process Section */}
      <WorkingProcessSection />

      {/* 7. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 8. Instant Shipment Tracking Section (Yellow Background) */}
      <TrackingSection />

      {/* 9. Request a Quote Section */}
      <QuoteSection />

      {/* 10. All-India Branch Network */}
      <BranchSection />

      {/* 11. Prestigious Corporate Clients */}
      <ClientsSection />

      {/* 12. Customer Success Testimonials */}
      <TestimonialSection />

      {/* 13. Blog & Logistics Insights */}
      <BlogSection />

      {/* 14. Dark Navy Footer */}
      <Footer />
    </main>
  );
}
