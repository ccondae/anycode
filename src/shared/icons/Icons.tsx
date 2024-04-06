import { IconProps } from "./Icons.type";
import { Logo } from "./header/Logo";
import { Like } from "./main/Like";
import { Review } from "./main/Review";
import { View } from "./main/View";

export const TemplateIcon = ({ width, height, fill }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="current" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="current" fill={fill} />
    </svg>
  );
};

export const Icon = {
  Logo,
  Review,
  View,
  Like,
};
