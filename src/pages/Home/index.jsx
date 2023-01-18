import React from 'react';
import { Header, Footer } from '../../components/index';
import { Section1, Section2, Section3 } from './components/index';

function Home() {
  return (
    <>
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </>
  );
}

export default Home;
