import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const StyledSkeletonBox = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["width", "height", "borderRadius"].includes(prop),
})<{
  width: string | number;
  height: string | number;
  borderRadius: string | number;
}>`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius};
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200px 100%;
  animation: ${shine} 1.5s infinite linear;
`;
