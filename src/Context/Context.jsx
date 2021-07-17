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
  const [isOpen, setIsOpen] = useState(false);

  // ref for closing the alert dialog
  const cancelRef = useRef(null);

  const inputRef = useRef();

  // deleteRef for catching the alertdialog del btn value
  const deleteRef = useRef(null);

  const onClose = () => setIsOpen(false);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    toast({
      title: 'Todo Deleted',
      status: 'error',
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
    if (deleteRef.current) {
      setTodos([]);
      toast({
        title: 'All Todos Deleted',
        status: 'warning',
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
        handleChange,
        toast,
        isOpen,
        setIsOpen,
        cancelRef,
        onClose,
        deleteRef,
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
