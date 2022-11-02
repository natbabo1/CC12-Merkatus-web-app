import { useModal } from "../../contexts/ModalContext";
import WithdrawForm from "./WithdrawForm";
import { toBaht } from "../../utils/numberFormat";

function DashboardGroup({ wallet, ordersToSent, waitingOrders }) {
  const { openFormModal } = useModal();

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
      <div
        className="flex flex-col items-center justify-center gap-3 grow-[2] h-40 rounded-xl border-4 border-vivid-orange text-vivid-orange hover:bg-mermaid-net hover:border-blue-shale hover:text-white cursor-pointer"
        onClick={() => openFormModal(<WithdrawForm />)}
      >
        <h2 className="text-xl">ถอนเงิน</h2>
        <i className="fa-solid fa-hand-holding-dollar text-5xl "></i>
      </div>
    </>
  );
}

export default DashboardGroup;
