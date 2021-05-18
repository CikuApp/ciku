import React from "react";
import { Link } from "react-router-dom";

// Components
import { Button, Text } from "components/atoms";
import { IoCheckmarkSharp } from "react-icons/io5";

const RecipeIngredientsActions = ({ localCount, handleAddToList }) => {
  return localCount > 0 ? (
    <div className="flex space-x-12">
      <span className="flex items-center">
        <IoCheckmarkSharp className="text-xl mr-4 text-secondary" />
        <Text type="md">{localCount} ingredients added</Text>
      </span>
      <Link to="/shopping-list">
        <Button type="secondary">View Grocery List</Button>
      </Link>
    </div>
  ) : (
    <Button type="secondary" onClick={handleAddToList}>
      Add To Grocery List
    </Button>
  );
};

export default RecipeIngredientsActions;
