import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart, cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;


