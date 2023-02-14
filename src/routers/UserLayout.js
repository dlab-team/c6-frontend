import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, UserNavBar } from '../components';

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
