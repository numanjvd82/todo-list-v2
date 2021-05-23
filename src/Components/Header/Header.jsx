import React from 'react';
import './Header.css';
import Input from '../Input/Input';
import { useTodoContext } from '../../Context/Context';

const Header = () => {
  const { searchVal } = useTodoContext();
  return (
    <>
      <header className="header">
        <Input
          name="search-todo"
          className="input input-search"
          placeholder="Search Todos"
          value={searchVal}
        />
      </header>
    </>
  );
};

export default Header;
