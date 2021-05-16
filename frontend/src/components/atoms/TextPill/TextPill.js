import React from "react";

const TextPill = (props) => {
  const { children } = props;
  const classes = `
    flex-shrink-0 w-52 h-9
    flex justify-evenly items-center
    px-4
    border border-gray-dark rounded-md
    bg-white
  `;
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

export default TextPill;
