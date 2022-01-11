import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavLinks.css';
import { CartContext } from '../../Shared/store/cart-context';

const NavLinks = (props) => {
  const { cartItems: items } = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numOfCartItems = items.reduce((prev, curr) => prev + curr.quantity, 0);

  const btnClasses = btnIsHighlighted
    ? `bump ${props.side ? 'side-link' : 'nav-item'}`
    : props.side
    ? 'side-link'
    : 'nav-item';

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <li className={props.side ? 'side-link' : 'nav-item'}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={btnClasses}>
        <NavLink to="/cart" className="btn">
          <ShoppingCartIcon />
          <span>Cart</span>
          <span className="badge">{numOfCartItems}</span>
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
