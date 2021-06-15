import React from 'react';
import { useSetRecoilState } from 'recoil';

// States
import searchIngredientsAtom from 'recoil/searchIngredients';

// Components
import { TextPill } from 'components/atoms';
import { IoAddCircle } from 'react-icons/io5';
import InputWithHints from 'components/common/InputWithHints';

// Hooks
import useInputHints from 'hooks/useInputHints';

// Data
import ingredients from 'data/allIngredients';

const AddSearchIngredients = () => {
  const setSearchIngredients = useSetRecoilState(searchIngredientsAtom);
  const [
    inputHint,
    searchInput,
    updateInput,
    clearSearchInput,
    fillInput,
    handleKeyPress
  ] = useInputHints(ingredients);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.length) {
      setSearchIngredients(prevState =>
        Array.from(new Set([...prevState, searchInput]))
      );
      clearSearchInput('');
    }
  };

  return (
    <TextPill type="sm">
      <form onSubmit={handleSubmit} className="flex-grow flex items-center">
        <div className="flex-grow">
          <InputWithHints
            inputField={searchInput}
            inputHint={inputHint}
            updateInput={updateInput}
            handleKeyPress={handleKeyPress}
            fillInput={fillInput}
            placeholder="Add ingredients"
          />
        </div>
        <button type="submit" className="pl-2">
          <IoAddCircle
            className={`text-3xl text-secondary ${
              !searchInput.length && 'opacity-50 cursor-default'
            }`}
          />
        </button>
      </form>
    </TextPill>
  );
};

export default AddSearchIngredients;
