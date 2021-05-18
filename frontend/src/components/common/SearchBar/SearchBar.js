import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

// State
import searchParamsAtom from "recoil/searchParams";
import searchRequestedAtom from "recoil/searchRequested";
import searchIngredientsAtom from "recoil/searchIngredients";
import searchTagsAtom from "recoil/searchTags";
import locationAtom from "recoil/location";

// Components
import { IoMdSearch } from "react-icons/io";
import InputWithHints from "components/common/InputWithHints";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const setSearchParams = useSetRecoilState(searchParamsAtom);
  const setSearchRequested = useSetRecoilState(searchRequestedAtom);
  const setSearchIngredients = useSetRecoilState(searchIngredientsAtom);
  const setSearchTags = useSetRecoilState(searchTagsAtom);
  const setLocation = useSetRecoilState(locationAtom);

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
      setLocation((currentLocation) =>
        currentLocation.length ? currentLocation : "california"
      );
      setSearchRequested(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-10 flex-grow flex mx-20 bg-white rounded-lg"
    >
      <div className="flex-grow pl-4">
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
