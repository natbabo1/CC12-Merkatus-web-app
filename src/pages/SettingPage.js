import React from "react";

import { Link } from "react-router-dom";

function SettingPage() {
  return (
    <div className="w-full flex flex-col items-center mt-80 text-center text-vivid-orange text-3xl">
      <div className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer hover:text-mermaid-net">
        <Link to="/password" className="">
          เปลี่ยนรหัสผ่าน
        </Link>
        <h1 className="">{">"}</h1>
      </div>
      <div className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer hover:text-mermaid-net">
        <Link to="/email" className="">
          เปลี่ยนอีเมล์
        </Link>
        <h1 className="">{">"}</h1>
      </div>
      <div className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer  hover:text-mermaid-net">
        <h1 className="">เปลี่ยนเบอร์โทรศัพท์</h1>
        <h1 className="">{">"}</h1>
      </div>
      <div className="flex justify-between items-center px-3 w-full max-w-xl h-20 cursor-pointer hover:text-mermaid-net">
        <h1>ที่อยู่ของฉัน</h1>
        <h1 className="">{">"}</h1>
      </div>
    </div>
  );
}

export default SettingPage;
