import React from "react";

function AdminDashboardGroup({ pending, accepted, rejected, completed }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] w-20 h-40 rounded-xl bg-vivid-orange">
        <h2>คำขอถอนเงิน</h2>
        <h3 className="text-3xl font-semibold">{pending}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] w-20 h-40 rounded-xl bg-vivid-orange">
        <h2>ที่กำลังดำเนินการ</h2>
        <h3 className="text-3xl font-semibold">{accepted}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] w-20 h-40 rounded-xl bg-vivid-orange">
        <h2>ที่ถูกปฏิเสธ</h2>
        <h3 className="text-3xl font-semibold">{rejected}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] w-20 h-40 rounded-xl bg-vivid-orange">
        <h2>ที่เสร็จสิ้น</h2>
        <h3 className="text-3xl font-semibold">{completed}</h3>
      </div>
    </>
  );
}

export default AdminDashboardGroup;
