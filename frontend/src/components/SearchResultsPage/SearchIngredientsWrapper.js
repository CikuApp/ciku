import React from "react";
import { useRecoilState } from "recoil";

// States
import searchIngredientsAtom from "recoil/searchIngredients";

// Components
import SearchIngredientsCard from "components/SearchResultsPage/SearchIngredientCard";

function SearchIngredientsWrapper() {
  const [searchIngredients, setSearchIngredients] = useRecoilState(
    searchIngredientsAtom
  );

  const handleDelete = (ingredient) => {
    if (searchIngredients.includes(ingredient)) {
      setSearchIngredients((prevState) => {
        return [...prevState.filter((item) => item !== ingredient)];
      });
    } else {
      setSearchIngredients((prevState) => [...prevState, ingredient]);
    }
  };

  return (
    <div className="w-full flex flex-wrap ml-4">
      {searchIngredients.length
        ? searchIngredients.map((ingredient) => (
            <SearchIngredientsCard
              key={ingredient}
              ingredient={ingredient}
              handleDelete={() => handleDelete(ingredient)}
            />
          ))
        : null}
    </div>
  );
}

export default SearchIngredientsWrapper;