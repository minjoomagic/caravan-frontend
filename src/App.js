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
  console.log("App did Mount!, token is: ", token);
  fetch("http://localhost:3000/get_user", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      accepts: "application/json",
      authorization: `${token}`
    }
  })
  .then(resp => resp.json())
  .then(data => {
    console.log("data returned from API:", data)
    this.setState({ user: data.user })});
  console.log("end of component did mount")
}
// ================== HANDLE LOGIN ================
  onLoginHandler = (user) => {
    console.log("onLoginHandlerFIRING!!!")
    let token = localStorage.getItem("token");
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
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user})
    });
    console.log("token is:", localStorage.token)
    // this.props.history.push("/items");
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
      console.log("create user fired:", data)
      this.setState({ user: data.user})
      localStorage.setItem("token", data.token)
    })

  }
  // ================ HANDLE LOGOUT ================
  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
    this.setState({user: null})
  };



  render() {
    // console.log("this is my user:", this.state.user)
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
