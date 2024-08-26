import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTitles, setCartTitles] = useState([]);

  const addToCart = (product, amount = 1) => {
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, amount: item.amount + amount }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, amount }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, amount: item.amount + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseAmount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleTitles = () => {
    const cartTitles = cart.map(item => item.title);
    setCartTitles(cartTitles);
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseAmount, decreaseAmount, resetCart, handleTitles, cartTitles }}
    >
      {children}
    </CartContext.Provider>
  );
};
