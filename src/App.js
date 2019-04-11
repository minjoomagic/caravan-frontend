import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
