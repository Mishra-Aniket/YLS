import type { Metadata } from 'next';
import { DM_Sans, Rethink_Sans } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MobileBottomBar from '@/components/MobileBottomBar';
import { OrganizationJsonLd } from '@/components/JsonLd';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-head',
  display: 'swap',
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://yeslogisticsservice.com';

export const metadata: Metadata = {
  title: 'YLS — YES LOGISTICS SERVICE | ODC Transport Pune & Pan-India',
  description:
    'YES Logistics Service (YLS Pune) — Fleet owner & ODC consignment specialist in Chinchwad. Pan-India hydraulic trailers & warehousing. Call +91 70200 57149.',
  keywords: [
    'YLS',
    'YES Logistics Service',
    'YLS Pune',
    'ODC transport in Pune',
    'hydraulic trailer Pune',
    'heavy haulage Pune',
    'fleet owner Chinchwad',
    'logistics services near me',
    'trailer transport Pune',
  ],
  authors: [{ name: 'YES LOGISTICS SERVICE' }],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'YLS — YES LOGISTICS SERVICE | ODC Transport Pune & Pan-India',
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
    title: 'YLS — YES LOGISTICS SERVICE | ODC Transport Pune',
    description:
      'Hydraulic trailers, heavy haulage, warehousing & crane services across India.',
    images: ['/images/yls/yls-odc-trailer.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo/yls_monogram_crop_exact.png', type: 'image/png' },
    ],
    shortcut: '/logo/yls_monogram_crop_exact.png',
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
      className={`scroll-smooth ${dmSans.variable} ${rethinkSans.variable}`}
    >
      <head>
        {/* Dynamic Favicon Script for GitHub Pages & Custom Domain */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var basePath = window.location.pathname.startsWith('/YLS') ? '/YLS' : '';
                var iconUrl = basePath + '/logo/yls_monogram_crop_exact.png';
                
                var iconLink = document.createElement('link');
                iconLink.rel = 'icon';
                iconLink.type = 'image/png';
                iconLink.href = iconUrl;
                document.head.appendChild(iconLink);

                var shortcutLink = document.createElement('link');
                shortcutLink.rel = 'shortcut icon';
                shortcutLink.href = iconUrl;
                document.head.appendChild(shortcutLink);

                var appleLink = document.createElement('link');
                appleLink.rel = 'apple-touch-icon';
                appleLink.href = iconUrl;
                document.head.appendChild(appleLink);
              })();
            `,
          }}
        />
        <link rel="icon" type="image/png" href="/YLS/logo/yls_monogram_crop_exact.png" />
        <link rel="shortcut icon" href="/YLS/logo/yls_monogram_crop_exact.png" />
        <link rel="apple-touch-icon" href="/YLS/logo/yls_monogram_crop_exact.png" />

        <link rel="icon" type="image/png" href="/logo/yls_monogram_crop_exact.png" />
        <link rel="shortcut icon" href="/logo/yls_monogram_crop_exact.png" />
        <link rel="apple-touch-icon" href="/logo/yls_monogram_crop_exact.png" />

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
