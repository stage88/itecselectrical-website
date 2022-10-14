import React from 'react';

import Header from './header';
import Head from './head';
import Footer from './footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head />
      <body className='u-backlink-hidden u-body'>
        <Header />
        {children}
        <Footer />
      </body>
    </>
  );
};

export default Layout;
