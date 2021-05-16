import React from "react";

const Heading = (props) => {
  const { type, children } = props;

  const classes = `font-serif text-black-light ${headingType[type]}`;

  const renderSwitch = (type) => {
    switch (type) {
      case "h1":
        return (
          <h1 className={classes} {...props}>
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 className={classes} {...props}>
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 className={classes} {...props}>
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4 className={classes} {...props}>
            {children}
          </h4>
        );
      default:
        return (
          <h1 className={classes} {...props}>
            {children}
          </h1>
        );
    }
  };
  return renderSwitch(type);
};

const headingType = {
  h1: `
  text-4xl font-bold
  `,
  h2: `
  text-3xl font-bold
  `,
  h3: `
  text-xl font-medium
  `,
  h4: `
  text-base font-bold
  `,
};

export default Heading;
