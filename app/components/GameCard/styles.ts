"use client";
import Image from "next/image";
import styled from "styled-components";
import Colum from "../Colum";
import Row from "../Row";

export const CardContainer = styled(Colum)`
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  gap: 8px;
  padding: 8px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

export const ImageWrapper = styled(Row)`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  position: relative;

  &:hover img {
    transform: scale(1.15);
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.5s ease;
  transform-origin: center center;
`;
