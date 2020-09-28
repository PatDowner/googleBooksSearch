import React from 'react'
import Saved from './pages/Saved'
import Searched from './pages/Searched'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#00b0ff',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const App = () => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <div>
          <Navbar />
          <Box m={1}>
            <Switch>
              <Route exact path="/" component={Searched} />
              <Route path="/saved" component={Saved} />
            </Switch>
          </Box>
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
