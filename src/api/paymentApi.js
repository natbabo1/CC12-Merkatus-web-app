import axios from "../config/config";

export const payment = (input) => axios.post("/payment", input);
