import React, { useState } from "react";
import { useRecoilValue } from "recoil";

// Atoms
import { userShoppingList } from "recoil/user";

// Components
import { Text, Checkbox } from "components/Presentation";
import DeleteItemButton from "components/ShoppingListPage/DeleteItemButton";
import EditListButton from "components/ShoppingListPage/EditListButton";

const ShoppingList = () => {
  const shoppingList = useRecoilValue(userShoppingList);
  console.log(shoppingList);
  const [editable, setEditable] = useState(false);

  const handleSetEditable = () => {
    setEditable((prev) => !prev);
  };

  return (
    <div id="shopping-list" className="py-12 -mt-12 px-10 -mx-10">
      <span className="flex items-center">
        <Text type="h2" className="font-serif mr-8">
          Grocery List ({shoppingList.length})
        </Text>
        <EditListButton
          editable={editable}
          handleSetEditable={handleSetEditable}
        />
      </span>
      <ul className="mt-12">
        {shoppingList.map((item) => {
          return (
            <li key={item} className="h-8 flex items-center my-4">
              {editable ? (
                <DeleteItemButton ingredient={item} />
              ) : (
                <Checkbox
                  value={item}
                  checked={false}
                  handleClick={null}
                  className="mr-8 "
                />
              )}
              <Text type="h4">{item}</Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
