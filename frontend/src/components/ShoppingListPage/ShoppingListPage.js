import React from "react";

import ShoppingList from "components/ShoppingListPage/ShoppingList";
import RecipeList from "components/ShoppingListPage/RecipeList";
import SaveShoppingListButton from "components/ShoppingListPage/SaveShoppingListButton";
import CopyToClipboardButton from "components/ShoppingListPage/CopyToClipboardButton";

function ShoppingListPage() {
  return (
    <main className="w-full flex">
      <section className="w-6/12">
        <RecipeList />
      </section>
      <section className="w-6/12">
        <ShoppingList />
        <div className="flex justify-between">
          <CopyToClipboardButton />
          <SaveShoppingListButton />
        </div>
      </section>
    </main>
  );
}

export default ShoppingListPage;
