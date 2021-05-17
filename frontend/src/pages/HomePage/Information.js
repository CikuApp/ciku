import React from "react";

// Components
import LocationSelectorForm from "pages/HomePage/LocationSelectorForm";
import { PageSectionContainer } from "components/templates";
import { Text, Heading } from "components/atoms";

// Assets
import deliciousMealImage from "assets/images/brooke-lark-nTZOILVZuOg-unsplash-1.png";

const Information = () => {
  return (
    <PageSectionContainer bgClasses="bg-homepage" displayClasses="flex h-112">
      <section className="w-6/12 pt-12 overflow-hidden">
        <img
          src={deliciousMealImage}
          alt="A Delicious Meal"
          className="my-10 lg:my-0 rounded-xl"
        />
      </section>
      <section className="w-6/12 pl-24 pt-8 flex items-center">
        <div className="h-3/5 flex flex-col justify-between">
          <Heading type="h2">
            Find out which fruits and vegetables are currently in season.
          </Heading>
          <Text type="xl" variant="medium">
            Select your state below to get started
          </Text>
          <LocationSelectorForm />
        </div>
      </section>
    </PageSectionContainer>
  );
};

export default Information;
