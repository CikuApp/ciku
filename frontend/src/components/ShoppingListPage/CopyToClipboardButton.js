import React from "react";
import { useRecoilValue } from "recoil";

import { userShoppingList } from "recoil/user";

import { Button } from "components/Presentation";

function CopyToClipboardButton() {
  const shoppingList = useRecoilValue(userShoppingList);

  const handleClick = () => {
    const copyText = document.createElement("textarea");
    copyText.value = shoppingList.join("\n");
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);
  };

  return (
    <Button size="sm" type="secondary" onClick={handleClick} className="mr-12">
      Copy to Clipboard
    </Button>
  );
}

export default CopyToClipboardButton;
