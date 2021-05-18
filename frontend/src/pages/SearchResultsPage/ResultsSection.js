import React, { Suspense } from "react";
import PropTypes from "prop-types";

// Components
import { PageSectionContainer } from "components/templates";
import Loading from "components/common/Loading";
import RecipeResults from "components/common/RecipeResults/RecipeResults";

const ResultsSection = ({ expandedMenu }) => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {expandedMenu !== "" && (
        <div className="absolute w-full min-h-screen h-full bg-black opacity-60 z-30 -mb-1"></div>
      )}
      <PageSectionContainer className="pt-14">
        <Suspense fallback={<Loading />}>
          <RecipeResults />
        </Suspense>
      </PageSectionContainer>
    </div>
  );
};

export default ResultsSection;

ResultsSection.propTypes = {
  expandedMenu: PropTypes.string,
};
