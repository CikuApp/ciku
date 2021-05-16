import React from "react";

const Text = (props) => {
  const { type, variant, children } = props;

  const classes = `font-sans ${textType[type]} ${
    variant ? textVariant[variant] : "normal"
  }`;

  const renderSwitch = (type) => {
    switch (type) {
      case "2xl":
        return (
          <h1 className={classes} {...props}>
            {children}
          </h1>
        );
      case "xl":
        return (
          <h2 className={classes} {...props}>
            {children}
          </h2>
        );
      case "lg":
        return (
          <h3 className={classes} {...props}>
            {children}
          </h3>
        );
      case "md":
        return (
          <h4 className={classes} {...props}>
            {children}
          </h4>
        );
      case "sm":
        return (
          <p className={classes} {...props}>
            {children}
          </p>
        );
      case "xs":
        return (
          <p className={classes} {...props}>
            {children}
          </p>
        );
      default:
        return (
          <p className={classes} {...props}>
            {children}
          </p>
        );
    }
  };
  return renderSwitch(type);
};

const textType = {
  "2xl": `
  text-2xl
  `,
  xl: `
  text-xl
  `,
  lg: `
  text-lg
  `,
  md: `
  text-md
  `,
  sm: `
  text-sm
  `,
  xs: `
  text-xs
  `,
};

const textVariant = {
  normal: `
  text-black-light 
  `,
  bold: `
    font-bold text-black-light 
  `,
  semibold: `
    font-semibold text-black-light 
  `,
  medium: `
    font-medium text-black-light 
  `,
  em: `
    underline text-primary
  `,
};

export default Text;
