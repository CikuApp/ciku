import React from "react";

import SelectLocation from "components/HomePage/SelectLocation";
import PopularRecipes from "components/HomePage/PopularRecipes";

import { Text } from "components/Presentation";

function HomePage() {
  return (
    <div className="w-full mt-24">
      <section className="flex mb-20">
        <img src="" alt="" className="w-6/12 h-112 bg-gray-100" />
        <div className="w-6/12 flex flex-col justify-center ml-24">
          <Text type="h1" className="leading-snug">
            Learn to eat more sustainably.
          </Text>
          <Text type="p" className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <SelectLocation />
        </div>
      </section>
      <PopularRecipes />
    </div>
  );
}

export default HomePage;
