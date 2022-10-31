import { Link } from "react-router-dom";
import { toBaht } from "../../utils/numberFormat";

function ProductDashBoardCard({ product }) {
  return (
    <div className="bg-vivid-orange/30 flex rounded-3xl h-40 py-5 pl-5 pr-10 grow mb-2">
      <img
        className="rounded-md mr-8 w-"
        src={product.image}
        alt={product.productName}
      />
      <div className="grow-[2] flex flex-col justify-between">
        <div className="flex justify-between">
          <h4 className="block font-semibold">{product.productName}</h4>
          <Link to="" className="cursor-pointer hover:text-vivid-orange">
            แก้ไข
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <h4 className="text-tin-color mb-2 mt-2">
            สต๊อก {product.stock} ชิ้น
          </h4>
        </div>
        <h4 className="block font-bold mb-2">{toBaht(product.unitPrice)}</h4>
      </div>
    </div>
  );
}

export default ProductDashBoardCard;
