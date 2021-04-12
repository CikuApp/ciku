import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import { userShoppingList } from "recoil/user";

import { Button } from "components/Presentation";

function AddIngredientsButton({ recipeIngredients }) {
  const [shoppingList, setShoppingList] = useRecoilState(userShoppingList);

  const handleSave = () => {
    setShoppingList((prevState) => [...prevState, ...recipeIngredients]);
  };

  return (
    <Button type="secondary" size="sm" onClick={handleSave}>
      Add Ingredients to Shopping List
    </Button>
  );
}

export default AddIngredientsButton;

AddIngredientsButton.propTypes = {
  recipeIngredients: PropTypes.array,
};
