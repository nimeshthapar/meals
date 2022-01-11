import React, { useCallback, useState } from 'react';

export const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  clearCart: () => {},
  addToCart: (cartItem) => {},
  removeFromCart: (id) => {},
});

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = useCallback(
    (cartItem) => {
      const updatedCartItems = [...cartItems];

      const exisistingCartItemIndex = updatedCartItems.findIndex(
        (c) => c.id === cartItem.id
      );
      const exisistingCartItem = updatedCartItems[exisistingCartItemIndex];

      if (exisistingCartItem) {
        exisistingCartItem.quantity += cartItem.quantity;
        setCartItems(updatedCartItems);
        setTotalAmount((prev) => prev + cartItem.quantity * cartItem.price);
      } else {
        setCartItems((prev) => [...prev, cartItem]);
        setTotalAmount((prev) => prev + cartItem.price * cartItem.quantity);
      }
    },
    [cartItems]
  );

  const removeFromCart = useCallback(
    (id) => {
      const updatedCartItems = [...cartItems];
      const foundCartItemIndex = updatedCartItems.findIndex((c) => c.id === id);
      const foundCartItem = updatedCartItems[foundCartItemIndex];

      if (foundCartItem.quantity === 1) {
        const itemsAfterRemoving = updatedCartItems.filter((c) => c.id !== id);
        setCartItems(itemsAfterRemoving);
        setTotalAmount((prev) => (prev === 0 ? 0 : prev - foundCartItem.price));
      } else {
        foundCartItem.quantity -= 1;
        setCartItems(updatedCartItems);
        setTotalAmount((prev) => prev - foundCartItem.price);
      }
    },
    [cartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
    setTotalAmount(0);
  }, []);

  const value = {
    cartItems,
    totalAmount,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
