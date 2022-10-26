import axios from "../config/config";
import { RECEIVED } from "../utils/constaint";

export const getBuyingOrders = () => axios.get("/users/buying");

export const confirmOrder = (orderId) =>
  axios.patch(`/users/buying/${orderId}`, { status: RECEIVED });
