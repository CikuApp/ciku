import React from "react";
import PropTypes from "prop-types";

import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import { PageContainer, Text } from "components/Presentation";
import SearchIngredientsWrapper from "components/SearchResultsPage/SearchIngredientsWrapper";
import AddSearchIngredients from "components/SearchResultsPage/AddSearchIngredients";
import LocationSelector from "components/common/LocationSelector";
import SustainabilityScoreTooltip from "components/SearchResultsPage/SustainabilityScoreTooltip";

const OptionsSection = ({ expandedMenu, handleExpandMenu }) => {
  return (
    <PageContainer className="relative z-50 pt-6">
      <LocationSelector />
      <div className="flex items-baseline">
        <Text type="h2" className="my-14 font-serif">
          Recipe Results
        </Text>
        <Text type="p" className="ml-14">
          What's a{" "}
        </Text>
        <SustainabilityScoreTooltip title="Sustainability Score">
          <Text type="p">
            Every recipe is given a sustainability score marked in orange. It
            helps you identify which recipes include more sustainable
            ingredients.
          </Text>
          <Text type="p" className="my-4">
            An ingredient that is both seasonal and local receives +2 points. If
            it's only seasonal, it receives +1 point.
          </Text>
          <Text type="p">
            Add up the points, and you get the sustainability score! The higher
            the number, the more sustainable the recipe.
          </Text>
        </SustainabilityScoreTooltip>
        <Text type="p">?</Text>
      </div>
      <div className="flex items-start">
        <AddSearchIngredients />
        <SearchIngredientsWrapper />
      </div>
      <SearchResultsFilter
        handleExpandMenu={handleExpandMenu}
        expandedMenu={expandedMenu}
      />
    </PageContainer>
  );
};

export default OptionsSection;

OptionsSection.propTypes = {
  expandedMenu: PropTypes.string,
};
