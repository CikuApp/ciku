import React from 'react';
import { useSetRecoilState } from 'recoil';
import PropTypes from 'prop-types';

// States
import { userShoppingList } from 'recoil/user';

// Components
import { AiFillCloseSquare } from 'react-icons/ai';

const DeleteButton = ({ ingredient }) => {
  const setShoppingList = useSetRecoilState(userShoppingList);

  const handleClick = () => {
    setShoppingList(prevState => prevState.filter(item => item !== ingredient));
  };

  return (
    <span>
      <AiFillCloseSquare
        className="text-2xl text-red-500 cursor-pointer"
        onClick={handleClick}
      />
    </span>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  ingredient: PropTypes.string.isRequired
};
