import React, { useState } from "react";
import { useRecoilState } from "recoil";
import searchParamsAtom from "recoil/searchParams";
import searchRequestedAtom from "recoil/searchRequested";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);
  const [searchRequested, setSearchRequested] = useRecoilState(
    searchRequestedAtom
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevent empty search
    if (searchInput.length) {
      // completely overwrite previous search terms
      setSearchParams([searchInput]);
      setSearchInput("");
      setSearchRequested(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 h-1/2 flex border border-black"
    >
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className="flex-grow pl-4 text-sm bg-gray-200"
        placeholder="Find A Recipe"
      />
      <button type="submit" className="bg-gray-200 px-4">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
