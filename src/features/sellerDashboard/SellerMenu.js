import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function SellerMenu() {
  const {
    user: { id }
  } = useAuth();

  return (
    <div className="basis-32 flex flex-col justify-evenly mx-5">
      <Link
        to={`/profile/${id}`}
        className="text-sm text-center font-bold py-1 px-3 border-[3px] border-vivid-orange rounded-lg hover:bg-vivid-orange hover:text-whisper"
      >
        ดูหน้าร้านค้า
      </Link>
      <Link
        to="/addproduct"
        className="text-sm text-center font-bold py-1 px-3 border-[3px] border-vivid-orange rounded-lg hover:bg-vivid-orange hover:text-whisper"
      >
        เพิ่มสินค้า
      </Link>
    </div>
  );
}

export default SellerMenu;
