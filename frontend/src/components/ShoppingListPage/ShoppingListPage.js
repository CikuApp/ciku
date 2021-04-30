import React from "react";

// Components
import ShoppingList from "components/ShoppingListPage/ShoppingList";
import RecipeList from "components/ShoppingListPage/RecipeList";
import SaveShoppingListButton from "components/ShoppingListPage/SaveShoppingListButton";
import CopyToClipboardButton from "components/ShoppingListPage/CopyToClipboardButton";
import { PageContainer } from "components/Presentation";

const ShoppingListPage = () => {
  return (
    <PageContainer className="w-full flex mt-12 mb-24">
      <section className="w-6/12">
        <RecipeList />
      </section>
      <section className="w-6/12">
        <ShoppingList />
        <div className="flex justify-start">
          <CopyToClipboardButton />
          <SaveShoppingListButton />
        </div>
      </section>
    </PageContainer>
  );
};

export default ShoppingListPage;
