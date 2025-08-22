import Row from "../Row";
import { SkeletonBox } from "../SkeletonBox";
import { IPillProps } from "./interface/IPillProps";
import { Container } from "./styles";

export default function Pill(props: IPillProps) {
  if (props.skeleton) {
    return (
      <SkeletonBox
        borderRadius={15}
        height={"25px"}
        width={"80px"}
        {...props}
      />
    );
  }

  return (
    <Container {...props}>
      <Row
        gap={5}
        justifyContent="space-between"
        alignItems="center"
        width={"auto"}
        style={{ minWidth: "10%" }}
      >
        {props.text}
      </Row>
    </Container>
  );
}
