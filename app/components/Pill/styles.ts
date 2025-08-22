"use client";

import converToCSS from "@/app/helper/converToCSS";
import styled from "styled-components";
import Colum from "../Colum";
import { IPillProps } from "./interface/IPillProps";

export const Container = styled(Colum)<IPillProps>`
  background: ${({ focused }) =>
    focused ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "#2c2839"};
  align-items: center;
  width: ${({ width }) => (width ? converToCSS(width) : "auto")};
  padding: 8px 10px;
  border-radius: 15px;
  border-width: ${({ focused }) => (focused ? 0 : 1)}px;
  border-color: ${({ focused }) => (!focused ? "red" : "transparent")};
  margin: ${({ margin }) => margin ?? "0px"};
  height: ${({ height }) => (height ? converToCSS(height) : "auto")};
  cursor: pointer;
`;
