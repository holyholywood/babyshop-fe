import React from "react";
import * as ReactIcon from "react-icons/all";

interface IconProps {
  icon?: keyof typeof ReactIcon;
  size?: "sm" | "normal" | "lg" | "xl" | "xxl";
  isBold?: boolean;
  color?: "primary" | "secondary" | "gray" | "success" | "danger" | "warning";
  className?: string;
}

const sizeClass = {
  sm: "base",
  normal: "lg",
  lg: "xl",
  xl: "2xl",
  xxl: "3xl",
};
const colorClass = {
  primary: "blue-500",
  secondary: "gray-300",
  gray: "gray-400",
  success: "green-500",
  danger: "red-500",
  warning: "orange-500",
};
const Icon: React.FC<IconProps> = ({
  icon,
  size = "normal",
  isBold,
  color = "primary",
  className,
}) => {
  const Icon = icon && ReactIcon[icon];

  return (
    <>
      {Icon && (
        <Icon
          className={`${isBold && "font-bold"} text-${sizeClass[size]} text-${
            colorClass[color]
          } ${className}`}
        />
      )}
    </>
  );
};

export default Icon;
