import React from "react";
import { TextType } from "assets/theme";

function Text({ type, className, children }) {
  const classNames = `${TextType[type]} ${className}`;

  const renderSwitch = (type) => {
    switch (type) {
      case "h1":
        return <h1 className={classNames}>{children}</h1>;
      case "h2":
        return <h2 className={classNames}>{children}</h2>;
      case "h3":
        return <h3 className={classNames}>{children}</h3>;
      case "h4":
        return <h4 className={classNames}>{children}</h4>;
      case "h5":
        return <h5 className={classNames}>{children}</h5>;
      case "h6":
        return <h6 className={classNames}>{children}</h6>;
      default:
        return <p className={classNames}>{children}</p>;
    }
  };
  return renderSwitch(type);
}

export default Text;
