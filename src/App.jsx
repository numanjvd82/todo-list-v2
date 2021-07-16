import React from 'react';
import List from './components/List/List';
import './App.css';
import { useTodoContext } from './Context/Context';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { Box, Flex, Text } from '@chakra-ui/react';
import Alert from './Components/Alert/Alert';

const App = () => {
  const { todos, clearTodos } = useTodoContext();

  return (
    <>
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
        <Box w="50%">
          <Flex align="center" justify="flex-start">
            <Text fontSize="lg" fontWeight="semibold">
              {todos.length > 0 ? `Tasks - ${todos.length}` : 'No Tasks Given'}
            </Text>
          </Flex>
          <List key={todos.id} />
        </Box>
        <Alert />
      </Flex>
    </>
  );
};

export default App;
