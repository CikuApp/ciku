import React from "react";

import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

import { Button } from "components/Presentation";

const SaveShoppingListButton = () => {
  const handleClick = () => {
    html2canvas(document.querySelector("#shopping-list")).then((canvas) => {
      canvas.style.display = "none";
      document.body.appendChild(canvas);
      canvas.toBlob((blob) => saveAs(blob, "my-shopping-list.png"));
      document.body.removeChild(canvas);
    });
  };

  return (
    <Button type="secondary" size="sm" onClick={null}>
      Save List
    </Button>
  );
};

export default SaveShoppingListButton;
