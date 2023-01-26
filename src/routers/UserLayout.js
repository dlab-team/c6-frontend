import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserNavBar } from '../components';

const UserLayout = () => {
  return (
    <div className='flex flex-row pt-10'>
      <UserNavBar />
      <Outlet />
    </div>
  );
};

export default UserLayout;
