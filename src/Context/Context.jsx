import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { getLocalStorage } from './utilityFuncs';
import { useToast } from '@chakra-ui/react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const toast = useToast();

  const [todos, setTodos] = useState(getLocalStorage()); // initial todos will be fetched from this local storage helper function
  const [value, setValue] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const inputRef = useRef();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  console.log(darkMode);

  const showAlert = (show = false, msg = '', type = '') => {
    return setAlert({ show, msg, type });
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    toast({
      title: 'Todo Deleted',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
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
    setValue(specificItem.todo);
  };

  const clearTodos = () => {
    let confirmClear = window.confirm(
      'Are you sure you want delete all your todos'
    );
    if (confirmClear) {
      setTodos([]);
      toast({
        title: 'All Todos Deleted',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Phew! Be Careful',
        status: 'info',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const searchTodos = (allTodos) => {
    if (searchVal === '') {
      return allTodos;
    } else if (allTodos.todo.toLowerCase().includes(searchVal.toLowerCase())) {
      return allTodos;
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'add-todo') {
      setValue(e.target.value);
    }
    if (e.target.name === 'search-todo') {
      setSearchVal(e.target.value);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        value,
        setValue,
        editing,
        inputRef,
        handleDelete,
        completeTodo,
        editTodo,
        clearTodos,
        setEditID,
        setEditing,
        editID,
        searchVal,
        setSearchVal,
        searchTodos,
        toggleDarkMode,
        darkMode,
        handleChange,
        toast,
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
