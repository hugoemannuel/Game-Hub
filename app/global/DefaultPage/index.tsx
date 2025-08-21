import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import { IGlobalPageProps } from "../interface/IGlobalPageProps";
import { Container, Section } from "./styles";

export default function DefaultPage({ children }: IGlobalPageProps) {
  return (
    <>
      <NavBar />
      <Container>
        <Header />
        <Section>{children}</Section>
      </Container>
    </>
  );
}
