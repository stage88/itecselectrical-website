import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Head: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const site = useSiteMetadata();

  const { title, description, siteUrl, author, siteImage } = site;

  return (
    <Helmet title={title} defaultTitle={title}>
      <html lang={'en-US'} />
      <meta name='description' content={description} />
      <meta name='image' content={siteImage} />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={siteImage} />
      <meta property='og:type' content='website' />
      <meta property='og:image:alt' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={siteUrl} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={siteImage} />
      <meta name='twitter:image:alt' content={description} />
      <meta name='twitter:creator' content={author} />
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon.ico' />

      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i'
      />

      {children}
    </Helmet>
  );
};

export default Head;
