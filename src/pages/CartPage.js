import CartContainer from "../features/cart/CartContainer";
import { useCart } from "../contexts/CartContext";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import CheckoutPage from "./CheckoutPage";
function CartPage() {
  const { user } = useAuth();
  const { fetch, clearCheckoutItems } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const checkout = () => {
    setIsCheckout(true);
  };

  useEffect(() => {
    if (user) {
      fetch();
    }

    return () => {
      clearCheckoutItems();
    };
  }, [clearCheckoutItems, fetch, user]);
  return (
    <>{isCheckout ? <CheckoutPage /> : <CartContainer checkout={checkout} />}</>
  );
}

export default CartPage;
