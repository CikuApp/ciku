import React from "react";

function PageContainer({ children, className }) {
  const classNames = `w-8/12 m-auto pt-20 text-sm border ${className}`;
  return <div className={classNames}>{children}</div>;
}

export default PageContainer;
