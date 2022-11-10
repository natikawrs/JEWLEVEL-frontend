import axios from "../config/axios";

export const getAllProducts = () => axios.get("/product");
export const getProduct = (productId) => axios.get(`/product/${productId}/`);
export const getUserWishList = () => axios.get("/product/getwishlist");
export const toggleWishList = (productId) =>
  axios.post("/product/togglewishlist", { productId });
