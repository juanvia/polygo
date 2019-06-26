import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';
import configureStore from './redux/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
