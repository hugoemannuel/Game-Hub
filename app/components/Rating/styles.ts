import { Star as StarIcon } from "lucide-react";
import styled from "styled-components";

export const StyledStar = styled(StarIcon)<{ filled: boolean }>`
  stroke: ${({ filled }) => (filled ? "white" : "rgba(255, 255, 255, 0.3)")};
  fill: ${({ filled }) => (filled ? "white" : "none")};
`;