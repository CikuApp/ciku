import React from "react";

// Components
import SelectLocation from "components/HomePage/SelectLocation";
import PageContainer from "components/Presentation/PageContainer";
import { Text } from "components/Presentation";
import homepageImage from "assets/images/brooke-lark-nTZOILVZuOg-unsplash-1.png";

const Information = () => {
  return (
    <PageContainer className="relative h-4/5 pt-28 bg-homepage bg-no-repeat bg-cover">
      <section className="flex h-4/5 mb-20">
        <div className="w-6/12 overflow-hidden">
          <img
            src={homepageImage}
            alt="a delicious meal"
            className="h-full w-full object-contain rounded-lg"
          />
        </div>
        <div className="w-6/12 flex flex-col justify-center ml-24">
          <Text type="h1" className="leading-tight">
            Find out which fruits and vegetables are currently in season.
          </Text>
          <Text type="h3" className="my-12">
            Select your state below to get started
          </Text>
          <SelectLocation />
        </div>
      </section>
    </PageContainer>
  );
};

export default Information;
