import React from 'react';
import { useTodoContext } from '../../Context/Context';
import './Input.css';

const Input = ({ placeholder, className, name, inputValue }) => {
  const { inputRef, handleChange } = useTodoContext();

  return (
    <input
      ref={inputRef}
      onChange={handleChange}
      type="text"
      value={inputValue}
      placeholder={placeholder}
      className={className}
      name={name}
    />
  );
};

export default Input;
