import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { Button } from "components/Presentation";

function PrintShoppingListButton() {
  return (
    <Button size="sm" type="secondary">
      Print
    </Button>
  );
}

export default PrintShoppingListButton;
