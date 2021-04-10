import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { Switch, Route } from "react-router-dom";

import Nav from "components/Nav/Nav";
import HomePage from "components/HomePage/HomePage";
import LocationPage from "components/LocationPage/LocationPage";
import SearchResultsPage from "components/SearchResultsPage/SearchResultsPage";
import ShoppingListPage from "components/ShoppingListPage/ShoppingListPage";
import RecipePage from "components/RecipePage/RecipePage";

// * Figure out how we're implementing the search bar

function App() {
  return (
    <RecoilRoot>
      <Nav />
      {/* <SearchBar /> */}
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/location">
            <LocationPage />
          </Route>
          <Route path="/recipes/:recipeId">
            <RecipePage />
          </Route>
          <Route path="/recipes">
            <SearchResultsPage />
          </Route>
          <Route exact path="/shopping-list">
            <ShoppingListPage />
          </Route>
        </Switch>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
