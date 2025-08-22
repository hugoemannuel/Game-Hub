import data from "../service/data/data.json";
import { IGame } from "./interface/IGame";
export default function allGames(): Promise<IGame[]> {
  return new Promise<IGame[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1200);
  });
}
