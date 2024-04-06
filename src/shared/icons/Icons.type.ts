import { ComponentPropsWithoutRef } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  width?: string;
  height?: string;
  fill?: string;
}
