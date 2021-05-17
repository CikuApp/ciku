import React from "react";

// Components
import FeaturedRecipes from "pages/HomePage/FeaturedRecipes";
import Information from "pages/HomePage/Information";
import SustainabilityScoreInfo from "pages/HomePage/SustainabilityScoreInfo";
import { PageContainer } from "components/templates";

const HomePage = () => {
  return (
    <PageContainer>
      <Information />
      <SustainabilityScoreInfo />
      <FeaturedRecipes />
    </PageContainer>
  );
};

export default HomePage;
