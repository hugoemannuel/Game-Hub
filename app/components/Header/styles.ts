"use client";
import styled from "styled-components";
import Row from "../Row";

export const HeaderWrapper = styled(Row)`
  position: fixed;
  top: 0;
  left: 280px;
  right: 0;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 280px);
  padding: 24px;
  background-color: #131118;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.5);
  z-index: 900;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    padding: 16px;
    z-index: 800;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const RightWrapper = styled(Row)`
  gap: 20px;
  width: 60%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
    gap: 12px;
  }

  @media (max-width: 480px) {
    width: 65%;
    gap: 8px;
  }
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2c2839;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

export const Notification = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2839;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;
