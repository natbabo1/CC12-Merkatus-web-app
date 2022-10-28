import React from "react";

function AdminMenu() {
  return (
    <div className="basis-33 flex flex-col justify-evenly mx-5">
      <button className="text-sm font-bold py-1 px-3 border-[3px] border-vivid-orange rounded-lg hover:bg-vivid-orange hover:text-whisper">
        การจัดการผู้ใช้งาน
      </button>
      <button className="text-sm font-bold py-1 px-3 border-[3px] border-vivid-orange rounded-lg hover:bg-vivid-orange hover:text-whisper">
        การจัดการสินค้า
      </button>
    </div>
  );
}

export default AdminMenu;
