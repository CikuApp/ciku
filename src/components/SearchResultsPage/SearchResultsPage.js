import React from "react";
import { useRecoilValue } from "recoil";

import { searchParamsResults } from "recoil/searchParams";

function SearchResults() {
  const results = useRecoilValue(searchParamsResults);
  return (
    <div>
      <p>
        You searched for
        <ul>
          {results.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </p>
    </div>
  );
}

export default SearchResults;
