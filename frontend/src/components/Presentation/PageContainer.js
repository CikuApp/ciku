import React from "react";

const PageContainer = ({ children, className }) => {
  const classNames = `relative w-full px-12 lg:px-24 xl:px-48 2xl:px-64 ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default PageContainer;
