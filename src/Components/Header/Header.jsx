import React from 'react';
import './Header.css';
import { useTodoContext } from '../../Context/Context';
import {
  Box,
  Flex,
  IconButton,
  Tooltip,
  useColorMode,
  Input,
} from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';

const Header = () => {
  const { searchVal, handleChange } = useTodoContext();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={colorMode === 'dark' ? '' : '#161414'} w="100%" p={4}>
        <Flex align="center" justify="space-between">
          <Tooltip
            p={2}
            rounded={4}
            label={colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            aria-label="A tooltip"
          >
            <IconButton
              mx={4}
              onClick={toggleColorMode}
              rounded="xl"
              aria-label="Enable Dark Mode"
              icon={colorMode === 'dark' ? <BsSun /> : <FaMoon />}
            />
          </Tooltip>
          <Tooltip
            p={2}
            rounded={4}
            label="Type to search Todos"
            aria-label="A tooltip"
          >
            <Input
              p={4}
              size="sm"
              w="320px"
              h="10"
              color={colorMode === 'dark' ? '' : 'white'}
              fontWeight="semibold"
              fontSize="md"
              _placeholder={{ color: 'white' }}
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
