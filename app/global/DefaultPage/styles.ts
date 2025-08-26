"use client";
import styled from "styled-components";

const NAVBAR_WIDTH = "280px";

export const Container = styled.div<{ $hideHeader?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: ${NAVBAR_WIDTH};
  width: calc(100% - ${NAVBAR_WIDTH});
  min-height: 100vh;
  padding-top: ${({ $hideHeader }) => ($hideHeader ? "0" : "96px")};
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding-top: 80px;
  }
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;
