import React from 'react';

// Components
import FeaturedRecipes from 'pages/HomePage/FeaturedRecipes';
import Information from 'pages/HomePage/Information';
import SustainabilityScoreInfo from 'pages/HomePage/SustainabilityScoreInfo';

const HomePage = () => (
  <>
    <Information />
    <SustainabilityScoreInfo />
    <FeaturedRecipes />
  </>
);

export default HomePage;
