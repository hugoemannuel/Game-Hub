import { mapIcons } from "../mapIcons";
import { IDefaultIconsProps } from "./IDefaultIconProps";

type IconName = keyof typeof mapIcons;

export interface IIConsProps extends IDefaultIconsProps {
  name: IconName;
}
