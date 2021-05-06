import React from "react";
import PropTypes from "prop-types";

// Components
import { MdEdit } from "react-icons/md";
import { Button } from "components/Presentation";

const EditListButton = ({ editable, handleSetEditable }) => {
  if (editable) {
    return (
      <Button
        type="secondary"
        size="icon"
        onClick={handleSetEditable}
        className="text-white bg-secondary"
      >
        <MdEdit className="text-3xl" />
      </Button>
    );
  } else {
    return (
      <Button
        type="secondary"
        size="icon"
        onClick={handleSetEditable}
        className="text-secondary"
      >
        <MdEdit className="text-3xl" />
      </Button>
    );
  }
};

export default EditListButton;

EditListButton.propTypes = {
  editable: PropTypes.bool,
  handleSetEditable: PropTypes.func,
};
