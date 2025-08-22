import IComponentsProps from "../../interface/IComponentsProps";

export interface IPillProps extends IComponentsProps {
  focused?: boolean;
  text: string;
  onClick?: () => void;
}
