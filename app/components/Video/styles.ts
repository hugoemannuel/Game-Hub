import styled from "styled-components";
import Colum from "../Colum";
import Row from "../Row";

export const Container = styled(Colum)`
 position: relative;
 width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "0"};
  padding-bottom: ${({ height }) => (height ? "0" : "56.25%")};
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
`;

export const PlayButton = styled(Row)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }
`;
