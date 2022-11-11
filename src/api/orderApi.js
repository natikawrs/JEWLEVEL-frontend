import axios from "../config/axios";

export const createOrder = (input, arriteminfo) =>
  axios.post("/order", { orderInfo: input, arriteminfo });

export const getUserOrder = () => axios.get("/order/list");
