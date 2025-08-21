import Input from "../Input";
import Row from "../Row";

export default function Header() {
  return (
    <Row margin={"30px 0px 0px 0px "} width={"50%"}>
      <h2>GameHub</h2>
      <Row>
        <Input type="search" width={"50%"} placeholder="Pesquisar" />
      </Row>
    </Row>
  );
}
