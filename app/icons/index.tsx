/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { IIConsProps } from "./interface/IIcons";
import { mapIcons } from "./mapIcons";

export default function Icons(props: IIConsProps) {
  const { name, color, ...rest } = props;

  const Icon = useMemo(() => {
    return mapIcons[name] || mapIcons["search"];
  }, [name, color]);
  return <Icon {...rest} color={color} />;
}
