import React from 'react'

class Login extends React.Component{

  state = {
    username: "",
    password: ""
  }

  onChangeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  onLoginHandler = () =>{
    this.props.onLoginHandler(this.state)
  }

  render(){
    return(
      <div>
        <h1> Welcome back to Caravan! Login to get started again! </h1>
        <label>
        Username:
        <input onChange={this.onChangeHandler} type="text" name="username" />
        Password
        <input onChange={this.onChangeHandler} type="password" name="password" />
        </label>
        <button onClick={this.onLoginHandler}> Sign in </button>
      </div>
    )
  }

}

export default Login
