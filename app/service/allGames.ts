import api from "../lib/Axios/api";
import queryFormatter from "./utils/queryFormatter";

export default async function allGames() {
  const URL = queryFormatter({ route: "games", querys: {} });
  try {
    const response = await api.get(URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
  }
}
