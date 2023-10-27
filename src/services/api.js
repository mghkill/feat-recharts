import axios from "axios";

const api = axios.create({
  baseURL: "https://api.prediza.io/api",
});

export default api;
