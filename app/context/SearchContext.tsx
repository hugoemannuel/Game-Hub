"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const SearchContext = createContext<{
  search: string;
  setSearch: (value: string) => void;
}>({ search: "", setSearch: () => {} });

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setSearch("");
  }, [pathname]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
