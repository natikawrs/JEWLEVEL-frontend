import axios from "../config/axios";

export const register = (input) => axios.post("/auth/register", input);
export const login = ({ emailLogin, passwordLogin }) =>
  axios.post("/auth/login", { email: emailLogin, password: passwordLogin });
export const getMe = () => axios.get("/auth/me");
