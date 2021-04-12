import React from "react";
import { ButtonType, ButtonSize } from "assets/theme";

function Button({ size, type, onClick, children, className }) {
  const classNames = `${ButtonType[type]} ${ButtonSize[size]} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
