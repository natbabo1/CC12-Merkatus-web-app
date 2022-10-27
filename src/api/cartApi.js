import axios from "../config/config";

export const getMyCart = () => axios.get("/users/cart");
export const createCartItem = (productId) =>
  axios.post("/users/cart", { productId });
export const putMyCart = (input) => axios.put("/users/cart", input);
export const deleteCartItem = (input) =>
  axios.delete("/users/cart", { data: input });
