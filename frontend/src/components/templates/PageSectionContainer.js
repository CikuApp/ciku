import React from "react";

// Creates a full-width page container with optional background
// Controls max-width for children elements
const PageSectionContainer = ({ children, bgClasses, displayClasses }) => {
  const parentClasses =
    "relative w-full py-12 md:px-16 lg:px-20 xl:px-24 2xl:px-40 bg-no-repeat bg-cover " +
    (bgClasses || "");

  const childrenClasses = "w-full max-w-screen-xl mx-auto " + displayClasses;

  return (
    <div className={parentClasses}>
      <div className={childrenClasses}>{children}</div>
    </div>
  );
};

export default PageSectionContainer;
