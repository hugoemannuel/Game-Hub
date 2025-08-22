/* eslint-disable import/no-anonymous-default-export */
import allCategories from "./allCategories";
import allGames from "./allGames";

class gameService {
  allGames = allGames;
  allCategories = allCategories;
}

export default new gameService();
