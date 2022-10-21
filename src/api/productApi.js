import axios from "../config/config";

export const getProductByCategory = (id) =>
  axios.get(`/product?categoryId=${id}`);
