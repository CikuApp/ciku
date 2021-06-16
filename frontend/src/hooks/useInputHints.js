import { useState, useEffect } from 'react';

// Utils
import { getHints } from 'utils/dataHelpers';

/**
 * Hook to set input hints from user input
 *
 * @param {array} arr - array of data to get hints from
 */
const useInputHints = arr => {
  const [searchInput, setSearchInput] = useState('');
  const [inputHint, setInputHint] = useState('');

  /**
   * On input change: update search input and input hint
   *
   * @param {event} e
   */
  const updateInput = e => {
    const currentInput = e.target.value;
    setSearchInput(currentInput);
    setInputHint(getHints(currentInput, arr).slice(currentInput.length));
  };

  /**
   * Set input to be hint; reset hint
   */
  const fillInput = () => {
    setSearchInput(prev => prev + inputHint);
    setInputHint('');
  };

  /**
   * Listen for right arrow key press
   *
   * @param {event} e
   */
  const handleKeyPress = e => {
    if (e.keyCode === 39) {
      fillInput();
    }
  };

  /**
   * Clear search input
   */
  const clearSearchInput = () => {
    setSearchInput('');
  };

  /**
   * Reset input hint when search input is empty
   */
  useEffect(() => {
    if (searchInput === '') setInputHint('');
  }, [searchInput]);

  return [
    inputHint,
    searchInput,
    updateInput,
    clearSearchInput,
    fillInput,
    handleKeyPress
  ];
};

export default useInputHints;
