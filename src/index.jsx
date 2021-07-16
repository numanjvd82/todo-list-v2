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
    darkFontColor: 'white',
    lightFontColor: 'black',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#38322E' : '#E1E5F2',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
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
