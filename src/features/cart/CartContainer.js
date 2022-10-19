import SellerCartGroup from "./SellerCardGroup";

function CartContainer() {
  return (
    <form className="w-full min-h-screen">
      <div className="w-3/4 mx-auto">
        <SellerCartGroup />
        <SellerCartGroup />
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
