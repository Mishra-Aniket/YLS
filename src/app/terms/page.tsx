import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | YES Logistics Service',
  description: 'Terms and conditions for YES LOGISTICS SERVICE.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar variant="floating" />
      <PageHeader title="Terms &amp; Conditions" subtitle="Terms of use for our services and website" breadcrumbs={[{ label: 'Terms & Conditions' }]} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">Service Agreement</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">YES LOGISTICS SERVICE provides freight transport, ODC consignment, trailer, warehousing, and crane arrangement services. All services are subject to mutual agreement on commercial terms, route feasibility, and applicable Motor Vehicles Act regulations.</p>
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">Quotation Validity</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">Quotations provided are valid for 7 days from the date of issue unless otherwise specified. Prices are subject to change based on fuel surcharges, route permits, and government toll revisions.</p>
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">Liability</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">Transit insurance is arranged upon request. YES LOGISTICS SERVICE takes all reasonable precautions for safe transport but liability is limited to the terms agreed in the transport contract.</p>
          <h2 className="text-2xl font-bold text-[#06112E] mb-4">Governing Law</h2>
          <p className="text-slate-600 text-sm leading-relaxed">These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Pune, Maharashtra.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
