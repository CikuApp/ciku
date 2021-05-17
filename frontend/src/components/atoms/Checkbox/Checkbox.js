import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const Checkbox = (props) => {
  const { checked } = props;
  return checked ? (
    <span {...props}>
      <MdCheckBox className="text-secondary text-2xl" />
      <input type="checkbox" className="hidden" defaultChecked={checked} />
    </span>
  ) : (
    <span {...props}>
      <MdCheckBoxOutlineBlank className="text-gray-light text-2xl" />
      <input type="checkbox" className="hidden" defaultChecked={checked} />
    </span>
  );
};

export default Checkbox;
