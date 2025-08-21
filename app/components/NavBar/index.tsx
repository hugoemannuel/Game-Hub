"use client";
import { BookOpen, Home, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import {
  Header,
  Nav,
  NavItem,
  SidebarContainer,
  Subtitle,
  Title,
} from "./styles";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  const menuItems = [
    { icon: Home, label: "Inicio" },
    { icon: ShoppingCart, label: "Loja" },
    { icon: BookOpen, label: "Biblioteca" },
    { icon: User, label: "Perfil" },
  ];

  return (
    <SidebarContainer isOpen={true}>
      <Header>
        <Title>Hugo</Title>
        <Subtitle>Bem vindo de volta</Subtitle>
      </Header>

      <Nav>
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            active={activeItem === index}
            onClick={() => handleItemClick(index)}
          >
            <item.icon />
            {item.label}
          </NavItem>
        ))}
      </Nav>
    </SidebarContainer>
  );
};

export default NavBar;
