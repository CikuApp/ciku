import React, { useState } from "react";
import { useRecoilValue } from "recoil";

// States
import { userShoppingList } from "recoil/user";

// Components
import { Text, Heading, Checkbox, ListItem2 } from "components/atoms";
import DeleteItemButton from "pages/ShoppingListPage/DeleteItemButton";
import EditListButton from "pages/ShoppingListPage/EditListButton";
import SaveShoppingListButton from "pages/ShoppingListPage/SaveShoppingListButton";

const ShoppingList = () => {
  const shoppingList = useRecoilValue(userShoppingList);
  const [editable, setEditable] = useState(false);

  const handleSetEditable = () => {
    setEditable((prev) => !prev);
  };

  return (
    <div className="w-1/2 space-y-14">
      <Heading type="h2">Grocery List ({shoppingList.length})</Heading>
      <ul className="space-y-2 my-8 -ml-4">
        {shoppingList.map((item) => {
          return (
            <ListItem2 key={item}>
              {editable ? (
                <DeleteItemButton ingredient={item} />
              ) : (
                <Checkbox value={item} checked={false} />
              )}
              <Text type="lg">{item}</Text>
            </ListItem2>
          );
        })}
      </ul>
      <div className="flex space-x-12">
        <EditListButton
          editable={editable}
          handleSetEditable={handleSetEditable}
        />
        <SaveShoppingListButton />
      </div>
    </div>
  );
};

export default ShoppingList;
