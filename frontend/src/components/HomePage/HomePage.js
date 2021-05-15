import React from "react";

// Components
import PopularRecipes from "components/HomePage/PopularRecipes";
import Information from "components/HomePage/Information";
import SustainabilityScoreInfo from "components/HomePage/SustainabilityScoreInfo";

const HomePage = () => {
  return (
    <>
      <Information />
      <SustainabilityScoreInfo />
      <PopularRecipes />
    </>
  );
};

export default HomePage;
