import React from "react";
import PropTypes from "prop-types";

// Components
import { MdEdit } from "react-icons/md";
import { Button } from "components/Presentation";

const EditListButton = ({ editable, handleSetEditable }) => {
  if (editable) {
    return (
      <Button
        type="secondary-active"
        size="sm"
        onClick={handleSetEditable}
        className="mr-12"
      >
        <MdEdit className="text-2xl mr-4" />
        Edit List
      </Button>
    );
  } else {
    return (
      <Button
        type="secondary"
        size="sm"
        onClick={handleSetEditable}
        className="mr-12"
      >
        <MdEdit className="text-2xl mr-4 text-secondary" />
        Edit List
      </Button>
    );
  }
};

export default EditListButton;

EditListButton.propTypes = {
  editable: PropTypes.bool,
  handleSetEditable: PropTypes.func,
};
