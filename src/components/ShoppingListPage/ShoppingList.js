import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import shoppingListAtom from "recoil/shoppingList";

function ShoppingList({}) {
  const shoppingList = useRecoilValue(shoppingListAtom);
  return (
    <article>
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </article>
  );
}

export default ShoppingList;
