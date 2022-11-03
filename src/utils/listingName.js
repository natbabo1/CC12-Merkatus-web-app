import {
  PAID,
  RECEIVED,
  TRANSFER,
  RATED,
  PENDING,
  ACCEPTED,
  REJECTED,
  COMPLETED
} from "./constaint";

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

const listingNameAdmin = (filter) => {
  if (filter === PENDING) {
    return "คำขอถอนเงิน";
  }
  if (filter === ACCEPTED) {
    return "ที่กำลังดำเนินการ";
  }
  if (filter === REJECTED) {
    return "ที่ถูกปฏิเสธ";
  }
  if (filter === COMPLETED) {
    return "ที่เสร็จสิ้น";
  }
};

export { listingNameCreate, listingNameSeller, listingNameAdmin };
