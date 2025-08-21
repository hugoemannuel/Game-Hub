"use client";
import { Search } from "lucide-react";
import Row from "../Row";
import IInputProps from "./interface/IInputProps";
import { ContainerInput, StyledInput } from "./styles";

export default function Input(props: IInputProps) {
  const { type, placeholder, value, onChange, ...rest } = props;

  return (
    <ContainerInput {...rest}>
      <Row width="100%" alignItems="center" gap={10}>
        {type === "search" && <Search />}
        <StyledInput
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Row>
    </ContainerInput>
  );
}
