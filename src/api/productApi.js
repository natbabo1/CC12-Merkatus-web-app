import axios from "../config/config";

export const getProductByCategory = (id) =>
  axios.get(`/product?categoryId=${id}`);
export const getProductById = (id) => axios.get(`/product/${id}`);
export const addProduct = (input) => axios.post("/users/product", input);
export const getSuggestProducts = () => axios.get(`/product?limit=50`);

export const getProductBySearch = (search) =>
  axios.get(`/product?productName=${search}`);
