import { useState, useEffect } from 'react'

// Utils
import { getHints } from 'utils/dataHelpers'

/**
 *
 * @param {array} arr - array of data to get hints from
 */
const useInputHints = (arr) => {
  const [searchInput, setSearchInput] = useState('')
  const [inputHint, setInputHint] = useState('')

  const updateInput = (e) => {
    const currentInput = e.target.value
    setSearchInput(currentInput)
    setInputHint(getHints(currentInput, arr).slice(currentInput.length))
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 39) {
      // listen for right arrow key press
      fillInput()
    }
  }

  const fillInput = () => {
    setSearchInput((prev) => prev + inputHint)
    setInputHint('')
  }

  const clearSearchInput = () => {
    setSearchInput('')
  }

  useEffect(() => {
    searchInput === '' && setInputHint('')
  }, [searchInput])

  return [
    inputHint,
    searchInput,
    updateInput,
    clearSearchInput,
    fillInput,
    handleKeyPress,
  ]
}

export default useInputHints
