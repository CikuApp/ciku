import React from "react";

const PageContainer = ({ children, className }) => {
  const classNames = `relative max-w-screen-xl px-48 2xl:px-auto ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default PageContainer;
