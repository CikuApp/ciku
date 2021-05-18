import React from "react";
import PropTypes from "prop-types";

// Components
import { MdEdit } from "react-icons/md";
import { Button } from "components/atoms";

const EditListButton = ({ editable, handleSetEditable }) => {
  if (editable) {
    return (
      <Button type="secondary-active" onClick={handleSetEditable}>
        <MdEdit className="text-2xl mr-4" />
        Edit List
      </Button>
    );
  } else {
    return (
      <Button type="secondary" onClick={handleSetEditable}>
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
