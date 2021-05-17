import React from "react";

const ListItem = (props) => {
  const { children } = props;
  return (
    <li
      {...props}
      className="w-full px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </li>
  );
};

export default ListItem;
