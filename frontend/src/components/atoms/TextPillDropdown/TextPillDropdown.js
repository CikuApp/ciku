import React from "react";

const TextPillDropdown = (props) => {
  const { children } = props;

  const classes = `
  absolute w-52 h-56
  overflow-y-scroll
  rounded-bl-md rounded-br-md 
  bg-white shadow-sm
  `;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default TextPillDropdown;
