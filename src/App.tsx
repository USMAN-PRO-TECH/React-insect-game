import React, { Suspense, lazy } from 'react';
import Context from './context/Context';
import Loader from './components/Loader';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Navbar = lazy(() =>
  delay(1000).then(() => import('./components/Navbar'))
);

const Main = lazy(() =>
  delay(1000).then(() => import('./components/Main'))
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Context>
        <Navbar />
        <Main />
      </Context>
    </Suspense>
  );
};

export default App;
