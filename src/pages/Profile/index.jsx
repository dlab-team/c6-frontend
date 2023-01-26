import React from 'react';
import {
  Edit,
  Edu,
  Contact,
  Email,
  Calendar,
  Doc,
  Linkedin,
  Github,
  Phone,
} from '../../assets/SVG/profile/index';
import profileimg from '../../assets/images/square-xxl.png';
import { Educacion, Habilidades } from './components';

function Profile() {
  return (
    <main className='bg-white my-14 ml-24 m-20'>
      <section className='flex flex-row justify-between mb-24'>
        <h1 className='text-black text-4xl font-semibold'>Bienvenido!</h1>
        <button className='text-black text-lg border-solid border p-1 border-black rounded-md'>
          <div className='flex flex-row items-start'>
            <img src={Edit} alt='edit' className='pr-2' />
            Editar
          </div>
        </button>
      </section>
      <section className='flex flex-row justify-between pb-10 border-b border-[#817E7E]'>
        <div className='text-black flex flex-row items-start'>
          <img src={Doc} alt='document' className='pr-2' />
          <h2 className='text-xl'>Sube tu CV</h2>
        </div>
        <button className='text-blue-600'>curriculum.pdf</button>
      </section>
      <section className='py-10 border-b border-[#817E7E]'>
        <ul className='grid grid-rows-2 grid-cols-2 w-2/5 items-center text-black'>
          <li className='row-span-2'>
            <img
              src={profileimg}
              alt='profile url'
              className='w-24 rounded-full'
            />
          </li>
          <li className='align-middle font-semibold text-2xl'>Javier Perez</li>
          <li className='align-middle text-xl'>Pais</li>
        </ul>
        <ul className='flex flex-row items-center gap-8 mt-8 text-black'>
          <li className='flex flex-row items-center gap-3'>
            <img src={Email} alt='email' />
            <p className='text-black text-base'>ejemplo@correo.cl</p>
          </li>
          <li className='flex flex-row items-center gap-3 mr-2 text-black'>
            <img src={Phone} alt='phone' />
            <p className='text-base'>+56912345679</p>
          </li>
          <li className='flex flex-row items-center mr-6'>
            <img src={Linkedin} alt='linkedin' />
          </li>
          <li className='flex flex-row items-center'>
            <img src={Github} alt='github' />
          </li>
        </ul>
      </section>
      <section className='flex flex-row justify-between py-10 border-b border-[#817E7E]'>
        <h2 className='text-black text-xl items-start flex flex-row text-start'>
          <img src={Edu} alt='experiencia' className='w-5 mr-3' />
          Experiencia
        </h2>
        <ul className='text-black'>
          <li className='text-end font-semibold'>1 a 3 años de experiancia</li>
          <li>nivel de ingles avanzado</li>
        </ul>
      </section>
      <section className='flex flex-row justify-between py-10 border-b border-[#817E7E]'>
        <h2 className='text-black flex flex-row text-xl items-start'>
          <img src={Calendar} alt='calendar' className='w-5 mr-3' />
          Disponibilidad
        </h2>
        <ul className='text-black'>
          <li className='text-end font-semibold'>Full Time</li>
          <li>Disponibilidad inmediata</li>
        </ul>
      </section>
      <section className='flex flex-row justify-between py-10 border-b border-[#817E7E]'>
        <h2 className='text-black flex flex-row text-xl items-start'>
          <img src={Contact} alt='calendar' className='w-6 mr-3' />
          Rol y salario actual
        </h2>
        <ul className='text-black'>
          <li className='text-end font-semibold'>FullStack</li>
          <li>Salario actual $3.000.000</li>
        </ul>
      </section>
      <Habilidades />
      <Educacion />
    </main>
  );
}

export default Profile;
