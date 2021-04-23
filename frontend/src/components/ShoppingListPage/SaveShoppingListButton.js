import React from "react";

import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import { Button } from "components/Presentation";

function SaveShoppingListButton() {
  const handleClick = () => {
    domtoimage
      .toBlob(document.getElementById("shopping-list"), {
        bgcolor: "white",
        // width: 500,
        // height: 1000,
      })
      .then((shoppingList) => {
        saveAs(shoppingList, "my-shopping-list.png");
      });
  };

  return (
    <Button type="secondary" size="sm" onClick={handleClick}>
      Save List
    </Button>
  );
}

export default SaveShoppingListButton;
