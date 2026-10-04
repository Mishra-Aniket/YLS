import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | YES Logistics Service',
  description: 'Privacy policy for YES LOGISTICS SERVICE website.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar variant="floating" />
      <PageHeader title="Privacy Policy" subtitle="How we handle your information" breadcrumbs={[{ label: 'Privacy Policy' }]} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">Information We Collect</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">When you submit a quote request or contact form, we collect your name, phone number, and optionally your email address. This information is used solely to respond to your enquiry and provide freight quotations.</p>
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">How We Use Your Data</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">Your data is used to contact you regarding your transport requirements. We do not sell, rent, or share your personal information with third parties except as required to fulfil your logistics request.</p>
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">Cookies &amp; Analytics</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">We use Google Analytics to understand website usage patterns. No personally identifiable information is shared with analytics providers.</p>
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">Contact</h2>
          <p className="text-slate-600 text-sm leading-relaxed">For questions about this policy, email <a href="mailto:ylspune@gmail.com" className="text-primary hover:underline">ylspune@gmail.com</a> or call <a href="tel:+917020057149" className="text-primary hover:underline">+91 70200 57149</a>.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
