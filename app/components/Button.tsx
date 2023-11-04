import React, { ComponentPropsWithRef } from "react";
import style from "@/styles/Button.module.css";
import { cn } from "@/utils/helper";

type Size = "xs" | "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  size: Size;
  className?: string;
} & ComponentPropsWithRef<"button">;

const Button = ({ children, className, size, ...rest }: ButtonProps) => {
  // button--sm-size
  const buttonSize = style[`button--${size}`];

  return (
    <button
      {...rest}
      className={cn("bg-blue-500 rounded", buttonSize, className)}
    >
      {children}
    </button>
  );
};

export default Button;
