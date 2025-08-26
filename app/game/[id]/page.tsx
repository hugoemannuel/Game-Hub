"use client";
import Colum from "@/app/components/Colum";
import Navigate from "@/app/components/Navigate";
import Row from "@/app/components/Row";
import Text from "@/app/components/Text";
import { queryKeys } from "@/app/global/variables/queryKeys";
import gamesService from "@/app/service/gamesService";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Game() {
  const option = ["Visão geral", "Análises"];
  const [focused, setFocused] = useState(option[0]);
  const { id } = useParams();

  const { data: game, isLoading } = useQuery({
    queryKey: [queryKeys.games.details, id],
    queryFn: () => gamesService.oneGame(Number(id)),
  });

  return (
    <Colum width={"100%"} justifyContent="flex-start" alignItems="flex-start">
      <Text skeleton={isLoading} size="h1">
        {game?.title}
      </Text>
      <Row
        margin={"40px 0px 0px 0px"}
        width={"auto"}
        gap={10}
        justifyContent="flex-start"
      >
        {option.map((item, index) => (
          <Navigate
            key={index}
            text={item}
            focused={focused === item}
            skeleton={isLoading}
            onClick={() => setFocused(item)}
          />
        ))}
      </Row>
      {focused === "Visão geral" ? (
        <Colum margin={"40px 0px 0px 0px"}>
          <Colum
            justifyContent="flex-start"
            alignItems="flex-start"
            position="relative"
            width={"100%"}
            alignSelf="flex-start"
            height={"400px"}
          >
            <Image
              src={game?.backImage || ""}
              alt={game?.title || ""}
              fill
              style={{
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Colum>
          <Colum
            alignItems="flex-start"
            alignSelf="flex-start"
            width={"80%"}
            margin={"20px 0px 0px 0px"}
          >
            <Text
              size="h6"
              textAlign="start"
              skeleton={isLoading}
              style={{ fontWeight: "bold", color: "#aaa" }}
            >
              {game?.description}
            </Text>
          </Colum>
        </Colum>
      ) : (
        <p>Análises</p>
      )}
    </Colum>
  );
}
