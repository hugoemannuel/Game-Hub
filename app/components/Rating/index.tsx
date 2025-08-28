import Row from "../Row";
import { SkeletonBox } from "../SkeletonBox";
import { IRatingProps } from "./interface/IRatingProps";
import { StyledStar } from "./styles";

export default function Rating(props: IRatingProps) {
  const { rating, max = 5, size = 24, ...rowProps } = props;

  if (props.skeleton) {
    return (
      <Row {...rowProps} style={{ gap: 4 }}>
        {Array.from({ length: max }, (_, index) => (
          <SkeletonBox
            key={index}
            width={size}
            height={size}
            borderRadius="50%"
          />
        ))}
      </Row>
    );
  }

  return (
    <Row {...rowProps}>
      {Array.from({ length: max }, (_, index) => (
        <StyledStar key={index} filled={index < rating} size={size} />
      ))}
    </Row>
  );
}
