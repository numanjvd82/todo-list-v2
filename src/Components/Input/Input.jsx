import React from 'react';
import { useTodoContext } from '../../Context/Context';
import './Input.css';

const Input = ({ placeholder, className, name, value }) => {
  const { inputRef, setValue } = useTodoContext();
  const handleChange = (e) => {
    if (e.target.name === 'add-todo') {
      setValue({ ...value, addInput: e.target.value });
    }
    if (e.target.name === 'search-todo') {
      setValue({ ...value, searchInput: e.target.value });
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
