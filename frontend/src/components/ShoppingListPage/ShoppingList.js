import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { userShoppingList } from "recoil/user";

import { Text } from "components/Presentation";

function ShoppingList() {
  const shoppingList = useRecoilValue(userShoppingList);
  return (
    <div>
      <Text type="h2">Shopping List ({shoppingList.length})</Text>
      <ul className="my-8">
        {shoppingList.map((item) => {
          return (
            <li key={item} className="flex my-4">
              <input type="checkbox" id={item} name={item} className="mr-4" />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
