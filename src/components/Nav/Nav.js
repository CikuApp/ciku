import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import SearchBar from "components/SearchBar/SearchBar";
import LogInButton from "components/Nav/LogInButton";
import SignUpButton from "components/Nav/SignUpButton";

import { Text } from "components/Presentation";

function Nav() {
  return (
    <nav className="h-20 bg-gray-100">
      <div className="w-8/12 h-full mx-auto flex justify-between items-center">
        <Link to="/">
          <Text type="h1">LOGO</Text>
        </Link>
        <SearchBar />
        <div className="flex">
          <LogInButton />
          <SignUpButton />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
