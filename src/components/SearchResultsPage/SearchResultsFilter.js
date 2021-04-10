import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

// Decide whether to filter results from searchParamsResults atom or to submit a new search
// Also, filters are dynamic? or pre-set?

function SearchResultsFilter() {
  return (
    <section>
      <label htmlFor="ingredients">Ingredients</label>
      <select name="ingredients" id="ingredients"></select>
      <label htmlFor="dish-type">Dish Type</label>
      <select name="dish-type" id="dish-type"></select>
      <label htmlFor="cuisine">Cuisine</label>
      <select name="cuisine" id="cuisine"></select>
      <label htmlFor="dietary-concerns">Dietary Concerns</label>
      <select name="dietary-concerns" id="dietary-concerns"></select>
    </section>
  );
}

export default SearchResultsFilter;
