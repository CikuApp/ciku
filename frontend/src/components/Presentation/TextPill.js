import React from "react";

const TextPill = ({ width, children, onClick, className }) => {
  const classNames =
    width +
    " flex-shrink-0 h-14 flex justify-evenly items-center px-4 border border-gray-700 rounded-lg bg-white " +
    className;
  return (
    <div onClick={onClick} className={classNames}>
      {children}
    </div>
  );
};

export default TextPill;
