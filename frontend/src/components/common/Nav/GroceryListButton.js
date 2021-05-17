import React from "react";
import { Link } from "react-router-dom";

// Components
import { Button } from "components/atoms";
import { CgList } from "react-icons/cg";

const GroceryListButton = () => {
  return (
    <Link to="/shopping-list" className="flex align-end">
      <Button type="nav">
        <CgList className="mr-4" />
        Grocery List
      </Button>
    </Link>
  );
};

export default GroceryListButton;
