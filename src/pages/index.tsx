import React from 'react';
import Layout from '../components/layout';

import Welcome from '../components/welcome';
import Services from '../components/services';
import Projects from '../components/projects';
// import World from '../components/world';
// import Counts from '../components/counts';
// import Working from '../components/working';
// import Testemonials from '../components/testemonials';
// import Clients from '../components/clients';
// import News from '../components/news';
// import Buy from '../components/buy';
import Contact from '../components/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Welcome />
      <Services />
      <Projects />
      <Contact />
      {/* <World />
      <Counts />
      <Working />
      <Testemonials />
      <Clients />
      <News />
      <Buy /> */}
    </Layout>
  );
};

export default IndexPage;
