import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import { Button } from "components/Presentation";

function SaveShoppingListButton({}) {
  return (
    <Button type="secondary" size="sm">
      Save List
    </Button>
  );
}

export default SaveShoppingListButton;
