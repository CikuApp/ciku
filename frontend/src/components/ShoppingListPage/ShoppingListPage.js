import React from "react";

import ShoppingList from "components/ShoppingListPage/ShoppingList";
import RecipeList from "components/ShoppingListPage/RecipeList";
import CopyButton from "components/ShoppingListPage/CopyButton";
import SaveShoppingListButton from "components/ShoppingListPage/SaveShoppingListButton";

function ShoppingListPage() {
  return (
    <main className="w-full flex mt-12">
      <section className="w-6/12">
        <RecipeList />
      </section>
      <section className="w-6/12">
        <ShoppingList />
        <div className="flex justify-start">
          <CopyButton />
          <SaveShoppingListButton />
        </div>
      </section>
    </main>
  );
}

export default ShoppingListPage;
