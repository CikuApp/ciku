import React from "react";
import { Link } from "react-router-dom";

// Components
import SearchBar from "components/common/SearchBar";
import GroceryListButton from "components/common/Nav/GroceryListButton";
import AccountButton from "components/common/Nav/AccountButton";

// Assets
import logo from "assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="h-28 bg-primary">
      <div className="w-full py-12 md:px-16 lg:px-20 xl:px-24 2xl:px-36 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-3xl">
          <img src={logo} alt="Ciku" className="h-12 mr-2" />
          Ciku
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
