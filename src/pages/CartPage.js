import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import CartContainer from "../features/cart/CartContainer";
function CartPage() {
  const { user } = useAuth();
  const { fetch } = useCart();
  useEffect(() => {
    if (user) {
      fetch();
    }
  }, []);
  return <CartContainer />;
}

export default CartPage;
