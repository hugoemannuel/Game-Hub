import { IQueryFormatterProps } from "../interface/IQueryFormatterProps";

export default function queryFormatter({
  route,
  querys = {},
}: IQueryFormatterProps): string {
  let url = "https://www.freetogame.com/api" + route;

  if (querys) {
    const keys = Object.keys(querys);
    if (keys.length > 0) {
      url += "?";
      let queryStringAdded = false;
      keys.forEach((key, index) => {
        const value = querys[key as keyof typeof querys];
        if (value === undefined || value === "" || value === null) {
          return; // Ignora a query se não tiver valor
        }
        if (queryStringAdded) {
          url += "&";
        } else {
          queryStringAdded = true;
        }
        url += key + "=" + encodeURIComponent(value);
      });
    }
  }
  return url;
}
