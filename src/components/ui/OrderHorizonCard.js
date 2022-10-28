import { toBaht } from "../../utils/numberFormat";
import {
  BUYER,
  PAID,
  TRANSFER,
  ARRIVED,
  RECEIVED,
  RATED,
} from "../../utils/constaint";
import { orderButton } from "../../utils/buttonFormat";

function OrderHorizonCard({ role, order, onClickButton }) {
  const buttonType = orderButton(role, order.status);

  return (
    <div className="bg-vivid-orange/30 flex rounded-3xl h-40 py-5 pl-5 pr-10 grow">
      <img
        className="rounded-md mr-8 w-"
        src={order.Product.image}
        alt={order.Product.productName}
      />
      <div className="grow-[2] flex flex-col justify-between">
        <h4 className="block font-semibold">{order.Product.productName}</h4>
        <h4 className="text-tin-color mb-2 mt-2">{order.amount} ชิ้น</h4>
        <h4 className="block font-bold mb-2">{toBaht(order.totalPrice)}</h4>
        <div className="flex items-center justify-start gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="bg-vivid-orange border-0 checked:bg-vivid-orange mr-3 focus:ring-vivid-orange"
              name={order.id}
              checked={order.status === PAID}
              disabled
            />
            เตรียมการจัดส่ง
          </label>
          <label>
            <input
              type="radio"
              className="bg-vivid-orange border-0 checked:bg-vivid-orange mr-3 focus:ring-vivid-orange"
              name={order.id}
              checked={order.status === TRANSFER}
              disabled
            />
            อยู่ระหว่างการจัดส่ง
          </label>
          <label>
            <input
              type="radio"
              className="bg-vivid-orange border-0 checked:bg-vivid-orange mr-3 focus:ring-vivid-orange"
              name={order.id}
              checked={
                order.status === ARRIVED ||
                order.status === RECEIVED ||
                order.status === RATED
              }
              disabled
            />
            พัสดุถึงปลายทาง
          </label>
        </div>
        <div className="h-6">
          {role === BUYER ? (
            " "
          ) : (
            <>
              <i className="fa-regular fa-heart text-vivid-orange text-lg mr-3" />
              <span className="font-bold">5 Wish list</span>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-end grow ml-4">
        <div
          className={`text-white flex items-center justify-center bg-vivid-orange h-10 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net${
            buttonType ? "" : " hidden"
          }`}
          onClick={onClickButton}
        >
          {buttonType}
        </div>
      </div>
    </div>
  );
}

export default OrderHorizonCard;
