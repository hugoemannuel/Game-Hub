import { JSX } from "react";
import { SkeletonBox } from "../SkeletonBox";
import { ITextProps } from "./interface/ITextProps";
import { StyledText } from "./styles";

export default function Text({ children, size = "p", ...rest }: ITextProps) {
  const tag = size.match(/^h[1-6]$/)
    ? (size as keyof JSX.IntrinsicElements)
    : "p";

  if (rest.skeleton) {
    return (
      <SkeletonBox
        width={rest.width || 300}
        height={rest.height || 20}
        {...rest}
      />
    );
  }

  return (
    <StyledText as={tag} size={size} {...rest}>
      {children}
    </StyledText>
  );
}
