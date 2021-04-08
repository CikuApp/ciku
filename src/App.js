import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

import SearchBar from "components/Search/SearchBar";
import SearchResults from "components/Search/SearchResults";

function App() {
  return (
    <RecoilRoot>
      <SearchBar />
      <Suspense fallback={<div>loading...</div>}>
        <SearchResults />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
