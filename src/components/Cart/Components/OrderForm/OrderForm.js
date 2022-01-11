import React, { useContext } from 'react';
import { CartContext } from '../../../Shared/store/cart-context';

import Button from '../../../Shared/UI/Button/Button';
import Card from '../../../Shared/UI/Card/Card';
import Input from '../../../Shared/UI/Input/Input';
import Modal from '../../../Shared/UI/Modal/Modal';
import './OrderForm.css';
import useHttp from '../../../Shared/hooks/useHttp';

const OrderForm = (props) => {
  const nameRef = React.createRef();
  const addressRef = React.createRef();
  const instructionRef = React.createRef();

  const cartCtx = useContext(CartContext);

  const {
    isLoading,
    error,
    sendRequest: sendOrderRequest,
    clearError,
  } = useHttp();

  const submitOrderFormHandler = async (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const addressValue = addressRef.current.value;
    const instructionValue = instructionRef.current.value;

    await sendOrderRequest(
      `${process.env.REACT_APP_BACKEND_URL}/order`,
      'POST',
      JSON.stringify({
        name: nameValue,
        address: addressValue,
        instructions: instructionValue,
        cart: [...cartCtx.cartItems],
        amount: cartCtx.totalAmount,
      }),
      {
        'Content-Type': 'application/json',
      }
    );

    props.clearCart();
  };

  return (
    <>
      {error && <Modal error={error} onClose={clearError} />}
      <Card className="order">
        <form onSubmit={submitOrderFormHandler}>
          <Input
            for="name"
            label="Name"
            placeholder="Enter your Full Name"
            ref={nameRef}
          />
          <Input
            for="address"
            label="Address"
            placeholder="Enter your Full Address"
            ref={addressRef}
            textarea
          />
          <Input
            for="insturctions"
            label="Special Instructions"
            placeholder="Any Special Instructions"
            ref={instructionRef}
            textarea
          />
          <div className="center">
            <h3>Total Amount: &#8377; {props.amount} </h3>
            <Button title="Back To Cart" onClick={props.onBack} inverse />
            <Button
              type="submit"
              title={isLoading ? 'Proceeding...' : 'Proceed'}
            />
          </div>
        </form>
      </Card>
    </>
  );
};

export default OrderForm;
