import LogoMerkatus from '../../components/icon/LogoMerkatus';
import ChatIcon from '../../components/icon/ChatIcon';
import KartIcon from '../../components/icon/KartIcon';
import UserIcon from '../../components/icon/UserIcon';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <div className="w-screen fixed top-0 left-0 z-30 bg-whisper pb-2">
      <div className="mx-auto max-w-7xl mt-4 px-2 sm:px-6 lg:px-8">
        <nav>
          <div className="relative flex h-20px items-center justify-between">
            <div className="grow flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="w-20 flex items-center">
                <LogoMerkatus />
              </div>
              <SearchBar />
            </div>
            <div className="flex space-x-4">
              <div className="w-12">
                <ChatIcon />
              </div>
              <div className="w-12">
                <KartIcon />
              </div>
              <div className="w-12">
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
