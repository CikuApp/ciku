import React from "react";

import { Button } from "components/Presentation";

function CopyButton() {
  const handleClick = () => {
    // console.log("copied");
    // copyText.select();
    // document.execCommand("copy")
  };
  return (
    <Button size="sm" type="secondary" onClick={handleClick} className="mr-8">
      Copy to Clipboard
    </Button>
  );
}

export default CopyButton;
