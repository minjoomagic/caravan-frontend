import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';

import Main from './Components/Main'
import Signup from './Components/Signup'
import Login from './Components/Login'

class App extends Component {

  state ={
    user: null
  }

  componentDidMount() {
  let token = localStorage.getItem("token");
  console.log("app did mount");
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
// ================== HANDLE LOGIN ================
  onLoginHandler = (user) => {
    let token = localStorage.getItem("token");
    console.log("In App Login Function FIRING!!", user)
    fetch("http://localhost:3000/login_user",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        authorization: `${token}`
      },
      body: JSON.stringify({user})
    }
  )
    .then(resp => resp.json())
    // .then(data => console.log("we're here", data.user))
    .then(data => this.setState({ user: data.user}));
  }

// ================== HANDLE CREATE USER ================
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
  // ================ HANDLE LOGOUT ================
  logout = () => {
    console.log("logging out");
    localStorage.removeItem("token");
    this.props.history.push("/login");
    this.setState({user: null})
  };



  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        {this.state.user ? this.state.user.username : "Not Logged In"}
        <button onClick={this.logout}> Log Out </button>
        <Switch>
        <Route path="/items" render={routerProps => (<Main/>)}/>
        <Route path="/signup" render={routerProps => (<Signup onCreateUserHandler={this.onCreateUserHandler}/>)}/>
        <Route path="/login" render={routerProps => (<Login onLoginHandler={this.onLoginHandler}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
