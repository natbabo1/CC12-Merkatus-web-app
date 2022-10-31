import { useCart } from "../../contexts/CartContext";
import { toBaht } from "../../utils/numberFormat";
import { toast } from "react-toastify";
function ProductHorizonCard({ cartItem, isCheck }) {
  const { deleteCartItem, updateCountCart } = useCart();

  const handleAddProduct = async () => {
    if (cartItem.count === cartItem.Product.stock) {
      return toast.error("จำนวนสินค้าในคลังไม่เพียงพอ");
    }

    try {
      await updateCountCart(cartItem.id, cartItem.count + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecreaseProduct = async () => {
    if (cartItem.count === 1) {
      return handleDeleteProduct();
    }

    try {
      await updateCountCart(cartItem.id, cartItem.count - 1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteCartItem(cartItem.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-vivid-orange/30 flex rounded-3xl h-40 py-5 pl-5 pr-10 grow">
      <img
        className="rounded-md mr-8 w-"
        src={cartItem.Product.image}
        alt="Product"
      />
      <div className="grow-[2] flex flex-col justify-between">
        <h4 className="block font-semibold">{cartItem.Product.productName}</h4>
        <div>
          {toBaht(cartItem.Product.unitPrice)} จำนวนสินค้าในคลัง :{" "}
          {cartItem.Product.stock}
        </div>

        <div className="flex items-center gap-x-4">
          {isCheck ? null : (
            <div
              className="w-4 h-4 bg-vivid-orange text-white flex justify-center items-center rounded-md"
              onClick={handleDecreaseProduct}
            >
              -
            </div>
          )}

          <div className="w-10 rounded-md pl-3">{cartItem.count}</div>
          {isCheck ? null : (
            <div
              className="w-4 h-4 bg-vivid-orange text-white flex justify-center items-center rounded-md"
              onClick={handleAddProduct}
            >
              +
            </div>
          )}

          <h4 className="text-tin-color mb-2 mt-2"> ชิ้น</h4>
        </div>
        <h4 className="block font-bold mb-2">
          {toBaht(cartItem.Product.unitPrice * cartItem.count)}
        </h4>
      </div>
    </div>
  );
}

export default ProductHorizonCard;
