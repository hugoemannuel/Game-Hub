import data from "../service/data/categories.json";
import { ICategory } from "./interface/ICategory";

export default function allCategories(): Promise<ICategory[]> {
  return new Promise<ICategory[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1200);
  });
}
