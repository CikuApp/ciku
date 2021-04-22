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
      className="w-1/2 h-10 flex border border-black"
    >
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className="flex-grow pl-4 text-sm bg-gray-200"
        placeholder="Find A Recipe"
      />
      <button type="submit" className="bg-gray-200 px-4">
        <IoMdSearch className="text-xl" />
      </button>
    </form>
  );
}

export default SearchBar;
