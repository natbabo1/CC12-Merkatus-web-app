import SellerCartGroup from "./SellerCardGroup";
import { useCart } from "../../contexts/CartContext";

function CartContainer({ checkout }) {
  const { cart } = useCart();

  return (
    <div className="w-full min-h-screen">
      <div className="w-3/4 mx-auto">
        {cart?.map((item) => (
          <SellerCartGroup key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="flex justify-end items-center w-full bg-vivid-orange/40 px-10 py-4 rounded-lg">
        <button
          to="/checkout"
          className="block bg-vivid-orange text-white py-2 px-14 rounded-xl"
          onClick={checkout}
        >
          ชำระเงิน
        </button>
      </div>
    </div>
  );
}

export default CartContainer;
