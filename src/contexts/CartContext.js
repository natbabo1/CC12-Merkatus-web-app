import { createContext, useContext, useEffect, useState } from "react";
import * as cartService from "../api/cartApi";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  const fetch = async () => {
    try {
      const res = await cartService.getMyCart();

      setCart(res.data.carts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      fetch();
    }
  }, [user]);

  const updateCart = async (input) => {
    try {
      await cartService.putMyCart(input);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCartItem = async (input) => {
    await cartService.deleteCartItem(input);
  };

  const handleCart = (input) => {
    setCart(input);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, updateCart, deleteCartItem, fetch, handleCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
