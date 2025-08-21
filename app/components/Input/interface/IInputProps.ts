import IComponentsProps from "../../interface/IComponentsProps";

type InputType = "search" | "text";

export default interface IInputProps extends IComponentsProps {
  placeholder?: string;
  type?: InputType;
  value?: string;
  onChange?: () => void;
}
