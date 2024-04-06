import { TemplateIcon } from "../Icons";
import { IconProps } from "../Icons.type";

export const Review = ({ width = "21", height = "20", fill = "#F9B05B" }: IconProps) => {
  return (
    <TemplateIcon
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill={fill}
      d="M10.8313 0.811035C5.30112 0.811035 0.852051 4.89512 0.852051 9.97939C0.852051 11.6047 1.30943 13.105 2.09945 14.4802C2.18261 14.6469 2.22419 14.8553 2.18261 15.022L1.26785 17.8975C1.10153 18.4393 1.60049 18.8977 2.14103 18.731L5.05164 17.7308C5.25954 17.6475 5.46744 17.6891 5.63376 17.8142C7.17222 18.6893 8.96016 19.1894 10.8728 19.1894C16.403 19.1894 20.8521 15.1053 20.8521 10.0211C20.7689 4.89512 16.3198 0.811035 10.8313 0.811035ZM15.613 7.93735L10.5402 12.9383C10.3323 13.1466 10.1244 13.23 9.83334 13.23C9.58386 13.23 9.33438 13.1466 9.12648 12.9383L6.67326 10.5212C6.46536 10.3128 6.46536 10.0211 6.67326 9.85436L7.38012 9.18758C7.58802 8.9792 7.87908 8.9792 8.08698 9.18758L9.83334 10.9379L14.1992 6.60377C14.4071 6.39539 14.6982 6.39539 14.9061 6.60377L15.613 7.27056C15.7793 7.43725 15.7793 7.77065 15.613 7.93735Z"
    />
  );
};
