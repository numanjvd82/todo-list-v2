import React from 'react';
import { useTodoContext } from '../../Context/Context';
import './Input.css';

const Input = ({ placeholder, className }) => {
  const { inputRef, setValue, value } = useTodoContext();
  const handleChange = (e) => {
    if (e.target.name === 'add-todo') {
      setValue(e.target.value);
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
      name="add-todo"
    />
  );
};

export default Input;
