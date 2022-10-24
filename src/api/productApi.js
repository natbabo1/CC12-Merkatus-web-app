import axios from "../config/config";

export const getProductByCategory = (id) =>
  axios.get(`/product?categoryId=${id}`);

export const getSuggestProducts = () => axios.get(`/product?limit=50`);
