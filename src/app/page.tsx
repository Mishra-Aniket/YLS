"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ClientMarquee from "@/components/ClientMarquee";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
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
      {/* 1. White Pill Navigation Header */}
      <Navbar variant="floating" />

      {/* 2. Dark Navy Split Hero Section */}
      <HeroSection />

      {/* 2b. Moveable Client Strip (logo + name pills) */}
      <ClientMarquee />

      {/* 3. About Our Company Section */}
      <AboutSection />

      {/* 4. Services Cards Carousel */}
      <ServicesSection />

      {/* 5. Working Process Section */}
      <WorkingProcessSection />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 7. Dark Counter Band (TransHub position: right after Why) */}
      <StatisticsStrip />

      {/* 8. Case Studies Carousel with Orange Side Panel */}
      <CaseStudiesSection />

      {/* 9. Instant Shipment Tracking Band */}
      <TrackingSection />

      {/* 10. Quote Tab Card (overlaps tracking band) */}
      <QuoteSection />

      {/* 11. All-India Branch Network (YLS-specific) */}
      <BranchSection />

      {/* 12. Customer Testimonials */}
      <TestimonialSection />

      {/* 13. Blog & Logistics Insights */}
      <BlogSection />

      {/* 14. Client Brand Strip (TransHub position: right before newsletter) */}
      <ClientsSection />

      {/* 15. Newsletter Band + Dark Rounded Footer */}
      <Footer />
    </main>
  );
}
