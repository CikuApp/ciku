import React from "react";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";

// States
import { userShoppingList } from "recoil/user";

// Components
import { AiFillCloseSquare } from "react-icons/ai";

const DeleteButton = ({ ingredient }) => {
  const [shoppingList, setShoppingList] = useRecoilState(userShoppingList);

  const handleClick = () => {
    setShoppingList((prevState) => {
      return prevState.filter((item) => item !== ingredient);
    });
  };

  return (
    <span className="mr-8" onClick={handleClick}>
      <AiFillCloseSquare className="text-3xl font-black text-red-500" />
    </span>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  ingredient: PropTypes.string,
};
