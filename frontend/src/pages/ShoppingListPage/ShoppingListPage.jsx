import React from 'react';

// Components
import ShoppingList from 'pages/ShoppingListPage/ShoppingList';
import RecipeList from 'pages/ShoppingListPage/RecipeList';
import { PageSectionContainer } from 'components/templates';

const ShoppingListPage = () => (
  <>
    <PageSectionContainer displayClasses="flex pt-12">
      <RecipeList />
      <ShoppingList />
    </PageSectionContainer>
  </>
);

export default ShoppingListPage;
