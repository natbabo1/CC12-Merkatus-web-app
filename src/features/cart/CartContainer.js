import SellerCartGroup from "./SellerCardGroup";
import { useCart } from "../../contexts/CartContext";

function CartContainer({ checkout }) {
  const { cart } = useCart();

  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-between">
      <div className="w-3/4 mx-auto">
        {cart.length > 0 ? (
          <>
            {cart?.map((item, index) => (
              <SellerCartGroup key={item.id} idx={index} cartItem={item} />
            ))}
          </>
        ) : (
          <h3 className="font-semibold text-tin-color py-6 text-2xl border-y-2 border-mermaid-net">
            ไม่มีรายการในตะกร้า
          </h3>
        )}
      </div>
      <div className="flex justify-end items-center w-full bg-vivid-orange/40 px-10 py-4 rounded-lg">
        <button
          to="/checkout"
          className={`block bg-vivid-orange text-white py-2 px-14 rounded-xl${
            cart.length > 0 ? "" : " bg-tin-color"
          }`}
          disabled={cart.length === 0}
          onClick={checkout}
        >
          ชำระเงิน
        </button>
      </div>
    </div>
  );
}

export default CartContainer;
