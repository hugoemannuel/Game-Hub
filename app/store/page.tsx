"use client";
import Colum from "@/app/components/Colum";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import GameCard from "../components/GameCard";
import Row from "../components/Row";
import { useSearch } from "../context/SearchContext";
import { queryKeys } from "../global/variables/queryKeys";
import useDebounce from "../hooks/useDebounce";
import gamesService from "../service/gamesService";
import { IGame } from "../service/interface/IGame";

export default function Store() {
  const { search } = useSearch();
  const searchDebounce = useDebounce(search, 500);

  const { data: allGames, isLoading } = useQuery({
    queryKey: [queryKeys.games.list],
    queryFn: gamesService.allGames,
  });

  const featured = useMemo(() => allGames?.slice(0, 3) || [], [allGames]);
  const topPick = useMemo(
    () => allGames?.slice(3, allGames?.length) || [],
    [allGames]
  );

  const [filteredFeatured, setFilteredFeatured] = useState<IGame[]>(featured);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!featured) return;

    setSearchLoading(true);
    const timeout = setTimeout(() => {
      if (!searchDebounce) {
        setFilteredFeatured(featured);
      } else {
        setFilteredFeatured(
          featured.filter((game) =>
            game.title.toLowerCase().includes(searchDebounce.toLowerCase())
          )
        );
      }
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchDebounce, featured]);

  const showSkeletonFeatured = isLoading || searchLoading;
  const showSkeletonTopPick = isLoading;

  return (
    <Colum gap={50}>
      <Colum alignItems="flex-start">
        <h1 style={{ marginBottom: "20px" }}>Jogos em destaque</h1>
        <Row wrap="wrap" gap={20} justifyContent="flex-start">
          {showSkeletonFeatured
            ? Array.from({ length: 3 }).map((_, index) => (
                <GameCard skeleton width="30%" key={index} image="" />
              ))
            : filteredFeatured.map((game) => (
                <GameCard width="30%" key={game.id} {...game} />
              ))}
        </Row>
      </Colum>

      <Colum alignItems="flex-start">
        <h1 style={{ marginBottom: "20px" }}>Mais jogados</h1>
        <Row wrap="wrap" gap={10} justifyContent="flex-start">
          {showSkeletonTopPick
            ? Array.from({ length: 7 }).map((_, index) => (
                <GameCard skeleton width="15%" key={index} image="" />
              ))
            : topPick.map((game) => (
                <GameCard
                  width="15%"
                  key={game.id}
                  image={game.image}
                  title={game.title}
                />
              ))}
        </Row>
      </Colum>
    </Colum>
  );
}
