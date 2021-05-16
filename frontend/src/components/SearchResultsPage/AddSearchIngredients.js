import React, { useState } from "react";
import { useRecoilState } from "recoil";

// States
import searchIngredientsAtom from "recoil/searchIngredients";

// Components
import { TextPill } from "components/Presentation";
import { IoAddCircle } from "react-icons/io5";
import InputWithHints from "components/InputWithHints/InputWithHints";

const AddSearchIngredients = () => {
  const [ingredientInput, setIngredientInput] = useState("");
  const [searchIngredients, setSearchIngredients] = useRecoilState(
    searchIngredientsAtom
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredientInput.length) {
      setSearchIngredients((prevState) =>
        Array.from(new Set([...prevState, ingredientInput]))
      );
      setIngredientInput("");
      setFormSubmitted(true);
    }
  };

  const handleInputChange = (currentInput) => {
    if (currentInput.length) {
      setIngredientInput(currentInput);
      setFormSubmitted(false);
    }
  };

  return (
    <TextPill>
      <form onSubmit={handleSubmit} className="flex items-center">
        <InputWithHints
          inputField={ingredientInput}
          setInputField={handleInputChange}
          placeholder={"Add ingredients"}
          formSubmitted={formSubmitted}
        />
        <button type="submit" className="px-2">
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
