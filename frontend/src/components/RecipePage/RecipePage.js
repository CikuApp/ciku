import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import RecipeInfo from "components/RecipePage/RecipeInfo";
import RecipeIngredients from "components/RecipePage/RecipeIngredients";
import RecipeDirections from "components/RecipePage/RecipeDirections";
import SaveRecipeButton from "components/RecipePage/SaveRecipeButton";
import { GiForkKnifeSpoon } from "react-icons/gi";

// Utils
import { toTitle } from "utils/dataHelpers";
import { fetchRecipe } from "utils/fetchHelpers";

function RecipePage() {
  let { recipeName } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const getRecipeFromDB = async () => {
      const recipe = await fetchRecipe(recipeName);
      setSelectedRecipe(recipe);
    };
    getRecipeFromDB();
  }, []);

  if (selectedRecipe) {
    return (
      <div className="mt-20">
        <div className="w-full flex">
          <div className="w-6/12 flex flex-col">
            <RecipeInfo
              recipeId={selectedRecipe.id}
              recipeName={toTitle(selectedRecipe.name)}
              recipeScore={selectedRecipe.sus_score}
              recipeTime={selectedRecipe.minutes}
              recipeAuthor={selectedRecipe.contributor_id}
            />
            <SaveRecipeButton recipe={selectedRecipe} />
          </div>
          <div className="w-6/12">
            {selectedRecipe.image_url ? (
              <img
                src={selectedRecipe.image_url}
                alt={selectedRecipe.name}
                className="h-200 mb-8 border bg-gray-200 object-cover overflow-hidden"
              ></img>
            ) : (
              <GiForkKnifeSpoon className="h-200 mb-8 border bg-gray-200" />
            )}
          </div>
        </div>
        <div className="w-6/12 flex justify-between"></div>
        <div className="flex my-16">
          <RecipeIngredients recipeIngredients={selectedRecipe.ingredients} />
          <RecipeDirections recipeDirections={selectedRecipe.steps} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default RecipePage;
