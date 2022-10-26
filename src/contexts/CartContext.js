import { createContext, useContext, useEffect, useState } from "react";
import { getMyCart } from "../api/cartApi";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  //   useEffect(() => {
  //     const fetch = async () => {
  //       try {
  //         const res = await getMyCart();
  //         setCart(res.data.carts);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetch();
  //   }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
