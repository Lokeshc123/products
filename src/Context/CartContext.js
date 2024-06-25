import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const updateCartItemQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeCartItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCartItemQuantity,
        removeCartItem,
        setCart,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
