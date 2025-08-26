import Colum from "../Colum";
import Row from "../Row";
import { SkeletonBox } from "../SkeletonBox";
import Text from "../Text";
import { sizes } from "../Text/sizes";
import { INavigateProps } from "./interface/INavigateProps";

export default function Navigate(props: INavigateProps) {
  const textSize = sizes.h5;
  const lineWidth = textSize + 90;

  if (props.skeleton) {
    return <SkeletonBox width={lineWidth} height={10} />;
  }

  return (
    <Colum
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      alignItems="center"
      gap={5}
      {...props}
    >
      <Text size="h5">{props.text}</Text>
      <Row
        width={`${lineWidth}px`}
        height={1}
        background={props.focused ? "white" : "#2C2839"}
      />
    </Colum>
  );
}
