import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LogInPage from './components/LogInPage'
import HomePage from './components/HomePage'
import IdeaPage from './components/IdeaPage'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/ideas" component={IdeaPage}/>
            <Route path="/" component={HomePage}/>
          </Switch>
          <h6>Below</h6>
        </div>
      </Router>
    );
  }
}

export default App;
