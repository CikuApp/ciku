import React from "react";
import { useRecoilValue } from "recoil";

// Atoms
import { userShoppingList } from "recoil/user";

// Components
import { Text, Checkbox } from "components/Presentation";

const ShoppingList = () => {
  const shoppingList = useRecoilValue(userShoppingList);
  return (
    <div id="shopping-list" className="py-12 -mt-12 px-10 -mx-10">
      <Text type="h2" className="font-serif">
        Grocery List ({shoppingList.length})
      </Text>
      <ul className="mt-12">
        {shoppingList.map((item) => {
          return (
            <li key={item} className="flex my-4">
              <Checkbox
                value={item}
                checked={false}
                handleClick={null}
                className="mr-8 "
              />
              <Text type="h4">{item}</Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
