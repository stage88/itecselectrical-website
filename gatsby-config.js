/* eslint-disable max-len */
module.exports = {
  siteMetadata: {
    title: 'ITECS Electrical - Quality electrical services',
    name: 'ITECS Electrical Services',
    companyName: 'ITECS Electrical Services Pty Ltd',
    description: 'Quality electrical services with professional experience',
    longDescription: 'ITECS Electrical Services are leaders in providing quality electrical services for all kinds of residential, commercial, and rural projects. Servicing Canberra, Queanbeyan, and surrounding areas',
    siteUrl: 'https://itecselectrical.com.au/',
    author: 'Sam Ilic',
    constactEmail: 'info@itecselectrical.com.au',
    mobile: '0416 044 804',
    abn: '35 166 390 512',
    acn: '166 390 512',
    actlic: '19925855 / 2014304',
    nswlic: '69565 / 269801C',
    aspl2: '5000074',
    nswacc: '3949',
    austel: 'A018461',
    authorUrl: 'https://github.com/stage88',
    sourceUrl: 'https://github.com/stage88/itecselectrical-website',
    siteImage: '/profile-photo-s.jpg',
    facebookUrl: 'https://www.facebook.com/itecselectrical/',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['FIX-ME'],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'common',
        path: `${__dirname}/src/assets/`,
      },
      __key: 'assets',
    },
    'gatsby-plugin-sass',
  ],
};
