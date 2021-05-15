import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

// States
import searchRequestedAtom from "recoil/searchRequested";

// Components
import RecipeCard from "components/RecipeCard/RecipeCard";

const RecipeResultsWrapper = ({ results }) => {
  const [searchRequested, setSearchRequested] =
    useRecoilState(searchRequestedAtom);

  useEffect(() => {
    setSearchRequested(false);
  }, [setSearchRequested]);

  return (
    <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20">
      {results.map((result) => {
        return <RecipeCard key={result.id} recipeObject={result} />;
      })}
    </div>
  );
};

export default RecipeResultsWrapper;

RecipeResultsWrapper.propTypes = {
  results: PropTypes.array,
};

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
// flex justify-between flex-wrap
