import React from "react";

const TextPill = (props) => {
  const { type, children } = props;
  const classes = `
    relative 
    flex-shrink-0 ${textPillSize[type]} h-11
    flex justify-between items-center
    px-4
    border border-black-light rounded-lg
    bg-white
  `;
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

export default TextPill;

const textPillSize = {
  sm: `
    w-64
  `,
  md: `
    w-72
  `,
};
