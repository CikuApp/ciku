import React from "react";
import { useRecoilValue } from "recoil";
import { Switch, Route, Redirect } from "react-router-dom";

// Atoms
import searchRequestedAtom from "recoil/searchRequested/atom";

// Components
import Nav from "components/Nav/Nav";
import HomePage from "components/HomePage/HomePage";
import LocationPage from "components/LocationPage/LocationPage";
import SearchResultsPage from "components/SearchResultsPage/SearchResultsPage";
import ShoppingListPage from "components/ShoppingListPage/ShoppingListPage";
import RecipePage from "components/RecipePage/RecipePage";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import { PageVertical } from "components/Presentation";

const App = () => {
  const searchRequested = useRecoilValue(searchRequestedAtom);

  return (
    <main className="min-h-screen h-full mb-1 bg-background">
      <Nav />
      {searchRequested && <Redirect to="/recipes" />}
      <ScrollToTop>
        <PageVertical>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/locations/:locationName">
              <LocationPage />
            </Route>
            <Route path="/recipes/:recipeName">
              <RecipePage />
            </Route>
            <Route path="/recipes">
              <SearchResultsPage />
            </Route>
            <Route exact path="/shopping-list">
              <ShoppingListPage />
            </Route>
          </Switch>
        </PageVertical>
      </ScrollToTop>
    </main>
  );
};

export default App;
