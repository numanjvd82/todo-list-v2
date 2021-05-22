import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { getLocalStorage } from './utilityFuncs';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getLocalStorage()); // initial todos will be fetched from this local storage helper function
  const [value, setValue] = useState({
    addInput: '',
    searchInput: '',
  });
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    msg: '',
    type: '',
    show: false,
  });

  const inputRef = useRef();

  const showAlert = (show = false, msg = '', type = '') => {
    return setAlert({ show, msg, type });
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    showAlert(true, 'Todo Deleted', 'danger');
  };

  const completeTodo = (id) => {
    const completedTodos = todos.map((todo) => {
      const { completed } = todo;
      return todo.id === id ? { ...todo, completed: !completed } : todo;
    });
    setTodos(completedTodos);
  };

  const editTodo = (id) => {
    const specificItem = todos.find((todo) => todo.id === id);
    setEditing(true);
    setEditID(id);
    setValue({ ...value, addInput: specificItem.todo });
  };

  const clearTodos = () => {
    let confirmClear = window.confirm(
      'Are you sure you want delete all your todos'
    );
    if (confirmClear) {
      setTodos([]);
      showAlert(true, 'All Todos Deleted', 'danger');
    } else {
      showAlert(true, 'Phew! Be Careful', 'warning');
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        value,
        setValue,
        editing,
        alert,
        inputRef,

        handleDelete,
        completeTodo,
        editTodo,
        clearTodos,
        showAlert,
        setEditID,
        setEditing,
        editID,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoProvider };
