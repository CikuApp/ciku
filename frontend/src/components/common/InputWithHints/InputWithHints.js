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
      // listen for right arrow key press
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
        className="w-full z-10 placeholder-gray-dark bg-transparent rounded-lg text-sm"
      />
      <span className="h-full w-full absolute left-0 flex items-center whitespace-nowrap overflow-x-hidden text-sm">
        <span className="opacity-0">{inputField}</span>
        {(inputHint[0] === " " ||
          inputField[inputField.length - 1] === " ") && <span>&nbsp;</span>}
        <span
          onClick={handleFillInput}
          className="text-gray-dark whitespace-nowrap"
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
