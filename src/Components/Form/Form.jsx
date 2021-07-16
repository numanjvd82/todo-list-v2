import React from 'react';
import { useTodoContext } from '../../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, Flex, Input, Tooltip } from '@chakra-ui/react';
// import Input from '../Input/Input';

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
    handleChange,
  } = useTodoContext();

  const handleSubmit = (e) => {
    if (!value) {
      e.preventDefault();
      showAlert(
        true,
        'Write Something in the Input, No empty list for you!',
        'danger'
      );
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
      showAlert(true, 'Edit Successful', 'success');
      setEditID(null);
      setValue('');
      setEditing(false);
    } else {
      e.preventDefault();
      setTodos([...todos, { id: uuidv4(), todo: value, completed: false }]);
      showAlert(true, 'Todo Added Succesfully!', 'success');
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tooltip
        p={2}
        rounded={4}
        label="Enter to make a Task"
        aria-label="A tooltip"
        placement="left-start"
      >
        <Input
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

{
  /* <button className="btn-big btn-submit" type="submit">
        {editing ? 'Edit' : 'Add'}
      </button> */
}
