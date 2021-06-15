import React, { Suspense } from 'react';

// Components
import ProduceCardsWrapper from 'pages/LocationPage/ProduceCardsWrapper';
import FindRecipesButton from 'pages/LocationPage/FindRecipesButton';
import { Text, Heading } from 'components/atoms';
import { PageSectionContainer } from 'components/templates';
import Loading from 'components/common/Loading';

const ProduceSection = () => (
  <PageSectionContainer displayClasses="flex flex-col items-start">
    <div className="w-3/5 my-6 space-y-12">
      <Heading type="h2">Currently In-Season Produce</Heading>
      <Text type="xl">
        Choose from the list of local and seasonal fruits and vegetables below
        to learn how to make delicious meals with them!
      </Text>
    </div>
    <Suspense fallback={<Loading />}>
      <div className="w-full flex flex-col items-center">
        <ProduceCardsWrapper />
        <FindRecipesButton />
      </div>
    </Suspense>
  </PageSectionContainer>
);

export default ProduceSection;
