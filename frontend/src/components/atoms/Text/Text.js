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
          <p className={classes} {...props}>
            {children}
          </p>
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
          <span className={classes} {...props}>
            {children}
          </span>
        );
    }
  };
  return renderSwitch(type);
};

const textType = {
  "2xl": `
  text-3xl
  `,
  xl: `
  text-2xl
  `,
  lg: `
  text-xl
  `,
  md: `
  text-lg
  `,
  sm: `
  text-base
  `,
  xs: `
  text-s
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
    font-bold underline text-primary
  `,
  "bold-em": `
    font-bold text-primary 
  `,
};

export default Text;
