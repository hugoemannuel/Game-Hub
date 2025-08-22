"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const SearchContext = createContext<{
  search: string;
  setSearch: (value: string) => void;
}>({ search: "", setSearch: () => {} });

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
