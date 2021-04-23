import React from "react";
import { useRecoilValue } from "recoil";

import { userShoppingList } from "recoil/user";

import { Button } from "components/Presentation";

function CopyToClipboardButton() {
  const shoppingList = useRecoilValue(userShoppingList);

  const handleClick = () => {
    const copyText = document.createElement("textarea");
    copyText.value = shoppingList.join("\n");
    copyText.select();
    document.execCommand("copy");
  };

  return (
    <Button size="sm" type="secondary" onClick={handleClick}>
      Copy to Clipboard
    </Button>
  );
}

export default CopyToClipboardButton;
