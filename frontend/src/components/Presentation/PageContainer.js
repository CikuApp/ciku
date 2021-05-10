import React from "react";

const PageContainer = ({ children, className }) => {
  const classNames = `relative w-full px-12 lg:px-24 xl:px-48 2xl:px-64 ${className}`;
  return (
    <div className={classNames}>
      <div className="w-full max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
};

export default PageContainer;
