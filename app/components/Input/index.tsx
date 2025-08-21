"use client";
import Icons from "@/app/icons";
import Row from "../Row";
import IInputProps from "./interface/IInputProps";
import { ContainerInput, StyledInput } from "./styles";

export default function Input(props: IInputProps) {
  const { type, placeholder, value, onChange, ...rest } = props;

  return (
    <ContainerInput {...rest}>
      <Row width="100%" alignItems="center" gap={10}>
        {type === "search" && <Icons name="search" color="#847E98" size={30} />}
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
