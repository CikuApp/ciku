import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "components/Nav/Nav";
import HomePage from "components/HomePage/HomePage";
import LocationPage from "components/LocationPage/LocationPage";
import SearchResultsPage from "components/SearchResultsPage/SearchResultsPage";
import ShoppingListPage from "components/ShoppingListPage/ShoppingListPage";
import RecipePage from "components/RecipePage/RecipePage";

import { PageContainer } from "components/Presentation";
import searchRequestedAtom from "recoil/searchRequested/atom";

function App() {
  const searchRequested = useRecoilValue(searchRequestedAtom);

  return (
    <div>
      <Nav />
      {searchRequested && <Redirect to="/recipes" />}
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route exact path="/">
            <PageContainer>
              <HomePage />
            </PageContainer>
          </Route>
          <Route path="/locations/:locationName">
            <LocationPage />
          </Route>
          <Route path="/recipes/:recipeId">
            <PageContainer>
              <RecipePage />
            </PageContainer>
          </Route>
          <Route path="/recipes">
            <SearchResultsPage />
          </Route>
          <Route exact path="/shopping-list">
            <PageContainer>
              <ShoppingListPage />
            </PageContainer>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
