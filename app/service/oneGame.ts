import data from "../service/data/data.json";
import { IGame } from "./interface/IGame";

export default function oneGame(id: number): Promise<IGame | undefined> {
  return new Promise<IGame | undefined>((resolve) => {
    setTimeout(() => {
      const game = data.find((game) => game.id === id);
      resolve(game);
    }, 1200);
  });
}
