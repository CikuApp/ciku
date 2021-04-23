import React, { useState } from "react";
import { useRecoilState } from "recoil";

// States
import searchIngredientsAtom from "recoil/searchIngredients";

// Components
import { IoAddCircle } from "react-icons/io5";

function AddSearchIngredients() {
  const [ingredientInput, setIngredientInput] = useState("");
  const [searchIngredients, setSearchIngredients] = useRecoilState(
    searchIngredientsAtom
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchIngredients((prevState) => [...prevState, ingredientInput]);
    setIngredientInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-shrink-0 h-14 w-72 flex border border-black"
    >
      <input
        placeholder="Include ingredients"
        value={ingredientInput}
        onChange={(e) => setIngredientInput(e.target.value)}
        className="flex-grow pl-2 text-lg bg-gray-200"
      />
      <button type="submit" className="bg-gray-200 px-2">
        <IoAddCircle className="text-2xl" />
      </button>
    </form>
  );
}

export default AddSearchIngredients;
