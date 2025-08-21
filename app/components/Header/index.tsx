import Input from "../Input";
import {
  HeaderWrapper,
  Notification,
  Profile,
  RightWrapper,
  Title,
} from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>MuSteam</Title>
      <RightWrapper>
        <Input type="search" width={"50%"} placeholder="Pesquisar" />
        <Notification />
        <Profile />
      </RightWrapper>
    </HeaderWrapper>
  );
}
