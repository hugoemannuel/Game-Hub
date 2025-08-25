import { JSX } from "react";
import { CSSProperties } from "styled-components";
import IComponentsProps from "../../interface/IComponentsProps";
import { sizes } from "../sizes";

export interface ITextProps extends IComponentsProps {
  size?: keyof typeof sizes;
  as?: keyof JSX.IntrinsicElements;
  textAlign?: React.CSSProperties["textAlign"];
  lineHeight?: number;
  children: React.ReactNode;
  style?: CSSProperties;
}
