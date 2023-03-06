import React from 'react';
import { Bin } from '../../../assets/SVG/profile';
import { Edit } from '../../../assets/SVG/profile';

function Educacion() {
  return (
    <section className='py-10 border-b border-[#817E7E]'>
      <div className='flex flex-row'>
        <h2 className='text-black mb-10 text-2xl'>Educación</h2>
        <button className='text-black text-lg p-1 border-black rounded-md items-end ml-auto'>
          <div className='flex flex-row'>
            <img src={Edit} alt='edit' className='pr-2' />
            Editar
          </div>
        </button>
      </div>
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
