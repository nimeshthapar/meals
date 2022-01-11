import React, { useState } from 'react';
import OrderList from '../OrderList/OrderList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Order.css';

const Orders = (props) => {
  const [clickId, setClickId] = useState('null');

  return (
    <div className="order-container">
      <h4 className="order-main__heading">
        <u>ORDERS</u>
      </h4>
      {props.orders.map((o) => {
        return (
          <div key={o._id}>
            <div
              className="order-item"
              onClick={() => {
                if (clickId === o._id) {
                  return setClickId('');
                }
                setClickId(o._id);
              }}
            >
              <h3 className="order-heading">{o.name}</h3>
              <KeyboardArrowDownIcon />
            </div>
            {clickId === o._id && (
              <OrderList id={o._id} cart={o.cart} amount={o.amount} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
