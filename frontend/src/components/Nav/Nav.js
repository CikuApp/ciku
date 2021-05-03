import React from "react";
import { Link } from "react-router-dom";

// Components
import SearchBar from "components/SearchBar/SearchBar";
import GroceryListButton from "components/Nav/GroceryListButton";
import AccountButton from "components/Nav/AccountButton";
import { Text } from "components/Presentation";

// Assets
import logo from "assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="h-28 bg-primary">
      <div className="w-full px-12 lg:px-24 xl:px-48 2xl:px-64 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Ciku" className="h-12 mr-2" />
          <Text type="logo" className="text-white">
            Ciku
          </Text>
        </Link>
        <SearchBar />
        <section className="flex items-stretch h-1/2 ">
          <GroceryListButton />
          <AccountButton />
        </section>
      </div>
    </nav>
  );
};

export default Nav;
