import React from 'react';
import 'animate.css';
import hero from '../../assets/images/referencia.png';

const IndexPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center">Hola FrontEnd</div>
          <div className="hero">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
