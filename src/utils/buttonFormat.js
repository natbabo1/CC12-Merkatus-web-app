import {
  ARRIVED,
  BUYER,
  PAID,
  RATED,
  RECEIVED,
  SELLER,
  TRANSFER
} from "./constaint";

export const orderButton = (role, status) => {
  if (role === BUYER) {
    if (status === PAID) {
      return "รายละเอียด";
    }
    if (status === TRANSFER || status === ARRIVED) {
      return "ยืนยัน";
    }
    if (status === RECEIVED) {
      return "ให้คะแนน";
    }

    return null;
  }
  if (role === SELLER) {
    if (status === PAID) {
      return "ส่งสินค้า";
    }
    if (status === TRANSFER || status === ARRIVED) {
      return "ติดต่อผู้ซื้อ";
    }

    return null;
  }
};
