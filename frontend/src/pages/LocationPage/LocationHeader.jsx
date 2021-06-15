import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';

// States
import locationAtom from 'recoil/location';

// Components
import { PageSectionContainer } from 'components/templates';
import { Heading } from 'components/atoms';

const LocationHeader = () => {
  const { locationName } = useParams();
  const setLocation = useSetRecoilState(locationAtom);

  useEffect(() => {
    setLocation(locationName);
  }, [locationName, setLocation]);

  return (
    <PageSectionContainer
      bgClasses="bg-california bg-bottom"
      displayClasses="h-112 flex items-end"
    >
      <div className="max-w-max p-14 -ml-16 mb-8 rounded-lg bg-black bg-opacity-80">
        <Heading type="h1">{locationName.toUpperCase()}</Heading>
      </div>
    </PageSectionContainer>
  );
};

export default LocationHeader;
