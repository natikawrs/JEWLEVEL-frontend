import axios from "../config/axios";

export const createCartApi = (productId, quantity) =>
  axios.post("/cart", { productId, quantity });

export const getCartApi = () => axios.get("/cart/list");

export const deleteCartItemApi = (cartId) => axios.delete(`/cart/${cartId}`);

export const clearCartApi = () => axios.delete("users/cart");

export const updateCartApi = (cartItem) => axios.patch("users/cart/", cartItem);

export const getTotalPriceApi = () => axios.get("/cart/totalPrice");
