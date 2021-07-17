import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
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
          <HStack
            w="100%"
            maxW={{ base: '90vw', sm: '80vw', lg: '50cw', xl: '40vw' }}
            rounded="10px"
            m={3}
            px={3}
            py={2}
            borderColor="inputBorderHoverColor"
            borderWidth="2px"
            key={id}
            justify="space-between"
          >
            <IconButton
              variant="outline"
              onClick={() => completeTodo(id)}
              aria-label="Complete Todo"
              fontSize="20"
              icon={
                completed ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />
              }
            />
            <Text fontSize="20px" as={completed ? 'del' : ''}>
              {todo}
            </Text>
            <Box>
              <Flex>
                <IconButton
                  variant="outline"
                  onClick={() => {
                    inputRef.current.focus();
                    return editTodo(id);
                  }}
                  aria-label="Edit Todo"
                  fontSize="20"
                  icon={<AiFillEdit color="#718096" />}
                />

                <IconButton
                  ml={1}
                  variant="outline"
                  onClick={() => handleDelete(id)}
                  aria-label="Delete Todo"
                  fontSize="20"
                  icon={<AiTwotoneDelete color="#718096" />}
                />
              </Flex>
            </Box>
          </HStack>
        );
      })}
    </>
  );
};

export default List;
