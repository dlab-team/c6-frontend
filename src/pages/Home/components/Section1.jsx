import React from 'react';
import DevelopmentImage from '../../../assets/images/Development.png';
import { Link } from 'react-router-dom';

const Section01 = () => {
  return (
    <>
      <div className="bg-hero-gradient2 flex font-thin justify-center bg-gradient-to-b from-[#2738F5] to-[#1E239A] stops-[#140B34] text-white">
        <div className="flex-col text-center md:text-left mx-14 md:mx-0">
          <h1 className="text-6xl md:text-7xl font-bold mt-24 md:mt-20 md:ml-20">
            ¿Buscas talento TI?
          </h1>

          <div className="content flex text-center md:text-left mx-14 md:mx-0">
            <div className="hero mt-4 mb-[15rem] flex flex-col  items-start md:ml-24">
              <p className=" font-medium  text-4xl mt-16 md:mt-10 leading-[3.37rem]">
                Contrata <b className="text-[#008FF7]"> Talento TI </b>rápido,
              </p>
              <p className=" font-medium  text-4xl ">
                {' '}
                inteligente y eficiente{' '}
              </p>
              <p className=" font-medium  text-xl w-11/12 mt-14 md:mt-8 leading-8">
                Te encontramos profesionales en 5 días y los acompañamos por 3
                meses con tutores senior para potenciar y acelerar sus
                habilidades técnicas
              </p>
              <Link
                to="/register"
                className="mt-20 md:mt-32 bg-white text-[#2738f5] py-[1.3rem] px-8  rounded-3xl text-2xl font-bold  hover:opacity-80"
                href=""
              >
                QUIERO CONTRATAR
              </Link>
            </div>

            <div className="hidden md:block flex-col ">
              <img
                src={DevelopmentImage}
                alt=""
                className="w-[98rem] mt-[4rem] mb-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section01;
