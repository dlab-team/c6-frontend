import React from 'react';
import { dataMapa } from '../../utils';
import { Cards } from './components';

function Dashboard() {
  return (
    <main className='bg-white my-14 mx-24 min-h-[100vh]'>
      <h1 className='text-black text-4xl font-semibold'>Bienvenido!</h1>
      <h2 className='text-black text-2xl my-10'>
        Mapa para recibir ofertas automáticas
      </h2>
      <section>
        <ul className='flex flex-wrap'>
          {dataMapa.map((item) => (
            <li>
              <Cards {...item} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Dashboard;
