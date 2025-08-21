"use client";
import styled from "styled-components";

const NAVBAR_WIDTH = "280px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${NAVBAR_WIDTH};
  width: calc(100% - ${NAVBAR_WIDTH});
  min-height: 100vh;
  box-sizing: border-box;
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
