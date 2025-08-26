import IComponentsProps from "../../interface/IComponentsProps";

export interface INavigateProps extends IComponentsProps {
  text: string;
  focused?: boolean;
  onClick?: () => void;
}
