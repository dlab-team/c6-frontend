import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
