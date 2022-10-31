import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import LoginForm from "../../features/auth/LoginForm";
import SearchBar from "./SearchBar";
import LogoMerkatus from "../../components/icon/LogoMerkatus";
import ChatIcon from "../../components/icon/ChatIcon";
import KartIcon from "../../components/icon/KartIcon";
import LoginIcon from "../../components/icon/LoginIcon";
import UserDropdown from "./UserDropdown";
import { useAuth } from "../../contexts/AuthContext";
import Avatar from "../../components/ui/Avatar";
import { useCart } from "../../contexts/CartContext";

function Navbar() {
  const { openFormModal } = useModal();
  const { user } = useAuth();
  const { totalCartItems } = useCart();

  const [openDropdown, setOpenDropdown] = useState(false);

  const closeDropdown = useCallback(() => {
    setOpenDropdown(false);
  }, []);

  return (
    <div className="w-screen fixed top-0 left-0 z-30 bg-whisper/80 pb-2">
      <div className="mx-auto max-w-7xl mt-4 px-2 sm:px-6 lg:px-8">
        <nav>
          <div className="relative flex h-20px items-center justify-between">
            <div className="grow flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/" className="w-20 flex items-center">
                <LogoMerkatus />
              </Link>
              <SearchBar />
            </div>
            <div className="flex space-x-4">
              <div className="w-12">
                <ChatIcon />
              </div>
              <Link to="/mycart" className="w-12 relative">
                <KartIcon />
                {totalCartItems > 0 ? (
                  <div className="absolute bg-mermaid-net rounded-full h-6 w-fit px-2 text-center text-white top-0 right-0 translate-x-1/3 -translate-y-1/3">
                    {totalCartItems}
                  </div>
                ) : null}
              </Link>
              {user ? (
                <div
                  className="relative flex items-center cursor-pointer"
                  onClick={() => setOpenDropdown(true)}
                >
                  <div className="w-12 rounded-full overflow-hidden">
                    <Avatar src={user.profileImage} />
                  </div>
                  {openDropdown && (
                    <UserDropdown closeDropdown={closeDropdown} />
                  )}
                </div>
              ) : (
                <div
                  className="w-12 cursor-pointer"
                  onClick={() => openFormModal(<LoginForm />)}
                >
                  <LoginIcon />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
