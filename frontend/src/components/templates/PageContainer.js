import React from "react";

// Parent container for each page
const PageContainer = ({ children }) => {
  return <div className="w-full flex flex-col items-center">{children}</div>;
};

export default PageContainer;
