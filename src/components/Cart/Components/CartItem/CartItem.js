import React, { useContext } from 'react';
import { CartContext } from '../../../Shared/store/cart-context';
import Button from '../../../Shared/UI/Button/Button';

import './CartItem.css';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="cart-item">
      <h4>{props.name}</h4>
      <div className="total-price">
        <p>{props.price}</p>
        <span>x</span>
        <div className="cart-actions">
          <Button
            title="-"
            inverse
            onClick={cartCtx.removeFromCart.bind(null, props.id)}
          />
          <p>{props.quantity}</p>
          <Button
            title="+"
            onClick={cartCtx.addToCart.bind(null, { ...props, quantity: 1 })}
          />
        </div>
      </div>
      <h4>&#8377; {props.price * props.quantity}</h4>
    </div>
  );
};

export default CartItem;
