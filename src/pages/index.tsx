import type { NextPage } from 'next';
import React from 'react';
import GridSection from '../components/pageComponents/home/GridSection';
import SeeDemonstrationSection from '../components/pageComponents/home/SeeDemonstrationSection';
import WebinarSection from '../components/pageComponents/home/WebinarSection';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <WebinarSection />
      <GridSection />
      <SeeDemonstrationSection />
    </React.Fragment>
  );
};

export default Home;
