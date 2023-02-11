import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ isAutenticated, children }) => {
  if (!isAutenticated) {
    return <Navigate to='/' replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
