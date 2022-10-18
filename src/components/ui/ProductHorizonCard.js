import { BUYER, SELLER, PAID, TRANSFER, RECEIVED } from '../../utils/constaint';

function ProductHorizonCard({ role, status }) {
  const buttonType = (() => {
    if (role === BUYER) {
      if (status === TRANSFER) {
        return 'รายละเอียด';
      }
      if (status === RECEIVED) {
        return 'ยืนยัน';
      }
    }
    if (role === SELLER) {
      if (status === PAID) {
        return 'ส่งสินค้า';
      }
      if (status === RECEIVED) {
        return 'ติดต่อผู้ซื้อ';
      }
    }
  })();

  return (
    <div className="bg-vivid-orange/30 flex rounded-3xl h-40 py-5 pl-5 pr-10">
      <img
        className="rounded-md mr-8 w-"
        src="https://picsum.photos/200"
        alt="Product"
      />
      <div className="grow-[2] flex flex-col justify-between">
        <h4 className="block font-semibold">Lorem ipsum Product Name</h4>
        <h4 className="block font-bold">฿20,000</h4>
        <div className="flex items-center justify-start gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="bg-vivid-orange border-0 checked:bg-vivid-orange mr-3 focus:ring-vivid-orange"
              name="status"
              checked
              disabled
            />
            เตรียมการจัดส่ง
          </label>
          <label>
            <input
              type="radio"
              className="bg-vivid-orange border-0 checked:bg-vivid-orange mr-3 focus:ring-vivid-orange"
              name="status"
              disabled
            />
            อยู่ระหว่างการจัดส่ง
          </label>
          <label>
            <input
              type="radio"
              className="bg-vivid-orange border-0 checked:bg-vivid-orange mr-3 focus:ring-vivid-orange"
              name="status"
              disabled
            />
            พัสดุถึงปลายทาง
          </label>
        </div>
        <div className="h-6">
          {role === BUYER ? (
            ' '
          ) : (
            <>
              <i className="fa-regular fa-heart text-vivid-orange text-lg mr-3" />
              <span className="font-bold">5 Wish list</span>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between grow ml-4">
        <div className="self-end hover:text-vivid-orange active:text-mermaid-net cursor-pointer">
          แก้ไข
        </div>
        <div
          className={`text-white flex items-center justify-center bg-vivid-orange h-10 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net${
            status === PAID ? ' hidden' : ''
          }`}
        >
          {buttonType}
        </div>
      </div>
    </div>
  );
}

export default ProductHorizonCard;
