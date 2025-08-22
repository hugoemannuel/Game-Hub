"use client";
import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: #131118;
  color: #ffffff;
  padding: 24px 20px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    width: 100%;
    max-width: 280px;
    z-index: 1001;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #a0a0b3;
  margin: 0;
  font-weight: 400;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.a<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background: ${(props) => (props.active ? "#2C2839" : "transparent")};
  border: ${(props) =>
    props.active ? "1px solid #2C2839" : "1px solid transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }

  svg {
    width: 20px;
    height: 20px;
    opacity: 0.8;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  padding: 12px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #a0a0b3;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }
`;
