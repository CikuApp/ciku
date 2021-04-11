import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

// Decide whether to filter results from searchParamsResults atom or to submit a new search
// Also, filters are dynamic? or pre-set?

function SearchResultsFilter() {
  return (
    <section className="h-12 w-full bg-gray-200">
      <div className="w-8/12 h-full mx-auto flex items-center">
        <label htmlFor="ingredients"></label>
        <select
          name="ingredients"
          id="ingredients"
          className="w-48 py-2 pl-0 pr-4 appearance-none bg-transparent"
        >
          <option value="">Ingredients</option>
        </select>
        <label htmlFor="dish-type"></label>
        <select
          name="dish-type"
          id="dish-type"
          className="w-48 py-2 px-4 appearance-none bg-transparent"
        >
          <option value="">Dish Type</option>
        </select>
        <label htmlFor="cuisine"></label>
        <select
          name="cuisine"
          id="cuisine"
          className="w-48 py-2 px-4 appearance-none bg-transparent"
        >
          <option value="">Cuisine</option>
        </select>
        <label htmlFor="dietary-concerns"></label>
        <select
          name="dietary-concerns"
          id="dietary-concerns"
          className="w-48 py-2 px-4 appearance-none bg-transparent"
        >
          <option value="">Dietary Concerns</option>
        </select>
      </div>
    </section>
  );
}

export default SearchResultsFilter;
