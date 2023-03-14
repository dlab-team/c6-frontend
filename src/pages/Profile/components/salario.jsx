import React from 'react';
import { Edit } from '../../../assets/SVG/profile';
import { Contact } from '../../../assets/SVG/profile';

function Salario() {
  return (
    <section className='justify-between py-10 border-b border-[#817E7E]'>
    <div className='grid grid-cols-2'>
      <div className='flex flex-row'>
        <h2 className='text-black text-xl items-start flex flex-row text-start'>
          <img id='edit-image' src={Contact} alt='Salario' className='w-7 mr-4' />
          Rol y Salario actual
        </h2>
      </div>
      <div className='flex flex-col ml-80 justify-end items-end'>
        <button className='justify-items-end text-black text-lg p-1 border-black rounded-md'>
          <img src={Edit} alt='edit' className='pr-2' />
        </button>
        <ul className='text-black text-right'>
          <li className='font-semibold'>Full-Stack</li>
          <li className='font-semibold'>$3.000.000</li>
        </ul>
      </div>
    </div>
  </section>
  
  );
}

export default Salario;