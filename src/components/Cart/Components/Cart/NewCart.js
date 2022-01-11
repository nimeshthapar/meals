import React from 'react';

import './NewCart.css';
import CartItem from '../CartItem/CartItem';
import Card from '../../../Shared/UI/Card/Card';
import Button from '../../../Shared/UI/Button/Button';

const NewCart = (props) => {
  return (
    <Card className="new-cart">
      {props.cartItems.map((c) => (
        <CartItem
          key={c.id}
          id={c.id}
          price={c.price}
          quantity={c.quantity}
          name={c.name}
        />
      ))}
      <div className="amount">
        <h3>Total Amount: &#8377; {props.amount} </h3>
        <Button title="Clear Cart" onClick={props.onClear} inverse />
        <Button title="Order" onClick={props.onShow} />
      </div>
    </Card>
  );
};

export default NewCart;
