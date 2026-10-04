'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientMarquee from '@/components/ClientMarquee';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WorkingProcessSection from '@/components/WorkingProcessSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CoreOperationsShowcase from '@/components/CoreOperationsShowcase';
import StatisticsStrip from '@/components/StatisticsStrip';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TrackingSection from '@/components/TrackingSection';
import QuoteSection from '@/components/QuoteSection';
import BranchSection from '@/components/BranchSection';
import TestimonialSection from '@/components/TestimonialSection';
import BlogSection from '@/components/BlogSection';
import ClientsSection from '@/components/ClientsSection';
import FAQSection from '@/components/FAQSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar variant="floating" />
      <HeroSection />
      <ClientMarquee />
      <AboutSection />
      <ServicesSection />
      <WorkingProcessSection />
      <WhyChooseUsSection />
      <CoreOperationsShowcase />
      <StatisticsStrip />
      <CaseStudiesSection />
      <TrackingSection />
      <QuoteSection />
      <ServiceAreaSection />
      <BranchSection />
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
      <ClientsSection />
      <Footer />
    </main>
  );
}
