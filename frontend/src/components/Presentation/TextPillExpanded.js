import React from "react";

const TextPillExpanded = ({ width, children, className }) => {
  const classNames =
    width +
    " absolute h-60 overflow-y-scroll bg-white shadow-sm rounded-bl-lg rounded-br-lg " +
    className;
  return <div className={classNames}>{children}</div>;
};

export default TextPillExpanded;
