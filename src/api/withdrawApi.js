import axios from "../config/config";
import { ACCEPTED, PENDING, REJECTED } from "../utils/constaint";

export const getRequests = () => axios.get("users/selling/withdraw");

export const createWithdrawalRequest = (amount) =>
  axios.post("/users/selling/withdraw", { amount, status: PENDING });

export const getAllRequests = () => axios.get("admin/withdraw");

export const acceptRequest = (requestId) =>
  axios.patch(`admin/withdraw/${requestId}/accept`, { status: ACCEPTED });

export const completeRequest = (requestId, formData) =>
  axios.patch(`admin/withdraw/${requestId}/complete`, formData);

export const rejectRequest = (requestId, detail) =>
  axios.patch(`admin/withdraw/${requestId}/reject`, {
    detail,
    status: REJECTED
  });
