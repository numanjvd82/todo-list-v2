import React from 'react';
import { useTodoContext } from '../../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, Flex, Input, Tooltip } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Form = () => {
  const {
    setValue,
    value,
    editing,
    setTodos,
    todos,
    setEditing,
    editID,
    setEditID,
    inputRef,
    handleChange,
    toast,
  } = useTodoContext();

  const handleSubmit = (e) => {
    if (!value) {
      e.preventDefault();
      toast({
        title: 'Write Something in the Input,',
        description: 'No empty list for you!',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
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
      toast({
        title: 'Edit Succesful',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      setEditID(null);
      setValue('');
      setEditing(false);
    } else {
      e.preventDefault();
      setTodos([...todos, { id: uuidv4(), todo: value, completed: false }]);
      toast({
        title: 'Todo Added Succesfully!',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tooltip
        p={2}
        rounded={4}
        label="Fun Fact ! You can also press enter to make a Todo"
        aria-label="A tooltip"
        placement="left-start"
      >
        <Input
          ref={inputRef}
          my={4}
          p={4}
          size="sm"
          w="320px"
          h="10"
          fontSize="md"
          fontWeight="bold"
          color="lightFontColor"
          _placeholder={{ color: 'gray.600' }}
          borderColor="inputBorderColor"
          _hover={{ borderColor: 'inputBorderHoverColor' }}
          borderWidth="2px"
          placeholder="Add Todos"
          name="add-todo"
          rounded="xl"
          value={value}
          onChange={handleChange}
        />
      </Tooltip>
      <Box mt={4}>
        <Flex justify="center">
          <Button
            leftIcon={<AddIcon />}
            px={6}
            py={4}
            _hover={{ bg: 'gray.400', transform: 'translateY(-5px)' }}
            bg="gray.600"
            color="white"
            type="submit"
          >
            {editing ? 'Edit' : 'Add'}
          </Button>
        </Flex>
      </Box>
    </form>
  );
};

export default Form;
