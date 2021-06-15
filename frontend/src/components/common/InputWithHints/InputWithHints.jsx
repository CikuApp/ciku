/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const InputWithHints = ({
  inputField,
  inputHint,
  updateInput,
  handleKeyPress,
  fillInput,
  placeholder
}) => (
  <div className="relative h-full flex items-center text-lg rounded-lg">
    <input
      value={inputField}
      onChange={updateInput}
      onKeyDown={handleKeyPress}
      placeholder={placeholder}
      className="w-full z-10 placeholder-gray-dark bg-transparent rounded-lg text-sm"
    />
    <span className="h-full w-full absolute left-0 flex items-center whitespace-nowrap overflow-x-hidden text-sm">
      <span className="opacity-0">{inputField}</span>
      {inputHint &&
        (inputHint[0] === ' ' || inputField[inputField.length - 1] === ' ') && (
          <span>&nbsp;</span>
        )}
      <span
        onClick={fillInput}
        className="text-gray-dark whitespace-nowrap"
        role="button"
        tabIndex={0}
      >
        {inputHint}
      </span>
    </span>
  </div>
);

export default InputWithHints;

InputWithHints.propTypes = {
  inputField: PropTypes.string.isRequired,
  inputHint: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  fillInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};
