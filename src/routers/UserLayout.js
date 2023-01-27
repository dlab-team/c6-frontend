import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, UserNavBar } from '../components';
//TODO header y footer momentaneos hasta tener un layout por default

const UserLayout = () => {
  return (
    <>
      <Header />
      <div className='flex flex-row pt-10'>
        <UserNavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
