import { useCart } from "../../contexts/CartContext";
import { toBaht } from "../../utils/numberFormat";

function ProductHorizonCard({ cartItem, idx, isCheck }) {
  const { updateCart, deleteCartItem, cart, handleCart } = useCart();
  // const [count, setCount] = useState(cartItem.count);

  const handleAddProduct = async () => {
    const newInputCount = cartItem.count + 1;
    // setCount((prev) => prev + 1);
    handleCart(
      cart.map((item) =>
        item.id === cartItem.id ? { ...item, count: newInputCount } : item
      )
    );
    try {
      await updateCart({ cartId: cartItem.id, count: newInputCount });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteProduct = () => {
    const newCart = cart.filter((item) => item.id !== cartItem.id);
    handleCart(newCart);
  };

  const handleDecreaseProduct = async () => {
    const newInputCount = cartItem.count - 1;

    try {
      if (cartItem.count === 1) {
        handleDeleteProduct();
        return await deleteCartItem({ cartId: cartItem.id });
      }
      // setCount((prev) => prev - 1);
      handleCart(
        cart.map((item) =>
          item.id === cartItem.id ? { ...item, count: newInputCount } : item
        )
      );
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
          {toBaht(cartItem.Product.unitPrice)}
        </h4>
      </div>
    </div>
  );
}

export default ProductHorizonCard;
