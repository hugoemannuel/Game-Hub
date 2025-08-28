/* eslint-disable jsx-a11y/alt-text */
"use client";
import Colum from "@/app/components/Colum";
import Image from "@/app/components/Image";
import Rating from "@/app/components/Rating";
import Row from "@/app/components/Row";
import { SkeletonBox } from "@/app/components/SkeletonBox";
import Text from "@/app/components/Text";
import Video from "@/app/components/Video";
import { queryKeys } from "@/app/global/variables/queryKeys";
import gamesService from "@/app/service/gamesService";
import { formatDate } from "@/app/utils/formatDate";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Game() {
  const { id } = useParams();

  const { data: game, isLoading } = useQuery({
    queryKey: [queryKeys.games.details, id],
    queryFn: () => gamesService.oneGame(Number(id)),
  });

  const renderSkeletonReview = () => {
    return (
      <Colum alignItems="flex-start" gap={20}>
        <SkeletonBox width={"15%"} height={40} />
        <SkeletonBox width={"15%"} height={40} />
      </Colum>
    );
  };

  return (
    <Colum width={"100%"} justifyContent="flex-start" alignItems="flex-start">
      <Text skeleton={isLoading} size="h1">
        {game?.title}
      </Text>

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
            imageProps={{
              src: game?.backImage || "",
              alt: game?.title || "",
              fill: true,
              style: {
                objectFit: "cover",
                borderRadius: "8px",
              },
            }}
            skeleton={isLoading}
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
        <Row justifyContent="space-between">
          <Colum alignItems="flex-start" margin={"50px 0px 0px 0px"}>
            <Text skeleton={isLoading} size="h3">
              Trailer
            </Text>
            <Colum
              margin={"30px 0px 0px 0px"}
              alignItems="flex-start"
              width={"auto"}
            >
              <Video
                videoId={game?.trailer || ""}
                width={640}
                height={360}
                skeleton={isLoading}
              />
            </Colum>
          </Colum>
        </Row>

        <Colum alignItems="flex-start" margin={"50px 0px 0px 0px"}>
          <Text skeleton={isLoading} size="h3">
            Análises
          </Text>
        </Colum>
        <Colum gap={20}>
          {isLoading && (
            <Colum margin={"20px 0px 0px 0px"}>{renderSkeletonReview()}</Colum>
          )}
          {game?.reviews.map((review, index) => (
            <Colum alignItems="flex-start" key={index}>
              <Row alignItems="flex-end" gap={10}>
                <Image
                  imageProps={{
                    src: review.avatar,
                    alt: review.name,
                    width: 45,
                    height: 45,
                    style: {
                      objectFit: "cover",
                      borderRadius: "50%",
                    },
                  }}
                />
                <Row>
                  <Colum
                    gap={5}
                    alignItems="flex-start"
                    margin={"20px 0px 0px 0px"}
                  >
                    <Text size="h4">{review.name}</Text>
                    <Text
                      size="h6"
                      textAlign="start"
                      skeleton={isLoading}
                      style={{ fontWeight: "bold", color: "#aaa" }}
                    >
                      {formatDate(review.date)}
                    </Text>
                  </Colum>
                </Row>
              </Row>
              <Colum margin={"20px 0px 0px 0px"} alignItems="flex-start">
                <Rating width={"auto"} size={15} rating={review.rating} />
              </Colum>
              <Text
                size="h6"
                textAlign="start"
                skeleton={isLoading}
                style={{ fontWeight: "bold", color: "#aaa" }}
                margin={"15px 0px 0px 0px"}
              >
                {review.review}
              </Text>
            </Colum>
          ))}
        </Colum>
      </Colum>
    </Colum>
  );
}
