import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

//Puse nombres de las paginas que van a ser usadas en las rutas, pero aun no existen en el index
// las puse momentaneamente hasta que tengamos los archivos correspodienres en el index
import {
  Home,
  Dashboard,
  Login,
  Register,
  Recovery,
  Profile,
  CodingTests,
} from '../pages/index';
import UserLayout from './UserLayout';

function RoutesApp() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />}  */}
        <Route path='/register' element={<Register />} />
        <Route path='/recovery/:token?' element={<Recovery />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user' element={<UserLayout />}>
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
