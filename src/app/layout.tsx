import React from 'react';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import getSiteMetadata from '@/lib/site';

// Runs synchronously during HTML parsing — sets the theme class on <html>
// before any content paints, eliminating the flash of the wrong theme.
const themeInitScript = `(function(){try{var k='itecs-ui-theme';var t=localStorage.getItem(k);var s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var c=(t==='dark'||t==='light')?t:s;document.documentElement.classList.add(c);}catch(e){}})();`;

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const OG_IMAGE = '/images/og-image.png';

export const metadata: Metadata = {
  title: 'Electricians in Canberra & Queanbeyan · ITECS Electrical',
  description:
    'ITECS Electrical Services are leaders in providing quality electrical services for all kinds of residential, commercial, and rural projects. Servicing Canberra, Queanbeyan, and surrounding areas.',
  metadataBase: new URL('https://itecselectrical.com.au'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ITECS Electrical Services',
    description:
      'Leaders in quality electrical work since 1993. Level-2 ASP authorised. Canberra · Queanbeyan · ACT + NSW.',
    type: 'website',
    url: 'https://itecselectrical.com.au',
    locale: 'en_AU',
    siteName: 'ITECS Electrical Services',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'ITECS Electrical Services Pty Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITECS Electrical Services',
    description:
      'Leaders in quality electrical work since 1993. Level-2 ASP authorised.',
    images: [OG_IMAGE],
    creator: 'Sam Ilic',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const site = getSiteMetadata();
  const { gtmId, companyName, mobile, constactEmail, siteUrl, abn, foundingYear } = site;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: companyName,
    description:
      'Licensed electrical contractor servicing Canberra, Queanbeyan and surrounding areas — residential, commercial, rural, Level-2 ASP.',
    url: siteUrl,
    telephone: mobile,
    email: constactEmail,
    image: `${siteUrl}${OG_IMAGE.replace(/^\//, '')}`,
    logo: `${siteUrl}images/itecs-logo-l.png`,
    foundingDate: String(foundingYear),
    identifier: `ABN ${abn}`,
    address: {
      '@type': 'PostalAddress',
      postOfficeBoxNumber: '1295',
      addressLocality: 'Queanbeyan',
      addressRegion: 'NSW',
      postalCode: '2620',
      addressCountry: 'AU',
    },
    areaServed: [
      { '@type': 'City', name: 'Canberra' },
      { '@type': 'City', name: 'Queanbeyan' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical services',
      itemListElement: [
        'Commercial fit-outs',
        'Residential rewires',
        'Level-2 ASP',
        'Safety & testing',
        'Lighting design',
        'Outdoor & pool',
        'Maintenance & repairs',
        'Switchboard & meter board upgrades',
        "Safety switches — RCD's & RCBO's",
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    sameAs: ['https://www.facebook.com/itecselectrical/'],
  };

  return (
    <html suppressHydrationWarning={true} lang='en' className={`${bricolage.variable} ${inter.variable}`}>
      <GoogleTagManager gtmId={gtmId} />
      <body className='font-sans antialiased'>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
