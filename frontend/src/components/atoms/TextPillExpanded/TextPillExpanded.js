import React from "react";

const TextPillExpanded = (props) => {
  const { children } = props;

  const classes = `
  absolute w-72 h-56  
  z-50
  pt-1 
  overflow-y-scroll
  rounded-bl-lg rounded-br-lg 
  bg-white shadow-sm
  `;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default TextPillExpanded;