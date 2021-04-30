import React from "react";
import PropTypes from "prop-types";

import SearchResultsFilter from "components/SearchResultsPage/SearchResultsFilter";
import { PageContainer, Text } from "components/Presentation";
import SearchIngredientsWrapper from "components/SearchResultsPage/SearchIngredientsWrapper";
import AddSearchIngredients from "components/SearchResultsPage/AddSearchIngredients";
import LocationSelector from "components/SearchResultsPage/LocationSelector";

const OptionsSection = ({ expandedMenu, handleExpandMenu }) => {
  return (
    <PageContainer className="relative z-50 pt-14">
      <LocationSelector />
      <Text type="h2" className="mt-16 mb-10">
        Recipe Results
      </Text>
      <div className="flex">
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
