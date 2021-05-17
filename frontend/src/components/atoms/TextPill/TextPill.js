import React from "react";

const TextPill = (props) => {
  const { children } = props;
  const classes = `
    relative 
    flex-shrink-0 w-72 h-11
    flex justify-between items-center
    px-4
    border border-black-light rounded-md
    bg-white
  `;
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

export default TextPill;
