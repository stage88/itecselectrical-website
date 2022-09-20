import React from 'react';
import Footer from '../components/footer';
import Layout from '../components/layout';
import useSiteMetadata from '../hooks/useSiteMetadata';

// markup
const IndexPage = () => {
  const { constactEmail } = useSiteMetadata();

  return (
    <Layout>
      <section id='one'>
        <header className='major'>
          <h2>ITECS Electrical - Quality electrical services.</h2>
        </header>           
      </section>

      <section id='three'>
        <h2>Get In Touch</h2>
        <p>
          You can contact us via my email: <a href={`mailto:${constactEmail}`}>{constactEmail}</a>.
        </p>
      </section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
