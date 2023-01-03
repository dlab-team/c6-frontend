import React from 'react';
import Header from '../../components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function Home() {
  return (
    <>
      <div>
        <Header />
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}

export default Home;
