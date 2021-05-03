import React, { Suspense } from "react";

// Components
import ProduceWrapper from "components/LocationPage/ProduceWrapper";
import FindRecipesButton from "components/FindRecipesButton/FindRecipesButton";
import { Text, PageContainer } from "components/Presentation";

const ProduceSection = () => {
  return (
    <PageContainer className="flex flex-col items-center py-24">
      <Text type="h2" className="mb-8 self-start">
        Find Recipes By Ingredient
      </Text>
      <Suspense fallback={<div>loading</div>}>
        <ProduceWrapper />
        <FindRecipesButton />
      </Suspense>
    </PageContainer>
  );
};

export default ProduceSection;
