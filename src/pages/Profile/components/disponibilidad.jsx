import React from 'react';
import { Edit } from '../../../assets/SVG/profile';
import { Calendar } from '../../../assets/SVG/profile';

function Disponibilidad() {
  return (
    <section className='justify-between py-10 border-b border-[#817E7E]'>
    <div className='grid grid-cols-2'>
      <div className='flex flex-row'>
        <h2 className='text-black text-xl items-start flex flex-row text-start'>
          <img id='edit-image' src={Calendar} alt='Experiencia' className='w-7 mr-4' />
          Disponibilidad
        </h2>
      </div>
      <div className='flex flex-col ml-80 justify-end items-end'>
        <button className='justify-items-end text-black text-lg p-1 border-black rounded-md'>
          <img src={Edit} alt='edit' className='pr-2' />
        </button>
        <ul className='text-black text-right'>
          <li className='font-semibold'>Full time</li>
          <li className='font-semibold'>Disponibilidad inmediata</li>
        </ul>
      </div>
    </div>
  </section>
  
  );
}

export default Disponibilidad;