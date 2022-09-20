/* eslint-disable max-len */
module.exports = {
  siteMetadata: {
    title: 'ITECS Electrical - Quality electrical services.',
    name: 'ITECS Electrical',
    description: 'Quality electrical services with professional experience.',
    siteUrl: 'https://itecselectrical.com.au/',
    author: 'Sam Ilic',
    constactEmail: 'info@itecselectrical.com.au',
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
