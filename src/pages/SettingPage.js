import React from "react";

import { Link } from "react-router-dom";

function SettingPage() {
  return (
    <div className="w-full flex flex-col items-center mt-80 text-center text-vivid-orange text-3xl">
      <Link
        to="/password"
        className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer hover:text-mermaid-net"
      >
        <h1>เปลี่ยนรหัสผ่าน</h1>
        <h1 className="">{">"}</h1>
      </Link>
      <Link
        to="/email"
        className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer hover:text-mermaid-net"
      >
        <h1>เปลี่ยนอีเมล์</h1>
        <h1 className="">{">"}</h1>
      </Link>
      <Link
        to=""
        className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer  hover:text-mermaid-net"
      >
        <h1 className="">เปลี่ยนเบอร์โทรศัพท์</h1>
        <h1 className="">{">"}</h1>
      </Link>
      <Link
        to=""
        className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer hover:text-mermaid-net"
      >
        <h1>ที่อยู่ของฉัน</h1>
        <h1 className="">{">"}</h1>
      </Link>
    </div>
  );
}

export default SettingPage;
