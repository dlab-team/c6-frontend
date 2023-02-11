import React, { useState, useContext } from 'react';
import logo from '../../assets/images/Logo-horizontal.png';
import { Link } from 'react-router-dom';
import {
  AuthSection,
  UserSection,
  LoginModal,
  RegisterModal,
} from './components';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const nombre = 'Javier Perez';
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
          {token ? (
            <UserSection nombre={nombre} />
          ) : (
            <AuthSection
              handleOpenModal={handleOpenModal}
              handleOpenModal1={handleOpenModal1}
            />
          )}
          {openModal && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              setOpenModal={setOpenModal}
            />
          )}
          {openModal1 && (
            <RegisterModal
              handleCloseModal1={handleCloseModal1}
              setOpenModal1={setOpenModal1}
            />
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
