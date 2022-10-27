import { PAID, RECEIVED, TRANSFER, RATED } from "./constaint";

const listingNameCreate = (filter) => {
  if (filter === PAID) {
    return "สินค้าที่รอการจัดส่ง";
  }
  if (filter === TRANSFER) {
    return "สินค้าที่รอการยืนยัน";
  }
  if (filter === RECEIVED) {
    return "สินค้าที่รอการให้คะแนน";
  }
  if (filter === RATED) {
    return "ประวัติการซื้อสินค้า";
  }
};

const listingNameSeller = (filter) => {
  if (filter === PAID) {
    return "สินค้าที่ต้องจัดส่ง";
  }
  if (filter === TRANSFER) {
    return "สินค้าที่รอการยืนยัน";
  }
  if (filter === RECEIVED) {
    return "สินค้าที่ขายแล้ว";
  }
  if (filter === "ALLPRODUCT") {
    return "รายการสินค้าทั้งหมด";
  }
};

export { listingNameCreate, listingNameSeller };
