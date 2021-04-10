import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import SelectLocation from "components/HomePage/SelectLocation";
import PopularRecipes from "components/HomePage/PopularRecipes";

function HomePage() {
  return (
    <div>
      <h1>Learn to eat more sustainably.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <SelectLocation />
      <PopularRecipes />
    </div>
  );
}

export default HomePage;
