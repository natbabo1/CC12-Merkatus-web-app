import SellerCartGroup from "./SellerCardGroup";
import { useCart } from "../../contexts/CartContext";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
function CartContainer() {
  const { user } = useAuth();
  const { cart, fetch, clearCheckoutItems } = useCart();

  useEffect(() => {
    if (user) {
      fetch();
    }

    return () => {
      clearCheckoutItems();
    };
  }, [clearCheckoutItems, fetch, user]);

  return (
    <form className="w-full min-h-screen">
      <div className="w-3/4 mx-auto">
        {cart?.map((item) => (
          <SellerCartGroup key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="flex justify-end items-center w-full bg-vivid-orange/40 px-10 py-4 rounded-lg">
        <div className="flex items-center text-vivid-orange font-semibold mr-14">
          ราคารวมทั้งหมด
          <span className="flex items-center text-black text-xl ml-3">
            890 บาท
          </span>
        </div>
        <button className="bg-vivid-orange text-white py-2 px-14 rounded-xl">
          ชำระเงิน
        </button>
      </div>
    </form>
  );
}

export default CartContainer;
