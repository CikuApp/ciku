import React, { useState } from "react";
import { useRecoilState } from "recoil";
import searchParamsAtom from "recoil/searchParams";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams((prevState) => [...prevState, searchInput]);
    setSearchInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 h-1/2 flex border border-gray-500"
    >
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className="flex-grow bg-gray-200"
      />
      <button type="submit" className="bg-gray-200 px-4">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
