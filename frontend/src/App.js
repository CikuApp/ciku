import React from "react";
import { useRecoilValue } from "recoil";
import { Switch, Route, Redirect } from "react-router-dom";

// Atoms
import searchRequestedAtom from "recoil/searchRequested/atom";

// Components
import Nav from "components/common/Nav";
import { HomePage, LocationPage, RecipePage } from "pages";
import SearchResultsPage from "components/SearchResultsPage/SearchResultsPage";
import ShoppingListPage from "components/ShoppingListPage/ShoppingListPage";
import ScrollToTop from "components/common/ScrollToTop";
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
