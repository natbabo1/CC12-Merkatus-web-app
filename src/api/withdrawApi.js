import axios from "../config/config";
import { PENDING } from "../utils/constaint";

export const getRequests = () => axios.get("users/selling/withdraw");

export const createWithdrawalRequest = (amount) =>
  axios.post("/users/selling/withdraw", { amount, status: PENDING });
