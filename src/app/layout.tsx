/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

import '../assets/scss/main.scss';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Head from '@/components/head';
import useSiteMetadata from '@/hooks/useSiteMetadata';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { gtmId } = useSiteMetadata();

  return (
    <html suppressHydrationWarning={true} lang='en'>
      <head>
        <Head />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=optional'
        />
      </head>
      <GoogleTagManager gtmId={gtmId} />

      <body>
        <section className='u-backlink-hidden u-body'>
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default Layout;
