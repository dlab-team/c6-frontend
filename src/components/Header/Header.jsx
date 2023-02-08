import React, { useState, useContext } from 'react';
import logo from '../../assets/images/Logo-horizontal.png';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const { token } = useContext(AuthContext);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };

  return (
    <>
      <nav className='flex items-center h-20 text-white justify-between px-2 py-3 bg-[#2738F5]'>
        <Link to={'/'}>
          <img className='w-40 h-12 ml-28' src={logo} alt='Logo' />
        </Link>

        <ul className='hidden md:flex gap-4'>
          {token ? null : (
            <>
              <li className='w-28 h-7 mt-4'>
                <button onClick={handleOpenModal}>Iniciar Sesión</button>
              </li>

              <li className='w-52 h-7 mt-4'>
                <Link to='/'>Administra la Página</Link>
              </li>

              <button
                type='button'
                className='hidden md:block border-solid border-zinc-100 border py-4 px-4 rounded-md  hover:opacity-80'
                onClick={handleOpenModal1}
              >
                {' '}
                Regístrate
              </button>
            </>
          )}

          {openModal && (
            <div
              id='modal-backdrop'
              className='absolute inset-0 bg-[#252424cc] w-screen h-full'
              onClick={(e) => {
                if (e.target.id === 'modal-backdrop') {
                  setOpenModal(false);
                }
              }}
            >
              <div
                onClick={handleCloseModal}
                className='fixed top-0 left-0 w-full h-full bg-opacity-50 z-50'
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[27rem] border-stone-500 bg-sky-100 rounded-md'
                >
                  <div className='flex flex-col items-center justify-center h-full text-black'>
                    <button
                      className='absolute top-4 right-4 text-black font-bold'
                      type='button'
                      onClick={() => setOpenModal(false)}
                    >
                      X
                    </button>
                    <h1 className='static text-2xl font-semibold -mt-20'>
                      Iniciar Sesión
                    </h1>

                    <LoginForm setOpenModal={setOpenModal} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {openModal1 && (
            <div
              id='modal-backdrop'
              className='absolute inset-0 bg-[#252424cc] w-screen h-full'
              onClick={(e) => {
                if (e.target.id === 'modal-backdrop') {
                  setOpenModal1(false);
                }
              }}
            >
              <div
                onClick={handleCloseModal1}
                className='fixed top-0 left-0 w-full h-full bg-opacity-50 z-50'
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[27rem] border-stone-500 bg-sky-100 rounded-md'
                >
                  <div className='flex flex-col items-center justify-center h-full text-black'>
                    <button
                      className='absolute top-4 right-4 text-black font-bold'
                      type='button'
                      onClick={() => setOpenModal1(false)}
                    >
                      X
                    </button>
                    <h1 className='static text-2xl font-semibold -mt-5 mb-5'>
                      Regístrate
                    </h1>
                    <RegisterForm setOpenModal1={setOpenModal1} />
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            type='button'
            className='hidden md:block bg-zinc-100 py-4 px-4 mr-4 rounded-md hover:opacity-80 text-[#2738F5] '
          >
            Contáctanos
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
