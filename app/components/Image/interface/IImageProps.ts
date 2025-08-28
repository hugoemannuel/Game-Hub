import type { ImageProps } from "next/image";
import IComponentsProps from "../../interface/IComponentsProps";

export interface IImageProps extends IComponentsProps {
  imageProps: ImageProps; 
}
