import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

//ejemplo de como importamos distintos componentes
//como ven sale desde un archivo unico
import { IndexPage, Home } from './pages/index';

const DefaultLayout = React.lazy(() => import('./routers/DefaultLayout'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
