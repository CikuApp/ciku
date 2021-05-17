import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoCheckmarkSharp } from "react-icons/io5";

import { userShoppingList } from "recoil/user";

import { Text, Button, Checkbox } from "components/Presentation";

function RecipeIngredients({ recipeIngredients }) {
  const [shoppingList, setShoppingList] = useRecoilState(userShoppingList);
  const ingredientsListRef = useRef(null);
  const [localCount, setLocalCount] = useState(0);
  const [localList, setLocalList] = useState([]);

  const handleClick = (ingredientName) => {
    if (localCount === 0) {
      setLocalList((prevState) => {
        if (prevState.includes(ingredientName)) {
          return prevState.filter((item) => item !== ingredientName);
        } else {
          return [...prevState, ingredientName];
        }
      });
    } else {
      setShoppingList((prevState) => {
        if (prevState.includes(ingredientName)) {
          setLocalCount((prevState) => prevState - 1);
          return prevState.filter((item) => item !== ingredientName);
        } else {
          setLocalCount((prevState) => prevState + 1);

          return [...prevState, ingredientName];
        }
      });
    }
  };

  const inShoppingList = (ingredient) => {
    if (shoppingList.includes(ingredient) || localList.includes(ingredient)) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddToList = () => {
    setShoppingList((prevState) => [...prevState, ...localList]);
    setLocalList([]);
    setLocalCount(localList.length);
  };

  useEffect(() => {
    const ingredientsList = ingredientsListRef.current;
    if (ingredientsList) {
      let checked = ingredientsList.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      setLocalCount(checked.length);
    }
  }, []);

  return (
    <section className="w-1/2 my-16 pr-24">
      <Text type="h2" className="font-serif font-bold">
        Ingredients
      </Text>
      <ul className="my-16" ref={ingredientsListRef}>
        {recipeIngredients.map((ingredient) => {
          return (
            <li className="flex items-center my-4" key={ingredient}>
              <Checkbox
                value={ingredient}
                checked={inShoppingList(ingredient)}
                handleClick={() => handleClick(ingredient)}
                className="mr-8"
              />
              <Text type="h4">{ingredient}</Text>
            </li>
          );
        })}
      </ul>
      {localCount > 0 ? (
        <div className="flex items-center justify-between 2xl:justify-start">
          <Text type="h4" className="flex items-center 2xl:mr-12">
            <IoCheckmarkSharp className="mr-4" />
            {localCount} ingredients added
          </Text>
          <Link to="/shopping-list">
            <Button type="secondary" size="sm">
              View Grocery List
            </Button>
          </Link>
        </div>
      ) : (
        <Button type="secondary" size="sm" onClick={handleAddToList}>
          Add To Grocery List
        </Button>
      )}
    </section>
  );
}

export default RecipeIngredients;

RecipeIngredients.propTypes = {
  recipeIngredients: PropTypes.array,
};
