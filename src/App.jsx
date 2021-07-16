import React from 'react';
import List from './components/List/List';
import Alert from './components/Alert/Alert';
import './App.css';
import { useTodoContext } from './Context/Context';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const App = () => {
  const { alert, todos, clearTodos } = useTodoContext();

  return (
    <>
      {alert.show && <Alert />}
      <Header />
      <Flex justify="center" direction="column" align="center">
        <Text
          bgGradient="linear(to-r, #2A0F57,#003779,#008DBE)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Todo List
        </Text>
        <Form />
        <section className="tasks">
          <span>
            {todos.length > 0 ? `Tasks - ${todos.length}` : 'No Tasks Given'}
          </span>
          <List key={todos.id} />
        </section>
        {todos.length > 0 && (
          <button
            onClick={() => clearTodos()}
            type="button"
            className="btn-big btn-clear"
          >
            Clear All
          </button>
        )}
      </Flex>
    </>
  );
};

export default App;
