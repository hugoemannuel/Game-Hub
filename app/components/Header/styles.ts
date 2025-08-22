"use client";
import styled from "styled-components";
import Row from "../Row";

export const HeaderWrapper = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px;
  background-color: #131118;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Title = styled.h1`
  color: white;
`;

export const RightWrapper = styled(Row)`
  gap: 20px;
  width: 60%;
  justify-content: flex-end;
  align-items: center;
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
`;
