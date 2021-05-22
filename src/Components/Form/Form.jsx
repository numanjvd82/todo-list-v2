import React from 'react';
import { useTodoContext } from '../../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/Input';

const Form = () => {
  const {
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
    if (!value.addInput) {
      e.preventDefault();
      showAlert(
        true,
        'Write Something in the Input, No empty list for you!',
        'danger'
      );
    } else if (value.addInput && editing) {
      e.preventDefault();
      setTodos(
        todos.map((item) => {
          if (item.id === editID) {
            return { ...item, todo: value.addInput };
          }
          return item;
        })
      );
      showAlert(true, 'Edit Successful', 'success');
      setEditID(null);
      setValue({ ...value, addInput: '' });
      setEditing(false);
    } else {
      e.preventDefault();
      setTodos([
        ...todos,
        { id: uuidv4(), todo: value.addInput, completed: false },
      ]);
      showAlert(true, 'Todo Added Succesfully!', 'success');
      setValue({ ...value, addInput: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={value.addInput}
        name="add-todo"
        className="input"
        placeholder="Add a Todo"
      />
      <button className="btn-big btn-submit" type="submit">
        {editing ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
