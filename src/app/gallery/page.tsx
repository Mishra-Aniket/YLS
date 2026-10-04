import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import { GALLERY_IMAGES } from '@/lib/constants';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Fleet Gallery | YES LOGISTICS SERVICE Pune',
  description:
    'Real snapshots of YES LOGISTICS SERVICE operations — ODC trailers, container freight, warehouse operations, and escort convoys across India.',
};

export default function GalleryPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yeslogisticsservice.com';

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Gallery', url: `${SITE_URL}/gallery` },
        ]}
      />
      <Navbar variant="floating" />

      <PageHeader
        title="Our Work Gallery"
        subtitle="Real snapshots from our fleet, warehouses, and ODC operations across India — no stock photos, only the work we do."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="sec-padding bg-shade">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sec-intro text-center mx-auto mb-12">
            <span className="sub-title">
              <svg className="truck-icon" viewBox="0 0 30 18" fill="currentColor" aria-hidden="true">
                <path d="M0 2h13v14H0zM14 5h6l6 5v6h-12z" />
              </svg>
              FLEET IN ACTION
            </span>
            <h2 className="sec-title">On the Ground, Across India</h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {GALLERY_IMAGES.map((img) => (
              <figure
                key={img.src}
                className="group relative mb-5 break-inside-avoid rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#06112E] via-[#06112E]/80 to-transparent p-4 pt-12">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[10px] font-heading font-bold uppercase tracking-wider mb-2">
                    {img.category}
                  </span>
                  <p className="text-white font-heading font-bold text-base leading-snug">
                    {img.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-4">
            <p className="text-slate-600 text-sm sm:text-base mb-5">
              Want your cargo handled with this level of care? Get a tailored freight plan from our Pune team.
            </p>
            <Link href="/quote" className="btn-primary">
              <span>Request a Quote</span>
              <i className="fa fa-turn-up text-sm" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
