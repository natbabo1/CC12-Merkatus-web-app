import { useCart } from "../../contexts/CartContext";
import { toBaht } from "../../utils/numberFormat";
import { useState } from "react";

function ProductHorizonCard({ cartItem }) {
  const { updateCart, deleteCartItem } = useCart();
  const [count, setCount] = useState(cartItem.count);

  const handleAddProduct = async () => {
    const newInputCount = count + 1;
    console.log(newInputCount);
    setCount((prev) => prev + 1);
    try {
      await updateCart({ cartId: cartItem.id, count: newInputCount });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecreaseProduct = async () => {
    const newInputCount = count - 1;

    try {
      if (count == 1) {
        return await deleteCartItem({ cartId: cartItem.id });
      }
      setCount((prev) => prev - 1);
      await updateCart({ cartId: cartItem.id, count: newInputCount });
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
        <div className="flex items-center gap-x-4">
          <div
            className="w-4 h-4 bg-vivid-orange text-white flex justify-center items-center rounded-md"
            onClick={handleDecreaseProduct}
          >
            -
          </div>
          <div className="w-10 rounded-md pl-3">{count}</div>
          <div
            className="w-4 h-4 bg-vivid-orange text-white flex justify-center items-center rounded-md"
            onClick={handleAddProduct}
          >
            +
          </div>
          <h4 className="text-tin-color mb-2 mt-2"> ชิ้น</h4>
        </div>
        <h4 className="block font-bold mb-2">
          {toBaht(cartItem.Product.unitPrice)}
        </h4>
      </div>
    </div>
  );
}

export default ProductHorizonCard;
