import React from "react";
import { useRecoilValue } from "recoil";
import { Switch, Route, Redirect } from "react-router-dom";

// States
import searchRequestedAtom from "recoil/searchRequested/atom";

// Components
import Nav from "components/common/Nav";
import {
  HomePage,
  LocationPage,
  RecipePage,
  SearchResultsPage,
  ShoppingListPage,
} from "pages";
import ScrollToTop from "components/common/ScrollToTop";
import { PageContainer } from "components/templates";

const App = () => {
  const searchRequested = useRecoilValue(searchRequestedAtom);

  return (
    <main className="min-h-screen h-full mb-1 bg-background">
      <Nav />
      {searchRequested && <Redirect to="/recipes" />}
      <ScrollToTop>
        <PageContainer>
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
        </PageContainer>
      </ScrollToTop>
    </main>
  );
};

export default App;
