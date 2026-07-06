import React from 'react';
import type { Metadata } from 'next';
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
