import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import App from './App'
import theme from './theme'
import configureStore, { AppState } from './redux/store'
import { setExponents } from './redux/actions'
import { makeExponentsArray } from './lib/exponents-array'
import { compose } from 'ramda'

const store = configureStore()

/* Initial computation of the exponents matrix */

const {dimensions, degree} : AppState = store.getState()

compose(store.dispatch,setExponents,makeExponentsArray)(dimensions?dimensions:1, degree?degree:0)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
)
