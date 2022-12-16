import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const IndexPage = React.lazy(() => import('../views/Index/IndexPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route index element={<IndexPage />} />
        </Route>

      </Routes>
    </Suspense>

  );
}

export default App;
