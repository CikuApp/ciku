import React, { useState } from "react";

// Components
import ResultsSection from "components/SearchResultsPage/ResultsSection";
import OptionsSection from "components/SearchResultsPage/OptionsSection";

const SearchResultsPage = () => {
  const [expandedMenu, setExpandedMenu] = useState("");

  const handleExpandMenu = (tagName) => {
    setExpandedMenu((prevState) => (prevState === tagName ? "" : tagName));
  };

  return (
    <>
      <OptionsSection
        expandedMenu={expandedMenu}
        handleExpandMenu={handleExpandMenu}
      />
      <ResultsSection expandedMenu={expandedMenu} />
    </>
  );
};

export default SearchResultsPage;
