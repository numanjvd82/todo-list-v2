import React, { useRef, useState } from 'react';

import {
  Box,
  Button,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Divider,
} from '@chakra-ui/react';
import { useTodoContext } from '../../Context/Context';

const Alert = () => {
  const {
    todos,
    clearTodos,
    cancelRef,
    isOpen,
    onClose,
    setIsOpen,
    deleteRef,
  } = useTodoContext();

  const onClickDel = () => {
    clearTodos();
    onClose();
  };

  return (
    <>
      {todos.length > 0 && (
        <Box mt={4}>
          <Flex justify="center">
            <Button
              onClick={() => setIsOpen(true)}
              px={6}
              py={4}
              _hover={{ bg: 'gray.500', transform: 'translateY(-5px)' }}
              bg="gray.600"
              color="white"
              type="submit"
            >
              Clear All
            </Button>
          </Flex>
        </Box>
      )}

      <AlertDialog
        isCentered={true}
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete All Todos?
            </AlertDialogHeader>
            <Divider />
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ref={deleteRef}
                onClick={onClickDel}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Alert;
