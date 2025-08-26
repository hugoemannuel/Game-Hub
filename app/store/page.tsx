"use client";
import Colum from "@/app/components/Colum";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import GameCard from "../components/GameCard";
import Pill from "../components/Pill";
import Row from "../components/Row";
import Text from "../components/Text";
import { useSearch } from "../context/SearchContext";
import { queryKeys } from "../global/variables/queryKeys";
import useDebounce from "../hooks/useDebounce";
import gamesService from "../service/gamesService";
import { IGame } from "../service/interface/IGame";

export default function Store() {
  const { search } = useSearch();
  const router = useRouter();

  const searchDebounce = useDebounce(search, 500);

  const { data: allGames, isLoading } = useQuery({
    queryKey: [queryKeys.games.list],
    queryFn: gamesService.allGames,
  });

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: [queryKeys.games.categories],
    queryFn: gamesService.allCategories,
  });

  const featured = useMemo(() => allGames?.slice(0, 3) || [], [allGames]);
  const topPick = useMemo(
    () => allGames?.slice(3, allGames?.length) || [],
    [allGames]
  );
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [filteredFeatured, setFilteredFeatured] = useState<IGame[]>(featured);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!allGames) return;

    setSearchLoading(true);
    const timeout = setTimeout(() => {
      if (!searchDebounce) {
        setFilteredFeatured(featured);
      } else {
        setFilteredFeatured(
          allGames.filter((game) =>
            game.title.toLowerCase().includes(searchDebounce.toLowerCase())
          )
        );
      }
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchDebounce, allGames, featured]);

  const filteredTopPicks = useMemo(() => {
    if (selectedCategory === 0) return topPick;

    const selected = categories?.find((c) => c.id === selectedCategory);
    if (!selected) return topPick;

    return topPick.filter((game) => {
      const gameGenres = game.genre.split(",").map((g) => g.trim());
      return selected.genres.some((catGenre) => gameGenres.includes(catGenre));
    });
  }, [topPick, categories, selectedCategory]);

  const showSkeletonFeatured = isLoading || searchLoading;
  const showSkeletonTopPick = isLoading;
  const showSkeletonCategories = categoriesLoading;

  return (
    <Colum gap={50}>
      <Colum alignItems="flex-start">
        <Text size="h1" style={{ marginBottom: "20px" }}>
          Jogos em destaque
        </Text>
        <Row wrap="wrap" gap={20} justifyContent="flex-start">
          {showSkeletonFeatured
            ? Array.from({ length: 3 }).map((_, index) => (
                <GameCard skeleton width="30%" key={index} image="" />
              ))
            : filteredFeatured.map((game) => (
                <GameCard
                  width="30%"
                  onClick={() => router.push(`/game/${game.id}`)}
                  key={game.id}
                  {...game}
                />
              ))}
        </Row>
      </Colum>

      <Colum alignItems="flex-start">
        <Text size="h1" style={{ marginBottom: "20px" }}>
          Mais jogados
        </Text>
        <Row
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={10}
          width={"50%"}
          wrap="wrap"
          margin={"5px 0px 15px 0px"}
        >
          {showSkeletonCategories
            ? Array.from({ length: 5 }).map((_, index) => (
                <Pill key={index} text="" skeleton />
              ))
            : categories?.map((category) => (
                <Pill
                  key={category.id}
                  text={category.name}
                  focused={category.id === selectedCategory}
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
        </Row>
        <Row wrap="wrap" gap={10} justifyContent="flex-start">
          {showSkeletonTopPick
            ? Array.from({ length: 7 }).map((_, index) => (
                <GameCard skeleton width="15%" key={index} image="" />
              ))
            : filteredTopPicks.map((game) => (
                <GameCard
                  width="18%"
                  key={game.id}
                  image={game.image}
                  title={game.title}
                  onClick={() => router.push(`/game/${game.id}`)}
                />
              ))}
        </Row>
      </Colum>
    </Colum>
  );
}
