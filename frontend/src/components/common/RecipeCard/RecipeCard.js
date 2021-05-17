import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import { Text, Heading } from "components/atoms";

// Utils
import { toTitle, truncate } from "utils/dataHelpers";

const RecipeCard = ({ recipeObject }) => {
  return (
    <Link
      to={`/recipes/${recipeObject.name.replace(/ /g, "-")}`}
      className="w-64 h-90 flex-shrink-0 overflow-hidden flex flex-col rounded-lg bg-white shadow-lg hover:shadow-xl"
    >
      <img
        src={recipeObject.image_url}
        alt={recipeObject.name}
        className="h-64 flex-shrink-0 object-cover overflow-hidden"
      />
      <div className="h-24 w-full px-3 flex flex-col justify-evenly">
        <span className="h-12 overflow-hidden">
          <Heading type="h4">{truncate(toTitle(recipeObject.name))}</Heading>
        </span>
        <Text type="md" variant="bold-em">
          Score: {recipeObject.sus_score}
        </Text>
      </div>
    </Link>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  recipeObject: PropTypes.object,
};
