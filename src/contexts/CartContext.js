import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import * as cartService from "../api/cartApi";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);

  const handleOnCheckbox = (e, cartItem) => {
    if (e.target.checked) {
      const item = checkoutItems.find(
        (item) => item.productId === cartItem.productId
      );
      if (!item) {
        setCheckoutItems((prev) => [...prev, cartItem]);
      }
    } else {
      setCheckoutItems((prev) =>
        prev.filter(
          (checkoutItem) => checkoutItem.productId !== cartItem.productId
        )
      );
    }
  };

  const clearCheckoutItems = useCallback(() => {
    setCheckoutItems([]);
  }, []);

  const totalCartItems = useMemo(() => cart.length, [cart]);

  const fetch = useCallback(async () => {
    try {
      const res = await cartService.getMyCart();

      setCart(res.data.carts);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetch();
    }
  }, [fetch, user]);

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
      value={{
        cart,
        setCart,
        updateCart,
        deleteCartItem,
        fetch,
        handleCart,
        totalCartItems,
        handleOnCheckbox,
        clearCheckoutItems,
        checkoutItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
