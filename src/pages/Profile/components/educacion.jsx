import React from 'react';
import { Bin } from '../../../assets/SVG/profile';

function Educacion() {
  return (
    <section className='py-10 border-b border-[#817E7E]'>
      <h2 className='text-black mb-10 text-2xl'>Educación</h2>
      <div className='flex flex-row justify-between'>
        <ul className='text-[#2738F5] text-base'>
          <li>2020 -2023</li>
          <li className='text-black text-2xl py-2'>Desafio Latam</li>
          <li>FullStack developer</li>
        </ul>
        <img src={Bin} alt='bin' />
      </div>
    </section>
  );
}

export default Educacion;
