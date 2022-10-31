import { toBaht } from "../../utils/numberFormat";

function CheckoutCard({ checkoutItem }) {
  return (
    <div className="bg-vivid-orange/30 flex rounded-3xl h-40 py-5 pl-5 pr-10 grow m-2">
      <img
        className="rounded-md mr-8 w-"
        src={checkoutItem.Product.image}
        alt="Product"
      />
      <div className="grow-[2] flex flex-col justify-between">
        <h4 className="block font-semibold">
          {checkoutItem.Product.productName}
        </h4>
        <div className="flex items-center gap-x-4">
          <div className="w-10 rounded-md pl-3">{checkoutItem.count}</div>

          <h4 className="text-tin-color mb-2 mt-2"> ชิ้น</h4>
        </div>
        <h4 className="block font-bold mb-2">
          {toBaht(checkoutItem.Product.unitPrice * checkoutItem.count)}
        </h4>
      </div>
    </div>
  );
}

export default CheckoutCard;
