import styled from "styled-components";
import { ITextProps } from "./interface/ITextProps";
import { sizes } from "./sizes";

export const StyledText = styled.h1<ITextProps>`
  color: ${({ color }) => color || "white"};
  font-size: ${({ size }) => (size ? sizes[size] : sizes.p)}px;
  ${({ lineHeight }) => (lineHeight ? `line-height:${lineHeight}px;` : "")}
  ${({ textAlign }) => (textAlign ? `text-align:${textAlign};` : "")}
  ${({ margin }) => margin && `margin:${margin}`};
`;
