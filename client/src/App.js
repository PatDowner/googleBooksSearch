import React from 'react'
import Saved from './pages/Saved'
import Searched from './pages/Searched'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Searched} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
