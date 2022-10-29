import axios from "../config/config";
import { RECEIVED } from "../utils/constaint";

export const getBuyingOrders = () => axios.get("/users/buying");

export const getSellingOrders = () => axios.get("/users/selling");

export const makingPurchase = (input) =>
  axios.post("/users/buying/checkout", input);

export const confirmOrder = (orderId) =>
  axios.patch(`/users/buying/${orderId}`, { status: RECEIVED });

export const addTrackingNo = (orderId, data) =>
  axios.patch(`/users/selling/${orderId}`, data);
