import ProductHorizonCard from "../../components/ui/ProductHorizonCard";

function SellerCartGroup({ cartItem }) {
  return (
    <>
      <hr className="bg-mermaid-net border border-mermaid-net" />
      <div className="my-10">
        <div className="flex flex-col gap-4 ml-10">
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
            />
            <ProductHorizonCard cartItem={cartItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerCartGroup;
