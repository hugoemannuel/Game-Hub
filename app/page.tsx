"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Colum from "./components/Colum";
import GameCard from "./components/GameCard";
import Row from "./components/Row";
import Text from "./components/Text";
import { useSearch } from "./context/SearchContext";
import { queryKeys } from "./global/variables/queryKeys";
import useDebounce from "./hooks/useDebounce";
import gamesService from "./service/gamesService";
import { IGame } from "./service/interface/IGame";

export default function Home() {
  const { search } = useSearch();
  const router = useRouter();
  const searchDebounce = useDebounce(search, 500);
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.games.list],
    queryFn: gamesService.allGames,
  });

  const [filtered, setFiltered] = useState<IGame[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!data) return;
    setSearchLoading(true);
    const timeout = setTimeout(() => {
      const games = data.filter((game) =>
        game.title.toLowerCase().includes(searchDebounce.toLowerCase())
      );
      setFiltered(games);
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchDebounce, data]);

  const isSkeleton = isLoading || searchLoading;

  return (
    <Colum alignItems="flex-start">
      <Text size="h1" style={{ marginBottom: "20px" }}>
        Novos jogos
      </Text>
      <Row wrap="wrap" gap={20} justifyContent="flex-start">
        {isSkeleton
          ? Array.from({ length: 9 }).map((_, index) => (
              <GameCard skeleton width="30%" key={index} image="" />
            ))
          : filtered.map((game) => (
              <GameCard
                onClick={() => router.push(`/game/${game.id}`)}
                width="30%"
                key={game.id}
                {...game}
              />
            ))}
      </Row>
    </Colum>
  );
}
