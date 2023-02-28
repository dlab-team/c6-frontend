import React, { useContext } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthContext } from '../Context/AuthContext';

//Puse nombres de las paginas que van a ser usadas en las rutas, pero aun no existen en el index
// las puse momentaneamente hasta que tengamos los archivos correspodienres en el index
import {
  Home,
  Dashboard,
  Recovery,
  Profile,
  CodingTests,
  FormLooking,
  NotFound,
} from '../pages/index';
import DefaultLayout from './DefaultLayout';
import UserLayout from './UserLayout';
import ProtectedRoutes from './ProtectedRoute';

function RoutesApp() {
  const { token } = useContext(AuthContext);
 
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/recovery/:token?' element={<Recovery />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/form-looking' element={<FormLooking />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route
          path='/user'
          element={
            <ProtectedRoutes isAutenticated={token}>
              <UserLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='tests' element={<CodingTests />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default RoutesApp;
