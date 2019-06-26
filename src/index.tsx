import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';
import configureStore from './redux/store'
import { setExponents } from './redux/actions';
import { exponents } from './lib/exponents';
import { compose } from 'ramda';

const store = configureStore()

{/* Initial computation of the exponents matrix */}
const {dimensions, degree} = store.getState()
compose(store.dispatch,setExponents,exponents)(dimensions, degree)

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
