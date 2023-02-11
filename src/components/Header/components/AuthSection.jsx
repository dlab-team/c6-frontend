import React from 'react';

function AuthSection({ handleOpenModal, handleOpenModal1 }) {
  return (
    <>
      <li className='w-28 h-7 mt-4'>
        <button onClick={handleOpenModal}>Iniciar Sesión</button>
      </li>
      <li>
        <button
          type='button'
          className='hidden md:block border-solid border-zinc-100 border py-4 px-4 rounded-md  hover:opacity-80'
          onClick={handleOpenModal1}
        >
          {' '}
          Regístrate
        </button>
      </li>
      <li>
        <button
          type='button'
          className='hidden md:block bg-zinc-100 py-4 px-4 mr-4 rounded-md hover:opacity-80 text-[#2738F5] '
        >
          Contáctanos
        </button>
      </li>
    </>
  );
}

export default AuthSection;
