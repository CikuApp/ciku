import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "components/SearchBar/SearchBar";
import GroceryListButton from "components/Nav/GroceryListButton";
import AccountButton from "components/Nav/AccountButton";

import { Text } from "components/Presentation";

function Nav() {
  return (
    <nav className="h-28 bg-primary">
      <div className="max-w-screen-xl mx-48 2xl:mx-auto h-full flex justify-between items-center">
        <Link to="/">
          <Text type="h2" className="text-white">
            LOGO
          </Text>
        </Link>
        <SearchBar />
        <div className="flex items-stretch h-1/2 ">
          <GroceryListButton />
          <AccountButton />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
