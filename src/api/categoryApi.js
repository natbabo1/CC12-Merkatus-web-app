import axios from "../config/config";

export const getAllCategory = () => axios.get("/category");
export const getAllProduct = () => axios.get("/product");
