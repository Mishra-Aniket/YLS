import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YES LOGISTICS SERVICE | Fleet Owner & Transport Contractor | ODC Specialist Pune",
  description:
    "YES LOGISTICS SERVICE is an established Pune fleet owner and transport contractor (estd. 2021). Specialist in ODC Consignments, hydraulic trailers, covered warehousing, and pan-India freight.",
  keywords: [
    "YES LOGISTICS SERVICE",
    "YLS Pune",
    "ODC Consignment Specialist",
    "Fleet Owner India",
    "Transport Contractor",
    "Chinchwad Logistics",
    "Trailer Services",
    "Heavy Haulage India",
  ],
  authors: [{ name: "YES LOGISTICS SERVICE" }],
  openGraph: {
    title: "YES LOGISTICS SERVICE - An Entire Logistics Solution",
    description:
      "Pune-registered fleet owner & transport contractor established in 2021. ODC Consignment specialist across India.",
    url: "https://yeslogisticsservice.com",
    siteName: "YES LOGISTICS SERVICE",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..900;1,9..40,400..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome for TransHub-matching icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-body text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
