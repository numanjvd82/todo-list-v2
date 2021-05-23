import React from 'react';
import { useTodoContext } from '../../Context/Context';
import './Input.css';

const Input = ({ placeholder, className, name, value }) => {
  const { inputRef, setValue, setSearchVal } = useTodoContext();
  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'add-todo') {
      setValue(e.target.value);
    }
    if (e.target.name === 'search-todo') {
      setSearchVal(e.target.value);
    }
  };

  return (
    <input
      ref={inputRef}
      onChange={handleChange}
      type="text"
      value={value}
      placeholder={placeholder}
      className={className}
      name={name}
    />
  );
};

export default Input;
