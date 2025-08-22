"use client";
import { useSearch } from "@/app/context/SearchContext";
import { Bell, UserCircle } from "lucide-react";
import Input from "../Input";
import {
  HeaderWrapper,
  Notification,
  Profile,
  RightWrapper,
  Title,
} from "./styles";

export default function Header() {
  const { search, setSearch } = useSearch();

  return (
    <HeaderWrapper>
      <Title>Game Hub</Title>
      <RightWrapper>
        <Input
          type="search"
          width={"50%"}
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Notification>
          <Bell />
        </Notification>
        <Profile>
          <UserCircle />
        </Profile>
      </RightWrapper>
    </HeaderWrapper>
  );
}
