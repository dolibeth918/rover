import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {purple, green} from '@material-ui/core/colors'
import history from './history'
import store from './store'
import App from './app'

// establishes socket connection
import './socket'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
