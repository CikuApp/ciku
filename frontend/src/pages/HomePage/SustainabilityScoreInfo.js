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
    <PageSectionContainer
      bgClasses="bg-homepage-2 xl:bg-repeat-round"
      displayClasses="flex h-112"
    >
      <section className="w-6/12 space-y-8 pr-36 my-auto">
        <Heading type="h3">
          Get recipe suggestions from Ciku to help you eat more sustainably.
        </Heading>
        <Text type="md">
          Ciku’s recipe suggestions have{" "}
          <Text variant="em">sustainability scores </Text> to help you identify
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
      </section>
      <section className="w-6/12 flex items-end">
        <div className="w-1/4 pb-32 text-center">
          <Text type="lg" variant="medium">
            Sustainability Score
          </Text>
        </div>
        <div className="w-auto h-24 pr-3 -ml-3 mb-16">
          <img
            src={arrowImage}
            alt="Arrow pointing to sustainability score information."
            className="h-full w-full object-contain"
          ></img>
        </div>
        <div className="w-1/2 mb-10 pointer-events-none">
          <RecipeCard recipeObject={exampleRecipe} />
        </div>
      </section>
    </PageSectionContainer>
  );
};

export default SustainabilityScoreInfo;
