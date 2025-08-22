"use client";

import { useQuery } from "@tanstack/react-query";
import Colum from "./components/Colum";
import GameCard from "./components/GameCard";
import Row from "./components/Row";
import { queryKeys } from "./global/variables/queryKeys";
import gamesService from "./service/gamesService";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.games.list],
    queryFn: gamesService.allGames,
  });

  return (
    <Colum alignItems="flex-start">
      <h1 style={{ marginLeft: "4%", marginBottom: "20px" }}>Novos Jogos !!</h1>

      <Row wrap="wrap" gap={20}>
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <GameCard skeleton width="30%" key={index} image="" />
            ))
          : data?.map((game) => (
              <GameCard width="30%" key={game.id} {...game} />
            ))}
      </Row>
    </Colum>
  );
}
