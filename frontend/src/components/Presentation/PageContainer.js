import React from "react";

function PageContainer({ children, className }) {
  const classNames = `max-w-screen-xl mx-48 2xl:mx-auto my-auto pt-12 text-sm ${className}`;
  return <div className={classNames}>{children}</div>;
}

export default PageContainer;
