import React, { useContext, useState } from 'react';

import NewCart from '../Components/Cart/NewCart';
import EmptyCart from '../Components/EmptyCart/EmptyCart';
import { CartContext } from '../../Shared/store/cart-context';
import OrderForm from '../Components/OrderForm/OrderForm';

const Cart = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const cartCtx = useContext(CartContext);

  return (
    <>
      {!showOrderForm && cartCtx.cartItems.length > 0 && (
        <NewCart
          cartItems={cartCtx.cartItems}
          amount={cartCtx.totalAmount}
          onShow={() => setShowOrderForm(true)}
          onClear={cartCtx.clearCart}
        />
      )}
      {cartCtx.cartItems.length === 0 && !showOrderForm && (
        <EmptyCart show={false} />
      )}
      {showOrderForm && cartCtx.cartItems.length > 0 && (
        <OrderForm
          amount={cartCtx.totalAmount}
          onBack={() => setShowOrderForm(false)}
          clearCart={() => {
            cartCtx.clearCart();
            setShowOrderForm(false);
          }}
        />
      )}
    </>
  );
};

export default Cart;
