import { Link } from "react-router-dom";
import LogoMerkatus from "../../components/icon/LogoMerkatus";
import ChatIcon from "../../components/icon/ChatIcon";
import KartIcon from "../../components/icon/KartIcon";
import UserIcon from "../../components/icon/UserIcon";
import SearchBar from "./SearchBar";
import LoginForm from "../../features/auth/LoginForm";
import { useModal } from "../../contexts/ModalContext";

function Navbar() {
  const { openFormModal } = useModal();
  return (
    <div className="w-screen fixed top-0 left-0 z-30 bg-whisper pb-2">
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
              <div
                className="w-12 cursor-pointer"
                onClick={() => openFormModal(<LoginForm />)}
              >
                <UserIcon />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
