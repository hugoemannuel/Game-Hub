"use client";
import { BookOpen, Home, Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import {
  CloseButton,
  Header,
  MenuToggle,
  Nav,
  NavItem,
  Overlay,
  SidebarContainer,
  Subtitle,
  Title,
} from "./styles";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    closeSidebar();
  };

  const menuItems = [
    { icon: Home, label: "Inicio" },
    { icon: ShoppingCart, label: "Loja" },
    { icon: BookOpen, label: "Biblioteca" },
    { icon: User, label: "Perfil" },
  ];

  return (
    <>
      <MenuToggle onClick={toggleSidebar}>
        <Menu />
      </MenuToggle>

      <Overlay isOpen={isOpen} onClick={closeSidebar} />

      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={closeSidebar}>
          <X />
        </CloseButton>

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
    </>
  );
};
export default NavBar;
