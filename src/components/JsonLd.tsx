export function OrganizationJsonLd() {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://yeslogisticsservice.com';
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LogisticsService'],
    name: 'YES LOGISTICS SERVICE',
    alternateName: 'YLS Pune',
    url: SITE,
    logo: `${SITE}/logo/yls_full_logo_crop.png`,
    image: `${SITE}/images/yls/yls-odc-trailer.jpg`,
    telephone: ['+917020057149', '+917021277197'],
    email: 'ylspune@gmail.com',
    priceRange: '₹₹₹',
    foundingDate: '2021-07-01',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CTS 1937 S1 Nilratna Apt BLD 2F',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411033',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.6298,
      longitude: 73.7997,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:30',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Vadodara' },
      { '@type': 'City', name: 'Prayagraj' },
      { '@type': 'City', name: 'Jeypore' },
      { '@type': 'Country', name: 'India' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Logistics & Transport Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ODC Consignment & Hydraulic Modular Trailer Transport',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heavy Haulage & Mechanical Flatbed Trailer Hire',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Covered Warehousing & Industrial Yard Storage Pune',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Crane Loading & Tandem Rigging',
          },
        },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({ name, description }: { name: string; description: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'YES LOGISTICS SERVICE',
    },
    areaServed: { '@type': 'Country', name: 'India' },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  author,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: { '@type': 'Organization', name: author },
    publisher: { '@type': 'Organization', name: 'YES LOGISTICS SERVICE' },
    mainEntityOfPage: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
