"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { ReactQueryProvider } from "../lib/providers/react-query";
import GlobalStyle from "./global";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = {
    colors: {
      primary: "#0070f3",
    },
  };

  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
