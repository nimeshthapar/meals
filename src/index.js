import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import CartProvider from './components/Shared/store/cart-context';

ReactDOM.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>,
  document.getElementById('root')
);
