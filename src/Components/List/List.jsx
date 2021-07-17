import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillEdit,
  AiTwotoneDelete,
} from 'react-icons/ai';
import { useTodoContext } from '../../Context/Context';
import './List.css';

const List = () => {
  const { todos, handleDelete, completeTodo, editTodo, inputRef, searchTodos } =
    useTodoContext();

  return (
    <>
      {todos.filter(searchTodos).map((todoValues) => {
        const { id, todo, completed } = todoValues;
        return (
          <article key={id} className="task">
            <div className="list-text">
              <button onClick={() => completeTodo(id)} className="btn check">
                {completed ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
              </button>
              <h4 className={`text ${completed && `crossed`}`}>{todo}</h4>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  inputRef.current.focus();
                  return editTodo(id);
                }}
                className="btn edit"
              >
                <AiFillEdit />
              </button>
              <button onClick={() => handleDelete(id)} className="btn delete">
                <AiTwotoneDelete />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
