import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import reduxStore from '../redux/configureStore';
import themes from '../styles/themes';
import TodoPage from './appTodo';

const App = () => (
  <Provider store={reduxStore}>
    <ThemeProvider theme={themes}>
      <TodoPage />
    </ThemeProvider>
  </Provider>
);

export default App;