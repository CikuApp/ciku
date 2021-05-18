import React from "react";

const ListItem2 = (props) => {
  const { children } = props;
  return (
    <li {...props} className="w-full px-4 py-2 flex items-center">
      {children}
    </li>
  );
};

export default ListItem2;
