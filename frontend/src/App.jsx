import React from 'react';
import { useRecoilValue } from 'recoil';
import { Switch, Route, Redirect } from 'react-router-dom';

// States
import searchRequestedAtom from 'recoil/searchRequested/atom';

// Components
import Nav from 'components/common/Nav';
import {
  HomePage,
  LocationPage,
  RecipePage,
  SearchResultsPage,
  ShoppingListPage
} from 'pages';
import { PageContainer } from 'components/templates';

const App = () => {
  const searchRequested = useRecoilValue(searchRequestedAtom);

  return (
    <main className="min-h-screen h-full mb-1 bg-background">
      <Nav />
      {searchRequested && <Redirect to="/recipes" />}
      <PageContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/locations/:locationName" component={LocationPage} />
          <Route path="/recipes/:recipeName" component={RecipePage} />
          <Route path="/recipes" component={SearchResultsPage} />
          <Route exact path="/shopping-list" component={ShoppingListPage} />
        </Switch>
      </PageContainer>
    </main>
  );
};

export default App;
