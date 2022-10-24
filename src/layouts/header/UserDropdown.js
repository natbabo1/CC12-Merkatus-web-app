import { useAuth } from "../../contexts/AuthContext";

import { Link, useNavigate } from "react-router-dom";

function UserDropdown() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className="absolute top-full right-0 bg-cosmic-dust/40 text-vivid-orange text-lg w-40 px-3 mt-3 py-2 rounded-xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <Link
        to="/buying"
        className="block py-2 cursor-pointer hover:text-tin-color"
      >
        สถานะการสั่งซื้อ
      </Link>
      <Link
        to="/selling"
        className="block py-2 cursor-pointer hover:text-tin-color"
      >
        ร้านค้าของฉัน
      </Link>
      <div className="py-2 cursor-pointer hover:text-tin-color">ตั้งค่า</div>
      <div
        className="py-2 cursor-pointer hover:text-tin-color"
        onClick={handleLogout}
      >
        Log out
      </div>
    </div>
  );
}

export default UserDropdown;
