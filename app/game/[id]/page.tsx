"use client";
import Colum from "@/app/components/Colum";
import { queryKeys } from "@/app/global/variables/queryKeys";
import gamesService from "@/app/service/gamesService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Game() {
  const { id } = useParams();

  const { data: game, isLoading } = useQuery({
    queryKey: [queryKeys.games.details, id],
    queryFn: () => gamesService.oneGame(Number(id)),
  });

  return (
    <Colum alignItems="flex-start">
      <h1>{game?.title}</h1>
    </Colum>
  );
}
