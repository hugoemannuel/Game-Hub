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
  position: relative;
  z-index: 1;
  max-width: 100%;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`;

export const ImageWrapper = styled(Row)`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  position: relative;
  flex-shrink: 0;

  &:hover img {
    transform: scale(1.15);
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.5s ease;
  transform-origin: center center;
  /* Ensure image doesn't break out of container */
  width: 100% !important;
  height: 100% !important;
`;
