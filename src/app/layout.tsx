import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';

import getSiteMetadata from '@/lib/site';

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

export const metadata: Metadata = {
  title: 'ITECS Electrical Services',
  description: 'ITECS Electrical Services is no longer operating.',
  metadataBase: new URL('https://itecselectrical.com.au'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ITECS Electrical Services',
    description: 'ITECS Electrical Services is no longer operating.',
    type: 'website',
    url: 'https://itecselectrical.com.au',
    locale: 'en_AU',
    siteName: 'ITECS Electrical Services',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

// Navy tints the mobile browser chrome (status bar / toolbar) so it matches
// the full-bleed notice instead of showing a white band top and bottom.
export const viewport: Viewport = {
  themeColor: '#1b2b57',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { gtmId } = getSiteMetadata();

  return (
    <html lang='en' className={`${bricolage.variable} ${inter.variable}`}>
      <GoogleTagManager gtmId={gtmId} />
      <body className='font-sans antialiased'>{children}</body>
    </html>
  );
};

export default RootLayout;
