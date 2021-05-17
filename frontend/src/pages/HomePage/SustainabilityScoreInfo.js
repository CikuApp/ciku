import React from "react";

// Components
import RecipeCard from "components/common/RecipeCard";
import { PageSectionContainer } from "components/templates";
import { Text, Heading } from "components/atoms";

// Assets
import arrowImage from "assets/images/arrow.png";

// Data
import exampleRecipe from "data/exampleRecipe";

const SustainabilityScoreInfo = () => {
  return (
    <PageSectionContainer bgClasses="bg-homepage-2" displayClasses="flex h-112">
      <section className="w-6/12 pr-36">
        <div className="h-full flex flex-col justify-between">
          <Heading type="h3">
            Get recipe suggestions from Ciku to help you eat more sustainably.
          </Heading>
          <Text type="md">
            Ciku’s recipe suggestions have{" "}
            <Text variant="em">sustainability scores</Text> to help you identify
            which recipes include more sustainable ingredients.
          </Text>
          <Text type="md">
            An ingredient that is both seasonal and local receives +2 points. If
            it’s only seasonal, it receives +1 point.
          </Text>
          <Text type="md">
            Add up the points, and you get the sustainability score! The higher
            the number, the more sustainable the recipe.
          </Text>
        </div>
      </section>
      <section className="w-6/12 flex items-end">
        <div className="w-1/4 pb-36 text-center">
          <Text type="lg" variant="semibold">
            Sustainability Score
          </Text>
        </div>
        <div className="w-1/4 pt-3 pr-3 pb-20">
          <img
            src={arrowImage}
            alt="Arrow pointing to sustainability score information."
          ></img>
        </div>
        <div className="w-1/2 h-full flex items-center pointer-events-none">
          <RecipeCard recipeObject={exampleRecipe} />
        </div>
      </section>
    </PageSectionContainer>
  );
};

export default SustainabilityScoreInfo;
