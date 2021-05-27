import React from 'react'
import PropTypes from 'prop-types'

const InputWithHints = ({
  inputField,
  inputHint,
  updateInput,
  handleKeyPress,
  fillInput,
  placeholder,
}) => {
  return (
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
          (inputHint[0] === ' ' ||
            inputField[inputField.length - 1] === ' ') && <span>&nbsp;</span>}
        <span onClick={fillInput} className="text-gray-dark whitespace-nowrap">
          {inputHint}
        </span>
      </span>
    </div>
  )
}

export default InputWithHints

InputWithHints.propTypes = {
  inputField: PropTypes.string,
  inputHint: PropTypes.string,
  updateInput: PropTypes.func,
  handleKeyPress: PropTypes.func,
  fillInput: PropTypes.func,
  placeholder: PropTypes.string,
}
