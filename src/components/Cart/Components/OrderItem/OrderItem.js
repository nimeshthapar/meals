import React, { useEffect, useRef } from 'react';

import './OrdersItem.css';

const OrderItem = (props) => {
  const itemref = useRef();

  useEffect(() => {
    itemref.current.scrollIntoView({ behaviour: 'smooth' });
  }, []);

  return (
    <div className="order-item__box">
      <p>
        {props.name} x {props.quantity}
      </p>
      <div ref={itemref}></div>
    </div>
  );
};

export default OrderItem;
