import React from 'react';
import type { NextPage } from 'next';
import WebinarSection from './_WebinarSection';
import SeeDemonstrationSection from './_SeeDemonstrationSection';
import GridSection from './_GridSection';

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
