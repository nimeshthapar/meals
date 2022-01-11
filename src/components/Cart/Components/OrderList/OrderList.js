import React from 'react';

import OrderItem from '../OrderItem/OrderItem';
import './OrderList.css';

const OrderList = (props) => {
  return (
    <div className="order-list">
      {props.cart.map((c) => (
        <OrderItem name={c.name} quantity={c.quantity} amount={c.amount} />
      ))}
      <h4>&#8377; {props.amount}</h4>
    </div>
  );
};

export default OrderList;
