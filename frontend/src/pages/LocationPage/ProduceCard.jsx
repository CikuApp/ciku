/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';

// States
import searchParamsAtom from 'recoil/searchParams';

// Components
import { Text, Checkbox } from 'components/atoms';
import { GiTomato } from 'react-icons/gi';

const ProduceCard = ({ produceObject }) => {
  const [searchParams, setSearchParams] = useRecoilState(searchParamsAtom);

  const isInSearchParams = () => !!searchParams.includes(produceObject.name);

  const handleClick = () => {
    if (searchParams.includes(produceObject.name)) {
      setSearchParams(prevState => [
        ...prevState.filter(item => item !== produceObject.name)
      ]);
    } else {
      setSearchParams(prevState => [...prevState, produceObject.name]);
    }
  };

  return (
    <div
      className="justify-self-stretch min-w-68 h-18 my-8 mr-6 px-4 space-x-8 flex items-center overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <Checkbox checked={isInSearchParams()} />

      <div className="h-16 w-16 flex items-center justify-center bg-gray-100 rounded">
        {produceObject.image ? (
          <img src={produceObject.image} alt="" />
        ) : (
          <GiTomato className="text-gray-light text-4xl" />
        )}
      </div>
      <Text type="md" variant="bold">
        {produceObject.name}
      </Text>
    </div>
  );
};

export default ProduceCard;

ProduceCard.propTypes = {
  produceObject: PropTypes.object.isRequired
};
