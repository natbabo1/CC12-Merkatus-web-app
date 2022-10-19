function DashboardGroup() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>รายรับของฉัน</h2>
        <h3 className="text-3xl font-semibold">฿ 20,000</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>ที่ต้องจัดส่ง</h2>
        <h3 className="text-3xl font-semibold">5</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>ที่ถูกยกเลิก</h2>
        <h3 className="text-3xl font-semibold">0</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>ที่คืนเงิน/สินค้า</h2>
        <h3 className="text-3xl font-semibold">0</h3>
      </div>
    </>
  );
}

export default DashboardGroup;
