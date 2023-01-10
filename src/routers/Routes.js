import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

//Puse nombres de las paginas que van a ser usadas en las rutas, pero aun no existen en el index
// las puse momentaneamente hasta que tengamos los archivos correspodienres en el index
import { Home, Dashboard, Login, Register, Recovery } from '../pages/index';

function RoutesApp() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} /> */}
      </Routes>
    </Suspense>
  );
}

export default RoutesApp;
