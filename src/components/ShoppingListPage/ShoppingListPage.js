import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import shoppingListAtom from "recoil/shoppingList";
import ShoppingList from "components/ShoppingListPage/ShoppingList";

function ShoppingListPage({}) {
  const [shoppingList, setShoppingList] = useRecoilState(shoppingListAtom);
  return (
    <div>
      <ShoppingList />
    </div>
  );
}

export default ShoppingListPage;
