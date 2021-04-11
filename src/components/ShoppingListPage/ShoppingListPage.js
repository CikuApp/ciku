import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import shoppingListAtom from "recoil/shoppingList";
import ShoppingList from "components/ShoppingListPage/ShoppingList";
import SaveShoppingListButton from "components/ShoppingListPage/SaveShoppingListButton";
import PrintShoppingListButton from "components/ShoppingListPage/PrintShoppingListButton";

function ShoppingListPage({}) {
  const [shoppingList, setShoppingList] = useRecoilState(shoppingListAtom);
  return (
    <main className="w-full flex">
      <section className="w-5/12"></section>
      <section className="w-5/12">
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
