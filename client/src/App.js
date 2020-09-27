import React from 'react'
import Saved from './pages/Saved'
import Searched from './pages/Searched'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#00b0ff',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#ede7f6',
    },
  },
});

const App = () => {
  return (
    <Router>
      <div>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Searched} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </MuiThemeProvider>
      </div>
    </Router>
  )
}

export default App
