import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Main from './Components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
