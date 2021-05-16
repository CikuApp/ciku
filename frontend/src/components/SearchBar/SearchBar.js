import React, { useState } from "react";
import { useRecoilState } from "recoil";

// State
import searchParamsAtom from "recoil/searchParams";
import searchRequestedAtom from "recoil/searchRequested";
import searchIngredientsAtom from "recoil/searchIngredients";
import searchTagsAtom from "recoil/searchTags";
import InputWithHints from "components/InputWithHints/InputWithHints";

// Components
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);
  const [searchRequested, setSearchRequested] =
    useRecoilState(searchRequestedAtom);
  const [searchIngredients, setSearchIngredients] = useRecoilState(
    searchIngredientsAtom
  );
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevent empty search
    const currentSearch = searchInput.trim();
    if (currentSearch.length) {
      // completely overwrite previous search terms
      setSearchParams([currentSearch]);
      setSearchInput("");
      setSearchTags([]);
      setSearchIngredients([]);
      setSearchRequested(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-14 flex-grow flex mx-20 bg-white rounded-lg"
    >
      <div className="flex-grow pl-6">
        <InputWithHints
          inputField={searchInput}
          setInputField={setSearchInput}
          placeholder={"Find A Recipe"}
        />
      </div>
      <button type="submit" className="px-4">
        <IoMdSearch className="text-2xl text-secondary" />
      </button>
    </form>
  );
};

export default SearchBar;
