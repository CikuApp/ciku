import React from "react";

import SelectLocation from "components/HomePage/SelectLocation";
import PopularRecipes from "components/HomePage/PopularRecipes";

import { Text } from "components/Presentation";

function HomePage() {
  return (
    <div className="w-full">
      <section className="flex mb-20">
        <img src="" alt="" className="w-6/12 h-96 bg-gray-100" />
        <div className="w-6/12 flex flex-col justify-center ml-8">
          <Text type="h1">Learn to eat more sustainably.</Text>
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
