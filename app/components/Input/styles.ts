"use client";
import styled from "styled-components";
import IInputProps from "./interface/IInputProps";

export const ContainerInput = styled.div<IInputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "40px")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  background-color: #2c2839;
  border-radius: 15px;
  padding: 15px 15px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: inherit;
  color: inherit;
`;
