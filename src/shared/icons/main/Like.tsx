import { IconProps } from "../Icons.type";

export const Like = ({ width = "21", height = "20", fill = "#4AB226" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.35065 18.5714H2.27917C1.49019 18.5714 0.850586 17.9318 0.850586 17.1428V9.99988C0.850586 9.21087 1.49019 8.57129 2.27917 8.57129H6.35065C6.46899 8.57129 6.56494 8.66729 6.56494 8.78558V18.3571C6.56494 18.4754 6.46899 18.5714 6.35065 18.5714Z"
        fill={fill}
      />
      <path
        d="M6.75879 9.54408L9.34169 4.37821C9.43645 4.18888 9.48567 3.98013 9.48567 3.76845V1.36344C9.48567 0.610439 10.0961 0 10.8491 0C12.3552 0 13.576 1.22087 13.576 2.72688V10.2258"
        fill={fill}
      />
      <path
        d="M10.8507 8.57129H19.4182C20.3704 8.57129 21.0561 9.48516 20.7898 10.3993L18.2934 18.9708C18.1158 19.5807 17.5569 20 16.9218 20H11.4424C11.0636 20 10.7001 19.8494 10.4323 19.5816L9.84055 18.9898C9.57269 18.722 9.20926 18.5714 8.8304 18.5714H6.56494"
        fill={fill}
      />
      <rect x="5.39551" y="8.63525" width="9.99856" height="9.99856" fill={fill} />
    </svg>
  );
};
