import Colum from "../Colum";
import { SkeletonBox } from "../SkeletonBox";
import { IGameCardProps } from "./interface/IGameCardProps";
import { CardContainer, CardImage, ImageWrapper } from "./styles";

export default function GameCard(props: IGameCardProps) {
  if (props.skeleton) {
    return <SkeletonBox height={200} borderRadius={16} {...props} />;
  }

  return (
    <CardContainer justifyContent="flex-start" {...props}>
      <ImageWrapper>
        <CardImage src={props.image} alt={props.title || "Game Card"} fill />
      </ImageWrapper>

      <Colum alignItems="flex-start" gap={10}>
        {props.title && <h3 style={{ margin: 0 }}>{props.title}</h3>}
        {props.description && (
          <p style={{ margin: 0, color: "#aaa", fontSize: "0.875rem" }}>
            {props.description}
          </p>
        )}
      </Colum>
    </CardContainer>
  );
}
