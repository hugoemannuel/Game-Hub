import Image from "next/image";
import Colum from "../Colum";
import Row from "../Row";
import { SkeletonBox } from "../SkeletonBox";
import { IGameCardProps } from "./interface/IGameCardProps";

export default function GameCard(props: IGameCardProps) {
  if (props.skeleton) {
    return <SkeletonBox height={200} borderRadius={16} {...props} />;
  }

  return (
    <Colum
      justifyContent="flex-start"
      gap={8}
      padding={"8px"}
      style={{
        borderRadius: "20px",
        overflow: "hidden",
      }}
      {...props}
    >
      <Row
        width={"100%"}
        height={"200px"}
        position="relative"
        style={{
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Image
          src={props.image}
          alt={props.title || "Game Card"}
          fill
          style={{ objectFit: "cover" }}
        />
      </Row>

      <Colum alignItems="flex-start" gap={10}>
        <h3>{props.title}</h3>
        {props.description && (
          <p style={{ margin: 0, color: "#aaa", fontSize: "0.875rem" }}>
            {props.description}
          </p>
        )}
      </Colum>
    </Colum>
  );
}
