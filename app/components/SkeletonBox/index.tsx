import { SkeletonBoxProps } from "./interface/ISkeletonBoxProps";
import { StyledSkeletonBox } from "./styles";

export const SkeletonBox = ({
  width = "100%",
  height = "100%",
  borderRadius = "8px",
  style,
}: SkeletonBoxProps) => {
  return (
    <StyledSkeletonBox
      width={width}
      height={height}
      borderRadius={borderRadius}
      style={style}
    />
  );
};
