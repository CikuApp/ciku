import React from "react";

// Components
import ShoppingList from "components/ShoppingListPage/ShoppingList";
import RecipeList from "components/ShoppingListPage/RecipeList";
import SaveShoppingListButton from "components/ShoppingListPage/SaveShoppingListButton";
import CopyToClipboardButton from "components/ShoppingListPage/CopyToClipboardButton";
import { PageContainer } from "components/Presentation";

const ShoppingListPage = () => {
  return (
    <PageContainer className="w-full py-24">
      <div className="flex">
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
      </div>
    </PageContainer>
  );
};

export default ShoppingListPage;
