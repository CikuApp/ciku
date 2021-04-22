import React from "react";

function PageContainer({ children, className }) {
  const classNames = `w-10/12  max-w-screen-xl m-auto pt-12 text-sm ${className}`;
  return <div className={classNames}>{children}</div>;
}

export default PageContainer;
