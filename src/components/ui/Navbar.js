import React from "react";
import LogoMerkatus from "../icon/LogoMerkatus";
import ChatIcon from "../icon/ChatIcon";
import KartIcon from "../icon/KartIcon";
import UserIcon from "../icon/UserIcon";
import SearchBar from "../SearchBar";

function Navbar() {
  return (
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
  );
}

export default Navbar;
