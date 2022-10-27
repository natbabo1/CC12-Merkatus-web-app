import { toBaht } from "../../utils/numberFormat";

function DashboardGroup({ wallet, ordersToSent, waitingOrders, totalOrders }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>รายรับของฉัน</h2>
        <h3 className="text-3xl font-semibold">{toBaht(wallet)}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>ที่ต้องจัดส่ง</h2>
        <h3 className="text-3xl font-semibold">{ordersToSent}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>ที่รอยืนยัน</h2>
        <h3 className="text-3xl font-semibold">{waitingOrders}</h3>
      </div>
      <div className="flex flex-col items-center justify-center text-white gap-3 grow-[2] h-40 rounded-xl bg-vivid-orange">
        <h2>สินค้าที่ขายแล้ว</h2>
        <h3 className="text-3xl font-semibold">{totalOrders}</h3>
      </div>
    </>
  );
}

export default DashboardGroup;
