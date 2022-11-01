import axios from "../config/config";

export const login = (input) => axios.post("auth/login", input);
export const register = (input) => axios.post("auth/register", input);
export const getMe = () => axios.get("auth/me");

export const updateAddress = (input) => axios.patch("/users/address", input);
