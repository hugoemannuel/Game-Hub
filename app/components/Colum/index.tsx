import converToCSS from "@/app/helper/converToCSS";
import styled from "styled-components";
import IDefaultContainer from "../interface/IDefaultContainer";

const Colum = styled.div<IDefaultContainer>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => (width ? converToCSS(width) : "100%")};
  height: ${({ height }) => (height ? converToCSS(height) : "auto")};
  margin: ${({ margin }) => (margin ? converToCSS(margin) : "0")};
  position: ${({ position }) => position || "static"};
  bottom: ${({ bottom }) => (bottom ? converToCSS(bottom) : "auto")};
  top: ${({ top }) => (top ? converToCSS(top) : "auto")};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
  background: ${({ background }) => background || "transparent"};
  padding: ${({ padding }) => (padding ? converToCSS(padding) : "0")};
  gap: ${({ gap }) => (gap ? converToCSS(gap) : "0")};
`;

export default Colum;
