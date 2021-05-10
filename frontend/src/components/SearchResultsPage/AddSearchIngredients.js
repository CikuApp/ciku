import React, { useState } from "react";
import { useRecoilState } from "recoil";

// States
import searchIngredientsAtom from "recoil/searchIngredients";

// Components
import { IoAddCircle } from "react-icons/io5";

const AddSearchIngredients = () => {
  const [ingredientInput, setIngredientInput] = useState("");
  const [searchIngredients, setSearchIngredients] = useRecoilState(
    searchIngredientsAtom
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredientInput.length) {
      setSearchIngredients((prevState) =>
        Array.from(new Set([...prevState, ingredientInput]))
      );
      setIngredientInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-shrink-0 h-14 w-72 flex justify-evenly px-4 border border-gray-300 rounded-lg bg-white"
    >
      <input
        placeholder="Include ingredients"
        value={ingredientInput}
        onChange={(e) => setIngredientInput(e.target.value)}
        className="text-lg placeholder-gray-500 pl-2"
      />
      <button type="submit" className=" px-2">
        <IoAddCircle className="text-3xl text-secondary" />
      </button>
    </form>
  );
};

export default AddSearchIngredients;
