import React from 'react';
import './Header.css';
import { useTodoContext } from '../../Context/Context';
import { Box, Flex, IconButton, Tooltip } from '@chakra-ui/react';
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
          <Tooltip
            p={2}
            rounded={4}
            label={darkMode ? 'Light Mode' : 'Dark Mode'}
            aria-label="A tooltip"
          >
            <IconButton
              mx={4}
              onClick={toggleDarkMode}
              rounded="xl"
              aria-label="Enable Dark Mode"
              icon={darkMode ? <BsSun /> : <FaMoon />}
            />
          </Tooltip>
          <Tooltip
            p={2}
            rounded={4}
            label="Enter to search Todos"
            aria-label="A tooltip"
          >
            <Input
              p={4}
              size="sm"
              w="320px"
              h="10"
              fontSize="md"
              color="darkFontColor"
              _placeholder={{ color: 'white' }}
              borderColor="inputBorderColor"
              borderWidth="2px"
              placeholder="Search Todos"
              name="search-todo"
              rounded="xl"
              value={searchVal}
              onChange={handleChange}
            />
          </Tooltip>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
