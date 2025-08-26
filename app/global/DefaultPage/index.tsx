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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHideHeader(pathname?.includes("game") || false);
  }, [pathname]);

  if (!mounted) {
    return (
      <SearchProvider>
        <NavBar />
        <Container $hideHeader={false}>
          <Header />
          <Section>
            <div style={{ minHeight: "200px" }} />
          </Section>
        </Container>
      </SearchProvider>
    );
  }

  return (
    <SearchProvider>
      <NavBar />
      <Container $hideHeader={hideHeader}>
        {!hideHeader && <Header />}
        <Section>{children}</Section>
      </Container>
    </SearchProvider>
  );
}
