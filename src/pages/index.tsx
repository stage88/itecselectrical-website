import React from 'react';
import Footer from '../components/footer';
import Layout from '../components/layout';
import useSiteMetadata from '../hooks/useSiteMetadata';

// markup
const IndexPage = () => {
  const { constactEmail } = useSiteMetadata();

  return (
    <Layout>
      
    </Layout>
  );
};

export default IndexPage;
