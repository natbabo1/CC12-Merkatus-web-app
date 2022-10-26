import { useNavigate } from "react-router-dom";
import WalletIcon from "../../components/icon/WalletIcon";
import BoxIcon from "../../components/icon/BoxIcon";
import TruckIcon from "../../components/icon/TruckIcon";
import StarIcon from "../../components/icon/StarIcon";
import StoreIcon from "../../components/icon/StoreIcon";
import { PAID, RATED, RECEIVED, TRANSFER } from "../../utils/constaint";

function ProductFilterMenu({ onFilter }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-48 text-white gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80"
        onClick={() => onFilter(PAID)}
      >
        <h2 className="text-xl">ที่ต้องจัดส่ง</h2>
        <div className="w-[4.5rem]">
          <BoxIcon />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-48 text-white gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80"
        onClick={() => onFilter(TRANSFER)}
      >
        <h2 className="text-xl">ที่ต้องได้รับ</h2>
        <div className="relative w-full h-[4.5rem]">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-28">
            <TruckIcon />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-48 text-white gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80"
        onClick={() => onFilter(RECEIVED)}
      >
        <h2 className="text-xl">ให้คะแนน</h2>
        <div className="w-16 h-[4.5rem]">
          <StarIcon />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-48 text-white gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80"
        onClick={() => onFilter(RATED)}
      >
        <h2 className="text-xl">ประวัติการซื้อ</h2>
        <div className="w-[4.5rem]">
          <WalletIcon />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-48 text-white gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80"
        onClick={() => navigate("/selling")}
      >
        <h2 className="text-xl">ร้านค้าของฉัน</h2>
        <div className="relative w-full h-[4.5rem]">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20">
            <StoreIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFilterMenu;
