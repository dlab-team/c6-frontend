import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo-horizontal.png';
import linkedin from '../../assets/images/logo-linkedin-blanco.png';
import correo from '../../assets/images/logo-correo-blanco.png';

const Footer = () => {

  return (
    <>
      <div className="w-screen">
        <footer className="footer grid grid-cols-3 bg-blue-700 h-20 flex items-center justify-between">
          <div className="col-span-1">
            <img className='w-40 h-12 ml-28' src={logo} alt='Logo' />
          </div>
          <div className="col-span-1 ml-40">
            <p className="text-white">Copyright 2023 ©<strong>Devsafío</strong></p>
          </div>
          <div className="col-span-1 ml-40 flex">
          <a href="https://www.linkedin.com/company/devsafio/" target="_blank" rel="noopener noreferrer">
            <img className='w-8 h-8 ml-28' src={linkedin} alt='LinkedIn' />
          </a>
          <a href="mailto:contacto@devsafio.com?subject=Hello!" target="_blank" rel="noopener noreferrer">
             <img className='w-8 h-8 ml-5' src={correo} alt='Correo' />
          </a>
          </div>
        </footer>
      </div>
    </>
  );

}

export default Footer;