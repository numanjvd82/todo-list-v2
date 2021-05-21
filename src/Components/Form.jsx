import React from 'react';
import { useTodoContext } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const {
    inputRef,
    setValue,
    value,
    editing,
    showAlert,
    setTodos,
    todos,
    setEditing,
    editID,
    setEditID,
  } = useTodoContext();

  const handleSubmit = (e) => {
    if (!value) {
      e.preventDefault();
      showAlert(
        true,
        'Write Something in the Input, No empty list for you!',
        'danger'
      );
    } else if (value && editing) {
      e.preventDefault();
      setTodos(
        todos.map((item) => {
          if (item.id === editID) {
            return { ...item, todo: value };
          }
          return item;
        })
      );
      showAlert(true, 'Edit Successful', 'success');
      setEditID(null);
      setValue('');
      setEditing(false);
    } else {
      e.preventDefault();
      setTodos([...todos, { id: uuidv4(), todo: value, completed: false }]);
      showAlert(true, 'Todo Added Succesfully!', 'success');
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
        placeholder="Add a task"
        className="input"
      />
      <button className="btn-big btn-submit" type="submit">
        {editing ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
