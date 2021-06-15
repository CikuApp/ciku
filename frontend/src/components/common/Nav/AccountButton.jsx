/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from 'components/atoms';
import { IoMdPerson } from 'react-icons/io';

const AccountButton = () => (
  <Link to="" className="flex align-end">
    <Button type="nav">
      <IoMdPerson className="mr-4" />
      Account
    </Button>
  </Link>
);

export default AccountButton;
