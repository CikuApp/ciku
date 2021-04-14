import React from "react";

function PageContainer({ children, className }) {
  const classNames = `w-9/12 m-auto pt-12 text-sm ${className}`;
  return <div className={classNames}>{children}</div>;
}

export default PageContainer;
