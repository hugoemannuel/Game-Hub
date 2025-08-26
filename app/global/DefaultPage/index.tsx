"use client";
import Header from "@/app/components/Header";
import NavBar from "@/app/components/NavBar";
import { SearchProvider } from "@/app/context/SearchContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IGlobalPageProps } from "../interface/IGlobalPageProps";
import { Container, Section } from "./styles";

export default function DefaultPage({ children }: IGlobalPageProps) {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    setHideHeader(pathname?.includes("game") || false);
  }, [pathname]);

  return (
    <>
      <SearchProvider>
        <NavBar />
        <Container $hideHeader={hideHeader}>
          {!hideHeader && <Header />}
          <Section>{children}</Section>
        </Container>
      </SearchProvider>
    </>
  );
}
