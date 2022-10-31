import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import CheckoutPage from "./CheckoutPage";
import CartContainer from "../features/cart/CartContainer";
import { toast } from "react-toastify";

function CartPage() {
  const { checkoutItems, clearCheckoutItems } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const checkout = () => {
    if (checkoutItems.length === 0) {
      return toast.warning("กรุณาเลือกสินค้าอย่างน้อย 1 รายการ");
    }
    setIsCheckout(true);
  };

  const backToCart = () => {
    setIsCheckout(false);
  };

  useEffect(() => {
    return () => {
      clearCheckoutItems();
    };
  }, [clearCheckoutItems]);

  return (
    <>
      {isCheckout ? (
        <CheckoutPage backToCart={backToCart} />
      ) : (
        <CartContainer checkout={checkout} />
      )}
    </>
  );
}

export default CartPage;
