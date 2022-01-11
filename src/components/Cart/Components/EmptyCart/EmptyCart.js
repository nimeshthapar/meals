import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import cartImage from '../../../../assets/cart.jpg';
import useHttp from '../../../Shared/hooks/useHttp';
import Button from '../../../Shared/UI/Button/Button';
import Card from '../../../Shared/UI/Card/Card';
import Modal from '../../../Shared/UI/Modal/Modal';
import Orders from '../Orders/Orders';
import './EmptyCart.css';

const EmptyCart = (props) => {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(props.show);
  const { isLoading, error, sendRequest: fetchOrders, clearError } = useHttp();
  const prevOrderHandler = async () => {
    const fetchList = async () => {
      if (showOrders) {
        return setShowOrders(false);
      }
      try {
        const data = await fetchOrders(
          `${process.env.REACT_APP_BACKEND_URL}/order`
        );
        setOrders(data);
        setShowOrders(true);
      } catch (Err) {}
    };

    fetchList();
  };
  return (
    <>
      {error && <Modal error={error} onClose={clearError} />}
      <Card className="empty-cart">
        <img src={cartImage} alt="empty cart" />
        <h3>Oops!! Cart is Empty</h3>
        <Link to="/">Visit Home to Add Delicious Food</Link>
        <div className="order-btn">
          <Button
            onClick={prevOrderHandler}
            title={showOrders ? 'Close' : 'Previous 3 Orders'}
          />
          {!isLoading && showOrders && orders.length === 0 && (
            <h1>No Orders Yet</h1>
          )}
          {isLoading && <p className="center">Loading....</p>}
        </div>
      </Card>
      {orders.length > 0 && showOrders && (
        <Card className="order-card">
          {!isLoading && orders.length > 0 && showOrders && (
            <Orders orders={orders} />
          )}
        </Card>
      )}
    </>
  );
};

export default EmptyCart;
