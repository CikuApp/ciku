import React, { Suspense } from "react";
import PropTypes from "prop-types";

// Components
import { PageContainer } from "components/Presentation";
import RecipeResults from "components/RecipeResults/RecipeResults";

const ResultsSection = ({ expandedMenu }) => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {expandedMenu !== "" && (
        <div className="absolute w-full min-h-screen h-full bg-black opacity-60 z-30 "></div>
      )}
      <PageContainer className="pt-14">
        <Suspense fallback={<div>loading</div>}>
          <RecipeResults />
        </Suspense>
      </PageContainer>
    </div>
  );
};

export default ResultsSection;

ResultsSection.propTypes = {
  expandedMenu: PropTypes.string,
};
