"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CoreOperationsShowcase from "@/components/CoreOperationsShowcase";
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
      {/* 1. Header: TransHub Floating White Pill Navbar */}
      <Navbar variant="floating" />

      {/* 2. Hero: TransHub Split Slider Section with Rotating Badge & Purecounter Stat Card */}
      <HeroSection />

      {/* 3. Partner Strip: Smooth Moving Brand Carousel */}
      <ClientMarquee />

      {/* 4. About Us: TransHub Overlapping Media + 2021 Estd Badge + 100% Safety Focus */}
      <AboutSection />

      {/* 5. Services: TransHub .services-sec.bg-shade with Auto-scrolling Multi-Capacity Fleet */}
      <ServicesSection />

      {/* 6. Working Process: TransHub .process-sec with 01-02-03 Steps & Dashed Connector Line */}
      <WorkingProcessSection />

      {/* 7. Why Choose Us: TransHub .choose-sec.bg-shade with Overlapping Photos, Progress Bars, & Trust Pillars */}
      <WhyChooseUsSection />

      {/* 8. Core Operations: Alternating High-Impact Fleet Showcase */}
      <CoreOperationsShowcase />

      {/* 9. Statistics: TransHub .stat-sec Dark Navy 4-Column Counter Strip */}
      <StatisticsStrip />

      {/* 10. Case Studies: TransHub .portfolio-sec with Orange Side Accent & Carousel */}
      <CaseStudiesSection />

      {/* 11. Tracking: TransHub .tracking-cta-sec with Parallax Overlay & Quick Tracking */}
      <TrackingSection />

      {/* 12. Quote: TransHub Quote Tab Card Overlapping Tracking Section */}
      <QuoteSection />

      {/* 13. Network: All-India Branch Network (Pune HQ, Bangalore, Vadodara, Jeypore, Prayagraj) */}
      <BranchSection />

      {/* 14. Reviews: TransHub .review-sec Testimonials */}
      <TestimonialSection />

      {/* 15. Blog & News: TransHub .blog-sec 3-Column Logistics Insights */}
      <BlogSection />

      {/* 16. Brand Clients: TransHub .brand-sec */}
      <ClientsSection />

      {/* 17. Footer: TransHub Newsletter Subscription Band + 4-Column Dark Footer Card */}
      <Footer />
    </main>
  );
}

