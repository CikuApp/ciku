import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { userShoppingList } from "recoil/user";

import { Text, Button } from "components/Presentation";

function RecipeIngredients({ recipeIngredients }) {
  const [shoppingList, setShoppingList] = useRecoilState(userShoppingList);
  const ingredientsListRef = useRef(null);

  const handleClick = (e) => {
    setShoppingList((prevState) => {
      if (prevState.includes(e.target.value)) {
        return prevState.filter((item) => item !== e.target.value);
      } else {
        return [...prevState, e.target.value];
      }
    });
  };

  const inShoppingList = (ingredient) => {
    if (shoppingList.includes(ingredient)) {
      return true;
    } else {
      return false;
    }
  };

  const getInListCount = () => {
    const ingredientsList = ingredientsListRef.current;
    if (ingredientsList) {
      let checked = ingredientsList.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      return checked.length;
    }
  };

  return (
    <section className="w-1/2 my-16">
      <Text type="h2">Ingredients</Text>
      <ul className="my-8" ref={ingredientsListRef}>
        {recipeIngredients.map((ingredient) => {
          return (
            <li className="my-4" key={ingredient.name}>
              <input
                type="checkbox"
                className="mr-4"
                onClick={handleClick}
                value={ingredient.name}
                defaultChecked={inShoppingList(ingredient.name)}
              />
              {ingredient.quantity} {ingredient.name}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between">
        <Text type="h6">{getInListCount() || "0"} ingredients added</Text>
        <Link to="/shopping-list">
          <Button type="secondary" size="sm">
            View Shopping List
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default RecipeIngredients;

RecipeIngredients.propTypes = {
  recipeIngredients: PropTypes.array,
};
