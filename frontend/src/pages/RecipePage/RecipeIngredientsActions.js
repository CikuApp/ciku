import React from "react";
import { Link } from "react-router-dom";

// Components
import { Button, Text } from "components/atoms";
import { IoCheckmarkSharp } from "react-icons/io5";

const RecipeIngredientsActions = ({ localCount, handleAddToList }) => {
  return (
    <div className="flex space-x-12 mt-20">
      {localCount > 0 ? (
        <>
          <span className="flex items-center">
            <IoCheckmarkSharp className="text-xl mr-4 text-secondary" />
            <Text type="md">
              {localCount} ingredient{localCount > 1 ? "s" : ""} added
            </Text>
          </span>
          <Link to="/shopping-list">
            <Button type="secondary">View Grocery List</Button>
          </Link>
        </>
      ) : (
        <Button type="secondary" onClick={handleAddToList}>
          Add To Grocery List
        </Button>
      )}
    </div>
  );
};

export default RecipeIngredientsActions;
