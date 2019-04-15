import React from 'react'

class Signup extends React.Component{

  state = {
    username: "",
    password: "",
    address: "",
    phoneNumber: ""
  }

  onChangeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  onCreateUserHandler = () =>{
    this.props.onCreateUserHandler(this.state)
  }

  render(){
    return(
      <div>
        <h1> Welcome to Caravan! Signup to get started! </h1>
        <label>
        Username:
        <input onChange={this.onChangeHandler} type="text" name="username" />
        Password:
        <input onChange={this.onChangeHandler} type="password" name="password" />
        Address:
        <input onChange={this.onChangeHandler} type="text" name="address" />
        Phone Number:
        <input onChange={this.onChangeHandler} type="number" name="phoneNumber" />
        </label>
        <button onClick={this.onCreateUserHandler}> Create Account </button>
      </div>
    )
  }

}

export default Signup
