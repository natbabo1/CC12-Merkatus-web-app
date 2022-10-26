import { PAID, RECEIVED, TRANSFER, RATED, ARRIVED } from "./constaint";

export default (filter) => {
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
