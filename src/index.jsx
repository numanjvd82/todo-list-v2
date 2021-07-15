import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from './Context/Context';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    headerBg: '#161414',
    inputBorderColor: '#302f2f',
    inputBg: '#131010',
    inputBorderHoverColor: '#538bca',
    bodyColor: '#38322E',
    fontColor: 'white',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
