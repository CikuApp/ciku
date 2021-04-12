import React from "react";
import { IconSize, IconShape } from "assets/theme";

function Icon({ size, shape, src, alt, className }) {
  const classNames = `${IconShape[shape]} ${IconSize[size]} ${className}`;
  return <img className={classNames} src={src} alt={alt} />;
}

export default Icon;
