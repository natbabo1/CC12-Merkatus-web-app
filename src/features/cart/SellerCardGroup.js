import { useRef } from "react";
import ProductHorizonCard from "../../components/ui/ProductHorizonCard";
import { useCart } from "../../contexts/CartContext";

function SellerCartGroup({ cartItem }) {
  const { handleOnCheckbox } = useCart();

  const checkBox = useRef();

  return (
    <>
      <hr className="bg-mermaid-net border border-mermaid-net" />
      <div className="my-10">
        <div className="flex flex-col gap-4 ml-10">
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
              onChange={(e) => handleOnCheckbox(e, cartItem)}
              ref={checkBox}
            />
            <ProductHorizonCard
              cartItem={cartItem}
              isCheck={checkBox.current?.checked}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerCartGroup;
