import React, { Suspense } from "react";

// Components
import ProduceWrapper from "components/LocationPage/ProduceWrapper";
import FindRecipesButton from "components/FindRecipesButton/FindRecipesButton";
import { Text, PageContainer } from "components/Presentation";

const ProduceSection = () => {
  return (
    <PageContainer className="flex flex-col items-center py-24">
      <Text type="h2" className="self-start font-serif font-bold">
        Currently In-Season Produce
      </Text>
      <Text type="h4" className="w-1/2 my-12">
        Choose from the list of local and seasonal fruits and vegetables below
        to learn how to make delicious meals with them!
      </Text>
      <Suspense fallback={<div>loading</div>}>
        <div className="flex flex-col items-center">
          <ProduceWrapper />
          <FindRecipesButton />
        </div>
      </Suspense>
    </PageContainer>
  );
};

export default ProduceSection;
