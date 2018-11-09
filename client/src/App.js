import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import IdeaPage from './components/IdeaPage';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

        <Navbar/>
        <Switch>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/ideas' component={IdeaPage}></Route>
          <Route path='/' component={HomePage}></Route>

        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
