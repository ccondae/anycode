import { IconProps } from "./Icons.type";
import { Logo } from "./header/Logo";
import { Like } from "./main/Like";
import { Review } from "./main/Review";
import { View } from "./main/View";
import { Crown } from "./main/crown";

export const TemplateIcon = ({ width, height, fill, viewBox, d }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={d} fill={fill} />
    </svg>
  );
};

export const Icon = {
  Logo,
  Review,
  View,
  Like,
  Crown,
};
