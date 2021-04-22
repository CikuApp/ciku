import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "components/SearchBar/SearchBar";
import LogInButton from "components/Nav/LogInButton";
import SignUpButton from "components/Nav/SignUpButton";

import { Text } from "components/Presentation";

function Nav() {
  return (
    <nav className="h-28 bg-gray-100">
      <div className="max-w-screen-xl mx-48 2xl:mx-auto h-full flex justify-between items-center">
        <Link to="/">
          <Text type="h2">LOGO</Text>
        </Link>
        <SearchBar />
        <div className="flex items-stretch h-1/2 ">
          <LogInButton />
          <SignUpButton />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
