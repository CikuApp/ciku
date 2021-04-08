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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
