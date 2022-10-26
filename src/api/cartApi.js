import axios from "../config/config";

export const getMyCart = () => axios.get("users/cart");
