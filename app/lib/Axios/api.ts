import axios from "axios";

const api = axios.create({
  baseURL: "urr/nao/existe/ainda",
});

export default api;
