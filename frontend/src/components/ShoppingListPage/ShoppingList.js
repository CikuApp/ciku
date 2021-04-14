import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { userShoppingList } from "recoil/user";

import { Text, Checkbox } from "components/Presentation";

function ShoppingList() {
  const shoppingList = useRecoilValue(userShoppingList);
  return (
    <div>
      <Text type="h2">Shopping List ({shoppingList.length})</Text>
      <ul className="my-12">
        {shoppingList.map((item) => {
          return (
            <li key={item} className="flex my-4">
              <Checkbox
                value={item}
                checked={false}
                handleClick={null}
                className="mr-8"
              />
              <Text type="h4">{item}</Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
