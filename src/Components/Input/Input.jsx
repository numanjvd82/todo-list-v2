import React from 'react';
import { useTodoContext } from '../../Context/Context';
import './Input.css';

const Input = () => {
  const { inputRef, setValue, value } = useTodoContext();
  return (
    <input
      ref={inputRef}
      onChange={(e) => setValue(e.target.value)}
      type="text"
      value={value}
      placeholder="Add a task"
      className="input"
      name="add-todo"
    />
  );
};

export default Input;
