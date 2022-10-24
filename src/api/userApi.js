import axios from "../config/config";
export const getSellerAndProducts = (id) => axios.get(`/seller/${id}`);
