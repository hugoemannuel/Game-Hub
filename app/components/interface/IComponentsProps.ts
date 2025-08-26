export default interface IComponentsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  margin?: React.CSSProperties["margin"];
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  skeleton?: boolean;
}
