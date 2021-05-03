import React, { useState } from "react";
import { useRecoilState } from "recoil";

// State
import searchParamsAtom from "recoil/searchParams";
import searchRequestedAtom from "recoil/searchRequested";
import searchTagsAtom from "recoil/searchTags";

// Components
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);
  const [searchRequested, setSearchRequested] = useRecoilState(
    searchRequestedAtom
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
      setSearchRequested(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-14 flex-grow flex mx-20 bg-white rounded-lg"
    >
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Find A Recipe"
        className="flex-grow pl-6 text-lg rounded-lg placeholder-gray-500"
      />
      <button type="submit" className="px-4">
        <IoMdSearch className="text-2xl text-secondary" />
      </button>
    </form>
  );
}

export default SearchBar;
