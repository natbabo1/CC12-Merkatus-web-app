import SellerCartGroup from "./SellerCardGroup";

function CartContainer() {
  return (
    <>
      <form className="w-full border border-red-400 min-h-screen">
        <hr className="border border-mermaid-net" />
        <div className="w-3/4 mx-auto">
          <SellerCartGroup />
        </div>
        <hr className="border border-mermaid-net" />
      </form>
      <div className="flex flex-col">
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default CartContainer;
