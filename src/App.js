import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Main from './Components/Main'
import Signup from './Components/Signup'

class App extends Component {

  state ={
    user: null
  }

  componentDidMount() {
  let token = localStorage.getItem("token");
  console.log("app did mount", token);
  fetch("http://localhost:3000/get_user", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      accepts: "application/json",
      authorization: `${token}`
    }
  })
  .then(resp => resp.json())
  .then(data => this.setState({ user: data.user }));
}

  onCreateUserHandler = (user) =>{
    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user: { username: user.username, password: user.password }
      })
    }
    fetch("http://localhost:3000/users", config)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({ user: data.user})
      localStorage.setItem("token", data.token)
    })

  }



  render() {
    return (
      <div className="App">
        {this.state.user ? this.state.user.username : "Not Logged In"}
        <Switch>
        <Route path="/items" render={routerProps => (<Main/>)}/>
        <Route path="/signup" render={routerProps => (<Signup onCreateUserHandler={this.onCreateUserHandler}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
