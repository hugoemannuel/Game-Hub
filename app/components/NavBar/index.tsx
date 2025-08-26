/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { BookOpen, Home, ShoppingCart, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"; // 👈 mudar aqui
import { useEffect, useState } from "react";
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
  const router = useRouter();
  const pathname = usePathname();

  const handleItemClick = (index: number, href: string) => {
    setActiveItem(index);
    router.push(href);
  };

  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => item.href === pathname);
    if (currentIndex !== -1) {
      setActiveItem(currentIndex);
    }
  }, [pathname]);

  const menuItems = [
    { icon: Home, label: "Inicio", href: "/" },
    { icon: ShoppingCart, label: "Loja", href: "/store" },
    { icon: BookOpen, label: "Biblioteca", href: "/library" },
    { icon: User, label: "Perfil", href: "/profile" },
  ];

  return (
    <SidebarContainer $isOpen={true}>
      <Header>
        <Title>Hugo</Title>
        <Subtitle>Bem vindo de volta</Subtitle>
      </Header>
      <Nav>
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            $active={activeItem === index}
            onClick={() => handleItemClick(index, item.href)}
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
