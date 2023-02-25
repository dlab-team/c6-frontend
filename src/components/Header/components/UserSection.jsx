import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';

function UserSection({ nombre }) {
  const { dispatch } = useContext(AuthContext);

  const handlelogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('userToken');
  };

  return (
    <>
      <li className='flex flex-row justify-center items-center px-4'>
        <p>Bienvenido {nombre}!</p>
      </li>
      <li>
        <Link to={'/'}>
          <button
            type='button'
            className='hidden md:block bg-zinc-100 py-4 px-4 mr-4 rounded-md hover:opacity-80 text-[#2738F5] '
          >
            Inicio
          </button>
        </Link>
      </li>
      <li>
        <Link to={'user/dashboard'}>
          <button
            type='button'
            className='hidden md:block bg-zinc-100 py-4 px-4 mr-4 rounded-md hover:opacity-80 text-[#2738F5] '
          >
            Dashboard
          </button>
        </Link>
      </li>
      <li>
        <button
          type='button'
          className='hidden md:block bg-zinc-100 py-4 px-4 mr-4 rounded-md hover:opacity-80 text-[#2738F5] '
        >
          Completa tu perfil
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
      <li>
        <button
          type='button'
          onClick={handlelogout}
          className='hidden md:block border-solid border-zinc-100 border py-4 px-4 mr-4 rounded-md  hover:opacity-80'
        >
          Logout
        </button>
      </li>
    </>
  );
}

export default UserSection;
