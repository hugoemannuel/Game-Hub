/* eslint-disable import/no-anonymous-default-export */
import allCategories from "./allCategories";
import allGames from "./allGames";
import oneGame from "./oneGame";

class gameService {
  allGames = allGames;
  allCategories = allCategories;
  oneGame = oneGame;
}

export default new gameService();
