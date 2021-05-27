import React from 'react'

// Components
import { IoMdSearch } from 'react-icons/io'
import InputWithHints from 'components/common/InputWithHints'

// Hooks
import useInputHints from 'hooks/useInputHints'
import useSubmitSearch from 'hooks/useSubmitSearch'

// Data
import ingredients from 'data/allIngredients'

const SearchBar = () => {
  const [
    inputHint,
    searchInput,
    updateInput,
    clearSearchInput,
    fillInput,
    handleKeyPress,
  ] = useInputHints(ingredients)
  const [submitSearch] = useSubmitSearch(searchInput, clearSearchInput)

  return (
    <form
      onSubmit={submitSearch}
      className="h-10 flex-grow flex mx-20 bg-white rounded-lg"
    >
      <div className="flex-grow pl-4">
        <InputWithHints
          inputField={searchInput}
          inputHint={inputHint}
          updateInput={updateInput}
          handleKeyPress={handleKeyPress}
          fillInput={fillInput}
          placeholder={'Find A Recipe'}
        />
      </div>
      <button type="submit" className="px-4">
        <IoMdSearch className="text-2xl text-secondary" />
      </button>
    </form>
  )
}

export default SearchBar
