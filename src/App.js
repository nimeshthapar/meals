import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/Layout/Header/MainHeader';

const Cart = lazy(() => import('./components/Cart/Pages/Cart'));
const Home = lazy(() => import('./components/Home/Pages/Home'));

function App() {
  return (
    <div className="App">
      <MainHeader>
        <Suspense fallback={<h4 className="loading">Loading....</h4>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </MainHeader>
    </div>
  );
}

export default App;
