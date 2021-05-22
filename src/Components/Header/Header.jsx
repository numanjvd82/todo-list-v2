import React from 'react';
import './Header.css';
import Input from '../Input/Input';

const Header = () => {
  return (
    <>
      <header className="header">
        <Input className="input input-search" placeholder="Search Todos" />
      </header>
    </>
  );
};

export default Header;
