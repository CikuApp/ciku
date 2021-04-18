import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { Button } from "components/Presentation";

function PrintShoppingListButton() {
  const handleClick = () => {
    // console.log("copied");
    // copyText.select();
    // document.execCommand("copy")
  };
  return (
    <Button size="sm" type="secondary" onClick={handleClick}>
      Print
    </Button>
  );
}

export default PrintShoppingListButton;
