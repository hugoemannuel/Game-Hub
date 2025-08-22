import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import { SearchProvider } from "@/app/context/SearchContext";
import { IGlobalPageProps } from "../interface/IGlobalPageProps";
import { Container, Section } from "./styles";

export default function DefaultPage({ children }: IGlobalPageProps) {
  return (
    <>
      <SearchProvider>
        <NavBar />
        <Container>
          <Header />
          <Section>{children}</Section>
        </Container>
      </SearchProvider>
    </>
  );
}
