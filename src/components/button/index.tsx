import React, { MouseEventHandler } from "react";
import cls from "classnames";
import "./style.css";

export interface ButtonProps {
  id?: string;
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  variant?: "fill" | "ghost";
}

const Button: React.SFC<ButtonProps> = ({
  id,
  className,
  onClick,
  disabled,
  variant = "fill",
  children
}) => {
  return (
    <button
      id={id}
      className={cls("button-element", className, {
        "be-fill": variant === "fill",
        "be-ghost": variant === "ghost"
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
