import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Text } from "components/Presentation";

import { toTitle } from "utils/dataHelpers";

function RecipeMiniCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.name.replace(/ /g, "-")}`}>
      <div className="w-112 h-20 my-8 flex-shrink-0 flex items-center rounded shadow-lg bg-white ">
        <img
          src={recipe.image}
          alt=""
          className="h-16 w-16 my-2 mx-2 mr-4 flex-shrink-0 bg-gray-100"
        />

        <Text
          type="h4"
          className="w-full whitespace-nowrap overflow-ellipsis overflow-hidden px-2 font-bold"
        >
          {toTitle(recipe.name)}
        </Text>
      </div>
    </Link>
  );
}

export default RecipeMiniCard;

RecipeMiniCard.propTypes = {
  recipe: PropTypes.object,
};
