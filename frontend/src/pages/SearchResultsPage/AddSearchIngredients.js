import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

// States
import searchIngredientsAtom from "recoil/searchIngredients";

// Components
import { TextPill } from "components/atoms";
import { IoAddCircle } from "react-icons/io5";
import InputWithHints from "components/common/InputWithHints";

const AddSearchIngredients = () => {
  const [ingredientInput, setIngredientInput] = useState("");
  const setSearchIngredients = useSetRecoilState(searchIngredientsAtom);

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
    <TextPill type="sm">
      <form onSubmit={handleSubmit} className="flex-grow flex items-center">
        <div className="flex-grow">
          <InputWithHints
            inputField={ingredientInput}
            setInputField={setIngredientInput}
            placeholder={"Add ingredients"}
          />
        </div>
        <button type="submit" className="pl-2">
          <IoAddCircle
            className={
              "text-3xl text-secondary " +
              (!ingredientInput.length && "opacity-50 cursor-default")
            }
          />
        </button>
      </form>
    </TextPill>
  );
};

export default AddSearchIngredients;
