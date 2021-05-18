import React from "react";

// Creates a full-width "bar" that controls max-width for children elements
const PageBarContainer = ({ children, displayClasses }) => {
  const childrenClasses =
    "w-full max-w-screen-xl mx-auto flex " + displayClasses;

  return (
    <div className="relative w-full pt-12 md:px-16 lg:px-20 xl:px-24 2xl:px-40">
      <div className={childrenClasses}>{children}</div>
    </div>
  );
};

export default PageBarContainer;
