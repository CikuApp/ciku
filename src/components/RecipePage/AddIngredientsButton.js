import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import shoppingListAtom from "recoil/shoppingList";

function AddIngredientsButton({ recipeIngredients }) {
  const [shoppingList, setShoppingList] = useRecoilState(shoppingListAtom);

  const handleSave = () => {
    setShoppingList((prevState) => [...prevState, ...recipeIngredients]);
  };

  return <button onClick={handleSave}>Add Ingredients to Shopping List</button>;
}

export default AddIngredientsButton;

AddIngredientsButton.propTypes = {
  recipeIngredients: PropTypes.array,
};
