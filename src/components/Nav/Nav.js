import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import SearchBar from "components/SearchBar/SearchBar";
import LogInButton from "components/Nav/LogInButton";
import SignUpButton from "components/Nav/SignUpButton";

function Nav() {
  return (
    <nav>
      <h1>LOGO</h1>
      <SearchBar />
      <LogInButton />
      <SignUpButton />
    </nav>
  );
}

export default Nav;
