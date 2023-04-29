import React from "react";

import '../../styles/components/common/Button.css';

interface BasicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "full";
  variante?: "primary" | "white" | "black";
}

export const Button = (props: BasicButtonProps) => {
  const { children, className, variante = "primary", size = "medium" } = props;

  const classNameProp = className ? className : ""
  return (
    <button {...props} className={`button-component ${variante} ${size} ${classNameProp}`}>
      { children }
    </button>
  );
};