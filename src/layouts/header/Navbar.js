import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import LoginForm from "../../features/auth/LoginForm";
import SearchBar from "./SearchBar";
import LogoMerkatus from "../../components/icon/LogoMerkatus";
import ChatIcon from "../../components/icon/ChatIcon";
import KartIcon from "../../components/icon/KartIcon";
import UserIcon from "../../components/icon/UserIcon";
import UserDropdown from "./UserDropdown";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { openFormModal } = useModal();
  const { user } = useAuth();

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdown = useRef();

  useEffect(() => {
    const handleClickOutsideDropdown = (e) => {
      if (!dropdown.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
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
              <Link to="/mycart" className="w-12">
                <KartIcon />
              </Link>
              {!user ? (
                <div
                  className="w-12 cursor-pointer"
                  onClick={() => openFormModal(<LoginForm />)}
                >
                  <UserIcon />
                </div>
              ) : (
                <div>{user.firstName}</div>
              )}
              <div
                className="relative flex items-center hover:text-mermaid-net cursor-pointer"
                ref={dropdown}
                onClick={() => setOpenDropdown((prev) => !prev)}
              >
                <i className="fa-solid fa-caret-down -ml-2 text-tin-color " />
                {openDropdown && <UserDropdown />}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
