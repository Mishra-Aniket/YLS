import type { Metadata } from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MobileBottomBar from '@/components/MobileBottomBar';
import { OrganizationJsonLd } from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-head',
  display: 'swap',
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://yeslogisticsservice.com';

export const metadata: Metadata = {
  title: 'ODC Transport in Pune | Hydraulic Trailer Services | YES Logistics',
  description:
    'YES LOGISTICS SERVICE — Pune fleet owner & ODC consignment specialist. Hydraulic trailers, heavy haulage, warehousing & crane services across India. Call +91 70200 57149.',
  keywords: [
    'ODC transport Pune',
    'hydraulic trailer Pune',
    'ODC consignment India',
    'heavy haulage Pune',
    'trailer transport Pune',
    'fleet owner Chinchwad',
    'crane and escort services',
    'warehousing Pune',
  ],
  authors: [{ name: 'YES LOGISTICS SERVICE' }],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ODC Transport in Pune | Hydraulic Trailer Services | YES Logistics',
    description:
      'Pune fleet owner & ODC consignment specialist. Hydraulic trailers, heavy haulage, warehousing & crane services across India.',
    url: SITE_URL,
    siteName: 'YES LOGISTICS SERVICE',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/yls/yls-odc-trailer.jpg',
        width: 1200,
        height: 630,
        alt: 'YES Logistics Service ODC Trailer Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ODC Transport in Pune | YES Logistics',
    description:
      'Hydraulic trailers, heavy haulage, warehousing & crane services across India.',
    images: ['/images/yls/yls-odc-trailer.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  icons: {
    icon: '/logo/yls_monogram_crop_exact.png',
    apple: '/logo/yls_monogram_crop_exact.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`scroll-smooth ${inter.variable} ${barlow.variable}`}
    >
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-sans text-dark antialiased text-base leading-relaxed">
        <OrganizationJsonLd />
        <GoogleAnalytics />
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
