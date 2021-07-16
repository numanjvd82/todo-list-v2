import React from 'react';
import List from './components/List/List';
import './App.css';
import { useTodoContext } from './Context/Context';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

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
        {todos.length > 0 && (
          <Box mt={4}>
            <Flex justify="center">
              <Button
                onClick={() => clearTodos()}
                px={6}
                py={4}
                _hover={{ bg: 'gray.400', transform: 'translateY(-5px)' }}
                bg="gray.600"
                color="white"
                type="submit"
              >
                Clear All
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>
    </>
  );
};

export default App;
