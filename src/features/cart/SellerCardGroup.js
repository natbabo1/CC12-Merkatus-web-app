import ProductHorizonCard from "../../components/ui/ProductHorizonCard";
function SellerCartGroup() {
  return (
    <>
      <div className="mb-14">
        <label className="flex items-center gap-3 text-2xl mb-10">
          <input
            type="radio"
            name="seller"
            className="w-6 h-6 border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
          />
          Galadriel
        </label>
        <div className="flex flex-col gap-4 ml-10">
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
            />
            <ProductHorizonCard />
          </div>
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
            />
            <ProductHorizonCard />
          </div>
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
            />
            <ProductHorizonCard />
          </div>
        </div>
      </div>
      <div className="mb-14">
        <label className="flex items-center gap-3 text-2xl">
          <input
            type="radio"
            name="seller"
            className="w-6 h-6 border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
          />
          Flodo
        </label>
        <div className="flex flex-col gap-4 ml-10">
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
            />
            <ProductHorizonCard />
          </div>
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
            />
            <ProductHorizonCard />
          </div>
          <div className="flex items-center justify-start gap-10">
            <input
              type="checkbox"
              className="border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange"
            />
            <ProductHorizonCard />
          </div>
        </div>
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
    </>
  );
}

export default SellerCartGroup;
