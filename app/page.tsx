"use client";
import { useQuery } from "react-query";
import { queryKeys } from "./global/variables/queryKeys";
import gamesService from "./service/gamesService";

export default function Home() {
  const { data } = useQuery({
    queryKey: [queryKeys.games.list],
    queryFn: () => gamesService.allGames(),
  });

  console.log(data);

  return <h1>Home</h1>;
}
