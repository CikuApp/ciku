import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Data
import ingredients from "data/allIngredients";

// Utils
import { getHints } from "utils/dataHelpers";

const InputWithHints = ({ inputField, setInputField, placeholder }) => {
  const [inputHint, setInputHint] = useState("");

  const handleInputChange = (e) => {
    const currentInput = e.target.value;
    setInputField(currentInput);
    setInputHint(
      getHints(currentInput, ingredients).slice(currentInput.length)
    );
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 39) {
      // listen for right arrow key press -> fill with suggestion
      handleFillInput();
    }
  };

  const handleFillInput = () => {
    setInputField((prev) => prev + inputHint);
    setInputHint("");
  };

  useEffect(() => {
    inputField === "" && setInputHint("");
  }, [inputField]);

  return (
    <div className="relative h-full flex items-center text-lg rounded-lg">
      <input
        value={inputField}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="w-full placeholder-gray-500 rounded-lg"
      />
      <span className="h-full absolute left-0 flex items-center">
        <span className="opacity-0">{inputField}</span>
        {(inputHint[0] === " " ||
          inputField[inputField.length - 1] === " ") && <span>&nbsp;</span>}
        <span
          onClick={handleFillInput}
          className="text-gray-500 whitespace-nowrap overflow-x-hidden"
        >
          {inputHint}
        </span>
      </span>
    </div>
  );
};

export default InputWithHints;

InputWithHints.propTypes = {
  inputField: PropTypes.string,
  setInputField: PropTypes.func,
  placeholder: PropTypes.string,
};
