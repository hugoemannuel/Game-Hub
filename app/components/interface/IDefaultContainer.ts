import IComponentsProps from "./IComponentsProps";

export default interface IDefaultContainer extends IComponentsProps {
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  alignSelf?: React.CSSProperties["alignSelf"];
  flex?: React.CSSProperties["flex"];
  wrap?: React.CSSProperties["flexWrap"];
  position?: React.CSSProperties["position"];
  bottom?: React.CSSProperties["bottom"];
  top?: React.CSSProperties["top"];
  background?: React.CSSProperties["background"];
  padding?: React.CSSProperties["padding"];
  gap?: React.CSSProperties["gap"];
}
