import { toBaht } from "../../utils/numberFormat";

function ProductHorizonCard() {
  return (
    <div className="bg-vivid-orange/30 flex rounded-3xl h-40 py-5 pl-5 pr-10 grow">
      <img
        className="rounded-md mr-8 w-"
        src="https://picsum.photos/200"
        alt="Product"
      />
      <div className="grow-[2] flex flex-col justify-between">
        <h4 className="block font-semibold">Product Item Name</h4>
        <div className="flex items-center gap-x-4">
          <div className="w-4 h-4 bg-vivid-orange text-white flex justify-center items-center rounded-md">
            -
          </div>
          <input className="w-10 rounded-md pl-3"></input>
          <div className="w-4 h-4 bg-vivid-orange text-white flex justify-center items-center rounded-md">
            +
          </div>
          <h4 className="text-tin-color mb-2 mt-2"> ชิ้น</h4>
        </div>
        <h4 className="block font-bold mb-2">{toBaht(8888)}</h4>
      </div>
    </div>
  );
}

export default ProductHorizonCard;
