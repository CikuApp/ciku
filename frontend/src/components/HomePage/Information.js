import React from "react";

// Components
import SelectLocation from "components/HomePage/SelectLocation";
import PageContainer from "components/Presentation/PageContainer";
import { Text } from "components/Presentation";
import homepageImage from "assets/images/brooke-lark-nTZOILVZuOg-unsplash 1.png";

const Information = () => {
  return (
    <PageContainer className="relative h-4/5 pt-28 bg-homepage bg-no-repeat">
      <section className="flex h-112 mb-20">
        <div className="w-6/12 overflow-hidden">
          <img
            src={homepageImage}
            alt="a delicious meal"
            className="mx-auto my-10 lg:my-0"
          />
        </div>
        <div className="w-6/12 h-112 flex flex-col justify-center ml-24">
          <Text type="h1" className="leading-snug">
            Learn to eat more sustainably.
          </Text>
          <Text type="p" className="mt-4">
            Fruits and vegetables are at their freshest and tastiest when
            they’re local and in season. With reduced transportation and
            production costs for growers, seasonal produce can help your
            community, lower your environmental footprint, and reduce your
            grocery bills, too.
          </Text>
          <Text type="p" className="my-4">
            Want to find out which fruits and vegetables are in season right
            now? Get started by selecting your state below.
          </Text>
          <SelectLocation />
        </div>
      </section>
    </PageContainer>
  );
};

export default Information;
