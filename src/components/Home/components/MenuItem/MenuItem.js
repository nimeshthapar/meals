import React, { useContext } from 'react';
import { CartContext } from '../../../Shared/store/cart-context';

import MenuForm from '../../../Shared/UI/MenuForm/MenuForm';
import './MenuItem.css';

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  const menuFormRef = React.createRef();
  const submitFormHandler = (e) => {
    e.preventDefault();

    cartCtx.addToCart({
      ...props,
      description: undefined,
      quantity: +menuFormRef.current.value,
    });
  };

  return (
    <div className="menu-meal__item">
      <h4>{props.name}</h4>
      <p>
        <em>"{props.description}"</em>
      </p>
      <span>&#8377; {props.price}</span>
      <MenuForm onSubmit={submitFormHandler} ref={menuFormRef} />
    </div>
  );
};

export default MenuItem;
