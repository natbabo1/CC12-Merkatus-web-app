import { createContext, useContext, useEffect, useState } from "react";
import * as cartService from "../api/cartApi";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await cartService.getMyCart();

        setCart(res.data.carts);
      } catch (err) {
        console.log(err);
      }
    };
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

  return (
    <CartContext.Provider value={{ cart, setCart, updateCart, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
