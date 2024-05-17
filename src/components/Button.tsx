import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
}

const Button: React.FC<ButtonProps> = ({ children, type, variant }) => {
  const content = (
    <button className={`btn btn-${variant}`} type={type}>
      {children}
    </button>
  );
  return content;
};

export default Button;
