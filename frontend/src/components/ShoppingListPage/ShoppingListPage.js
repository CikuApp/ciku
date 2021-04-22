import React from "react";

import ShoppingList from "components/ShoppingListPage/ShoppingList";
import RecipeList from "components/ShoppingListPage/RecipeList";
import SaveShoppingListButton from "components/ShoppingListPage/SaveShoppingListButton";
import PrintShoppingListButton from "components/ShoppingListPage/PrintShoppingListButton";

function ShoppingListPage() {
  return (
    <main className="w-full flex">
      <section className="w-6/12">
        <RecipeList />
      </section>
      <section className="w-6/12">
        <ShoppingList />
        <div className="flex justify-between">
          <SaveShoppingListButton />
          <PrintShoppingListButton />
        </div>
      </section>
    </main>
  );
}

export default ShoppingListPage;
