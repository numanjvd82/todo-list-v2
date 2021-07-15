import React from 'react';
import './Header.css';
// import Input from '../Input/Input';
import { useTodoContext } from '../../Context/Context';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';

const Header = () => {
  const { searchVal, handleChange, toggleDarkMode, darkMode } =
    useTodoContext();
  return (
    <>
      <Box bg="headerBg" w="100%" p={4}>
        <Flex align="center" justify="space-between">
          <IconButton
            mx={4}
            onClick={toggleDarkMode}
            rounded="xl"
            aria-label="Search Todos"
            icon={darkMode ? <FaMoon /> : <BsSun />}
          />
          <Input
            p={4}
            size="sm"
            w="320px"
            h="10"
            fontSize="md"
            color="fontColor"
            borderColor="inputBorderColor"
            borderWidth="1px"
            placeholder="Search Todos"
            name="search-todo"
            rounded="xl"
            value={searchVal}
            onChange={handleChange}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Header;
