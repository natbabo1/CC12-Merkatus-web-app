import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { toast } from "react-toastify";
import * as cartService from "../api/cartApi";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);

  const totalCartItems = useMemo(() => cart.length, [cart]);

  const fetchCartItem = useCallback(async () => {
    try {
      const res = await cartService.getMyCart();

      setCart(res.data.carts);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchCartItem();
    }
  }, [fetchCartItem, user]);

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

  const clearCheckedOutCartItem = (checkedoutItems) => {
    let newCart = [...cart];
    checkedoutItems.forEach((checked) => {
      newCart = newCart.filter((cartItem) => cartItem.id !== checked.id);
    });
    setCart(newCart);
  };

  const clearCartState = () => setCart([]);

  const updateCart = async (input) => {
    try {
      await cartService.putMyCart(input);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCartItem = async (cartId) => {
    await cartService.deleteCartItem({ cartId });
    setCart((prev) => prev.filter((item) => item.id !== cartId));
  };

  const addNewProduct = async (productId) => {
    const isProductExist = cart.findIndex(
      (item) => item.Product.id === productId
    );

    if (isProductExist !== -1) {
      return toast.warning("สินค้าได้อยู่ในตะกร้าแล้ว");
    }

    const res = await cartService.createCartItem(productId);
    setCart((prev) => [...prev, res.data.cart]);
  };

  const updateCountCart = async (cartId, newCount) => {
    await updateCart({ cartId, count: newCount });
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, count: newCount } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        deleteCartItem,
        fetchCartItem,
        clearCartState,
        totalCartItems,
        handleOnCheckbox,
        clearCheckoutItems,
        checkoutItems,
        addNewProduct,
        updateCountCart,
        clearCheckedOutCartItem
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
