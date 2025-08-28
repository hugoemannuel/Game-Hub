import ImageNext from "next/image";
import { SkeletonBox } from "../SkeletonBox";
import { IImageProps } from "./interface/IImageProps";

export default function Image(props: IImageProps) {
  const { width, height, skeleton, imageProps } = props;

  if (skeleton) {
    return <SkeletonBox width={width} height={height} borderRadius={8} />;
  }

  return <ImageNext {...imageProps} />;
}
