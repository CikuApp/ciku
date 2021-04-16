import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

function Checkbox({ value, checked, handleClick, className }) {
  if (checked) {
    return (
      <span className={className} onClick={handleClick}>
        <MdCheckBox className="text-xl mt-1" />
        <input type="checkbox" className="hidden" defaultChecked={checked} />
      </span>
    );
  } else {
    return (
      <span className={className} onClick={handleClick}>
        <MdCheckBoxOutlineBlank className="text-xl mt-1" />
        <input type="checkbox" className="hidden" defaultChecked={checked} />
      </span>
    );
  }
}

export default Checkbox;
