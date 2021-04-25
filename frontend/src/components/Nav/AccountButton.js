import React from "react";
import { Link } from "react-router-dom";

import { Button } from "components/Presentation";
import { IoMdPerson } from "react-icons/io";

function AccountButton() {
  return (
    <Link to="" className="flex align-end">
      <Button type="nav-primary" size="sm" className="flex items-center">
        <IoMdPerson className="mr-4" />
        Account
      </Button>
    </Link>
  );
}

export default AccountButton;
