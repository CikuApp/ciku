import React from "react";
import { useRecoilValue } from "recoil";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "components/Nav/Nav";
import HomePage from "components/HomePage/HomePage";
import LocationPage from "components/LocationPage/LocationPage";
import SearchResultsPage from "components/SearchResultsPage/SearchResultsPage";
import ShoppingListPage from "components/ShoppingListPage/ShoppingListPage";
import RecipePage from "components/RecipePage/RecipePage";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

import { PageContainer } from "components/Presentation";
import searchRequestedAtom from "recoil/searchRequested/atom";

function App() {
  const searchRequested = useRecoilValue(searchRequestedAtom);

  return (
    <div className="min-h-screen h-full mb-1 bg-background">
      <Nav />
      {searchRequested && <Redirect to="/recipes" />}
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <PageContainer>
              <HomePage />
            </PageContainer>
          </Route>
          <Route path="/locations/:locationName">
            <LocationPage />
          </Route>
          <Route path="/recipes/:recipeName">
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
      </ScrollToTop>
    </div>
  );
}

export default App;
